import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      checkIn, 
      checkOut, 
      firstName, 
      lastName, 
      telephone, 
      email,
      fullPrice, 
      paidPrice,
      villaType,
      apartmentPrice,
      studioPrice,
      totalNights,
      guests,
      comments
    } = body;

    if (!checkIn || !checkOut || !firstName || !lastName || !telephone) {
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

    // Determine villa name
    let villaName = '';
    if (villaType === 'apartment') {
      villaName = 'Abstract Apartment';
    } else if (villaType === 'studio') {
      villaName = 'Abstract Studio';
    } else if (villaType === 'both') {
      villaName = 'Abstract Apartment + Studio';
    }

    // Calculate remaining balance
    const remainingBalance = fullPrice - paidPrice;

    const mailOptions = {
      from: `"Booking Form" <${emailAddress}>`,
      to: emailAddress,
      subject: 'Нова Заявка за Резервация',
      text: `
Нова Заявка е получена:

Имена: ${firstName} ${lastName}
Email: ${email || 'Не е предоставен'}
Телефон: ${telephone}
Тип: ${villaName}
Настаняване: ${checkIn}
Отдаване: ${checkOut}
Нощувки: ${totalNights || 'N/A'}
Гости: ${guests || 'N/A'}
${villaType === 'both' ? `Цена Апартамент: €${apartmentPrice || 0}\nЦена Студио: €${studioPrice || 0}\n` : ''}
Пълна Сума: €${fullPrice}
Платена Сума: €${paidPrice}
Оставащ баланс: €${remainingBalance}
${comments ? `Коментари: ${comments}` : ''}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9D7F5F;">Нова Заявка за Резервация</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Имена:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email || 'Не е предоставен'}</p>
            <p><strong>Телефон:</strong> ${telephone}</p>
            <p><strong>Тип:</strong> ${villaName}</p>
            <p><strong>Настаняване:</strong> ${checkIn}</p>
            <p><strong>Отдаване:</strong> ${checkOut}</p>
            <p><strong>Нощувки:</strong> ${totalNights || 'N/A'}</p>
            <p><strong>Гости:</strong> ${guests || 'N/A'}</p>
            ${villaType === 'both' ? `
            <p><strong>Цена Апартамент:</strong> €${apartmentPrice || 0}</p>
            <p><strong>Цена Студио:</strong> €${studioPrice || 0}</p>
            ` : ''}
            <p><strong>Пълна Сума:</strong> €${fullPrice}</p>
            <p><strong>Платена Сума:</strong> €${paidPrice}</p>
            <p><strong>Оставащ баланс:</strong> €${remainingBalance}</p>
            ${comments ? `<p><strong>Коментари:</strong> ${comments}</p>` : ''}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
