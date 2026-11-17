import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { checkRateLimit, createRateLimitResponse } from '@/app/lib/rateLimit';

export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting: 5 contact enquiries per 10 minutes per IP
    const rateLimit = await checkRateLimit(request, {
      maxRequests: 5,
      windowSeconds: 600,
      keyPrefix: 'send_contact_enquiry',
    });

    if (!rateLimit.success) {
      return createRateLimitResponse(
        rateLimit.reset,
        'Too many contact requests. Please wait a few minutes before trying again.'
      );
    }

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

    const emailAddress = process.env.EMAIL_USER || process.env.NEXT_PUBLIC_EMAIL;
    const emailPassword = process.env.EMAIL_PASS || process.env.NEXT_PUBLIC_EMAIL_PASS;

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

    const safeName = String(name).trim().slice(0, 100);
    const safeEmail = String(email).trim().slice(0, 255);
    const safePhone = phone ? String(phone).trim().slice(0, 50) : 'Not provided';
    const safeSubject = subject ? String(subject).trim().slice(0, 150) : 'Question';
    const safeMessage = String(message).slice(0, 3000);

    const mailOptions = {
      from: `"Contact Form" <${emailAddress}>`,
      to: emailAddress,
      replyTo: safeEmail,
      subject: `Contact Enquiry: ${safeSubject}`,
      text: `
New Contact Enquiry:

Name: ${safeName}
Email: ${safeEmail}
Phone: ${safePhone}
Subject: ${safeSubject}

Message:
${safeMessage}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9D7F5F;">New Contact Enquiry</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>Subject:</strong> ${safeSubject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">${safeMessage}</p>
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
