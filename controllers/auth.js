import User from '../models/user.js'
import generateToken from '../middleware/generateToken.js'
import OTP from '../models/otp.js'
import rn from 'random-number'
import nodemailer from 'nodemailer'
//import sgTransport from 'nodemailer-sendgrid-transport'
//import sgmail from '@sendgrid/mail'

// // const mailer_auth = {
// //     user: "apikey",
// //     pass: "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",
// //   };
// //   const transport = nodemailer.createTransport({
// //     // host: "smtp.sendgrid.net",
// //     // port: 25,
// //     // secure: false,
// //     service: "SendGrid",
// //     // requireTLS: false,
// //     auth: mailer_auth,
// //   });

// const mailer_auth = {
//   user: 'first-api',
//   pass: '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',
// }

// const transport = nodemailer.createTransport({
//   host: 'smtp.sendgrid.net',
//   port: 25,
//   secure: false,
//   service: 'SendGrid',
//   requireTLS: false,
//   auth: mailer_auth,
// })

// export const otpController = async (req, res) => {
//   const { email } = req.body
//   try {
//     const user = await User.findOne({ email })
//     if (user) {
//       return res.json({ error: 'already exist' })
//     }
//     var options = {
//       min: 100000,
//       max: 999999,
//       integer: true,
//     }
//     var otpNumber = rn(options)
//     console.log('sending OTP: ' + otpNumber + ' to ' + req.body.email)
//     const mailOptions = {
//       from: 'ssoumyaprakash05@gmail.com',
//       to: req.body.email,
//       subject: 'OTP from College Project',
//       text: 'Your OTP for Registration is ' + otpNumber,
//     }

//     transport.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         console.log(err)
//       } else {
//         console.warn('checking', info)
//       }
//     })

//     const otp = new OTP({ otp: otpNumber })
//     await otp.save()
//     res.json({ otp })
//   } catch (err) {
//     return res.json({ error: err })
//   }
// }

export const signup = async (req, res) => {
  try {
    const { name, email, password, otp, branch, admission } = req.body
    // console.log(name,email);
    var user = await User.findOne({ email })
    if (user) {
      return res.json({ error: 'already exist' })
    }
    var otpExist = await OTP.findOne({ otp })
    if (!otpExist) {
      return res.json({ error: 'incorrect otp' })
    }

    user = new User({ name, email, password, branch, admission })

    const newUser = await user.save()

    res.json({ newUser, token: generateToken(newUser._id) })
  } catch (err) {
    return res.json({ error: err })
  }
}

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
      res.json({
        user,
        token: generateToken(user._id),
      })
    } else {
      res.status(422).json({ error: 'invalid email or password' })
    }
  } catch (err) {
    res.status(422).json({ error: err })
  }
}
