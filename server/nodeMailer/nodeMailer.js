const nodeMailer = require('nodemailer')

const html = `
  <h1>This is an example email</h1>
`;

async function main(email) {

  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
    auth: {
      user: 'thebarkauth@gmail.com',
      pass: 'sjmt wvjx czoy nuzy'
    }
  });

  const info = await transporter.sendMail({
    from: 'thebarkauth@gmail.com',
    to: email,
    subject: 'ACCOUNT AUTHENTICATION FOR THE BARK',
    html: html,
  })
}

module.exports = main