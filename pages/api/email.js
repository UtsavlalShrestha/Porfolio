import { Resend } from 'resend';

export default async function sendEmail(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Request body:', req.body);
    const data = req.body;

    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    console.log('RESEND_API_KEY in production:', process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: 'website@utsavshrestha59.com.np',
      to: 'utsavlalshrestha@gmail.com',
      replyTo: data.email,
      subject: `${data.name} - via utsavshrestha59.com.np`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`, // Plain text
    });
    console.log('Email sent successfully:', result);
    res.status(200).json({ message: 'Email sent' });
  } catch (e) {
    console.error('Failed to send email:', e);
    res.status(500).json({ message: e.message || 'Internal server error' });
  }
}