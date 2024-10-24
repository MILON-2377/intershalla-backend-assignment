const nodemailer = require("nodemailer");

async function sendMailAlet(req, res) {
  try {
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.email_user,
    //     pass: process.env.email_pass,
    //   },
    // });

    // const mailOptions = {
    //   from: process.env.email_user,
    //   to: process.env.email_user,
    //   subject: "Alert: New Lead Added",
    //   text: "Alert: a new lead has been added to the crm system",
    // };

    // await transporter.sendMail(mailOptions);

    
    res.status(200).json({ message: "Alert: email sent successfully" });
  } catch (error) {
    console.log("email send error", error);
    res.status(500).json({message:error});
  }
}

module.exports = { sendMailAlet };
