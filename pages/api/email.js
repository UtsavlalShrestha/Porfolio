import { Resend } from 'resend'
import EmailTemplate from '../../components/EmailTemplate'
const resend = new Resend(process.env.RESEND_API_KEY)

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    await resend.sendEmail({
      from: 'utsavshrestha59.com.np <website@utsavshrestha59.com.np>',
      to: 'shresthautsav18@gmail.com',
      replyTo: data.email,
      subject: `${data.name} - via utsavshrestha59.com.np`,
      react: <EmailTemplate {...data} />,
    })

    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    asasasas
    res.status(500).json({ message: e.message })
  }
}
