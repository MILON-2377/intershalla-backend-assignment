const nodemailer = require("nodemailer");

async function sendMailAlet() {
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:"milon.sheikh.msk@gmail.com",
            pass:"dsfs"
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient@example.com',
        subject: 'Lead Conversion Alert',
        text: 'Alert: Conversion rate has dropped below the threshold.',
      };
    
      await transporter.sendMail(mailOptions);
      console.log('Email alert sent');
    
}

module.exports = {sendMailAlet};