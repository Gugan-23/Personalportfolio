const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json('send email');
});
app.post('/', (req, res) => {

  const { name, email, message } = req.body;
  console.log('Received email details:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'h8702643@gmail.com', 
      pass: 'osxa rglp zcir cimn', 
      
        
    },
  });

  const mailOptions = {
    from: email,
    to: 'v.gugan16@gmail.com', 
    subject: `Message from ${name}`,
    
    text: `You have received a new message from your portfolio  form.\n\n
    Here are the details:\n\n
    Name: ${name}\n
    Email: ${email}\n
    Message: ${message}`
    
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

