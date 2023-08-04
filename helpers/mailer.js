const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth:{
        user: 'whispermailer@gmail.com',
        pass:'mjesgojgnhfebdqq'
    }
})

transporter.verify().then( () => {
    console.log('Mailer Ready ✅✅')
})


module.exports = { transporter }