const nodeMailer = require('nodemailer')

async function main(email, username) {

  const html = `
  <h1>Click this link to verify your account</h1>
  <a href="https://mern-project-barker-ceabe269d73c.herokuapp.com/">Click me to verify!</a>
`;

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