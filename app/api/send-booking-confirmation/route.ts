import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      bookingId,
      checkIn,
      checkOut,
      firstName,
      lastName,
      email,
      telephone,
      fullPrice,
      paidPrice,
      apartmentid,
      comments
    } = body;

    if (!checkIn || !checkOut || !firstName || !lastName || !email) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const emailAddress = process.env.NEXT_PUBLIC_EMAIL;
    const emailPassword = process.env.NEXT_PUBLIC_EMAIL_PASS;

    if (!emailAddress || !emailPassword) {
      console.error('Email credentials not configured');
      return NextResponse.json({ message: 'Email service not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailAddress,
        pass: emailPassword,
      },
    });

    // Determine villa name based on apartmentid
    let villaName = '';
    if (apartmentid === 1) {
      villaName = 'Abstract Apartment';
    } else if (apartmentid === 2) {
      villaName = 'Abstract Studio';
    } else {
      villaName = 'Abstract';
    }

    // Calculate remaining balance
    const remainingBalance = (fullPrice || 0) - (paidPrice || 0);

    // Calculate nights
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));

    const mailOptions = {
      from: `"Abstract Apartment" <${emailAddress}>`,
      to: email,
      subject: 'Потвърждение на Резервация',
      text: `
Вашата резервация е потвърдена!

Имена: ${firstName} ${lastName}
Телефон: ${telephone || 'N/A'}
Тип: ${villaName}
Настаняване: ${checkIn}
Отдаване: ${checkOut}
Нощувки: ${nights}
Пълна Сума: €${fullPrice || 0}
Платена Сума: €${paidPrice || 0}
Оставащ баланс: €${remainingBalance}
${comments ? `Коментари: ${comments}` : ''}

Благодарим ви за резервацията!

С уважение,
Екипът на Abstract Apartment
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9D7F5F;">Потвърждение на Резервация</h2>
          <p style="color: #16a34a; font-size: 18px; font-weight: bold; margin: 20px 0;">
            Вашата резервация е потвърдена!
          </p>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Имена:</strong> ${firstName} ${lastName}</p>
            <p><strong>Телефон:</strong> ${telephone || 'N/A'}</p>
            <p><strong>Тип:</strong> ${villaName}</p>
            <p><strong>Настаняване:</strong> ${checkIn}</p>
            <p><strong>Отдаване:</strong> ${checkOut}</p>
            <p><strong>Нощувки:</strong> ${nights}</p>
            <p><strong>Пълна Сума:</strong> €${fullPrice || 0}</p>
            <p><strong>Платена Сума:</strong> €${paidPrice || 0}</p>
            <p><strong>Оставащ баланс:</strong> €${remainingBalance}</p>
            ${comments ? `<p><strong>Коментари:</strong> ${comments}</p>` : ''}
          </div>
          <p style="margin-top: 30px; color: #666;">
            Благодарим ви за резервацията!
          </p>
          <p style="color: #666;">
            С уважение,<br>
            Екипът на Abstract Apartment
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Confirmation email sent successfully' });
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return NextResponse.json({ message: 'Failed to send confirmation email' }, { status: 500 });
  }
}
