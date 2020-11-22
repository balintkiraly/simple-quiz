import nodemailer from 'nodemailer'
import { emailOptions, url } from '../config/environment'

export const sendResetPasswordMail = (email, token) => {
  const transporter = nodemailer.createTransport(emailOptions)

  const tokenUrl = url(`auth/reset-password/${token}`)
  const options = {
    from: 'simple-quiz@example.org',
    to: email,
    subject: 'Reset Password',
    text: `${tokenUrl}`,
  }

  transporter.sendMail(options, (error) => {
    if (error) {
      console.log(error)
    }
  })
}
