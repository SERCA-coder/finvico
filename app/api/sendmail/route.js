import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Kreiraj transporter za Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'finvico18@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD, // koristi app password, ne običan password
      },
    });

    // Sastavi email
    const mailOptions = {
      from: 'finvico18@gmail.com',
      to: 'finvico18@gmail.com',
      subject: `New message from Finvico site: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    };

    // Pošalji email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
} 