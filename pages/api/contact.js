import sgMail from "@sendgrid/mail"
sgMail.setApiKey(process.env.SENDGRID_API)

export default async function sendMail(req, res) {
  const { name, email, message } = req.body
  const msg = {
    to: "jm@bumpdigital.com.au",
    from: "jm@bumpdigital.com.au",
    subject: "New message from " + name,
    html: `
			<p><strong> Name: </strong>  ${name} </p>
			<p><strong>Email:</strong> ${email} </p> 
			<p><strong>Message: </strong></p>
			<p>${message}</p>
		`,
  }
  try {
    const response = await sgMail.send(msg)
    res.json({ message: "Email has been sent" })
  } catch (error) {
    res.status(500).json({ error: "Error sending email" })
  }
}
