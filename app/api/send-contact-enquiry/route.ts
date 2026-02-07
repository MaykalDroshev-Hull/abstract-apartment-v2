import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      subject, 
      message 
    } = body;

    if (!name || !email || !message) {
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

    const mailOptions = {
      from: `"Contact Form" <${emailAddress}>`,
      to: emailAddress,
      subject: `Contact Enquiry: ${subject || 'Question'}`,
      text: `
New Contact Enquiry:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'Question'}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9D7F5F;">New Contact Enquiry</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject || 'Question'}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Enquiry sent successfully' });
  } catch (error) {
    console.error('Error sending contact enquiry:', error);
    return NextResponse.json({ message: 'Failed to send enquiry' }, { status: 500 });
  }
}
