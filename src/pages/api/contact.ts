import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { fullName, email, phoneNumber, subject, message } = req.body;

  console.log("Received Form Data:", req.body);

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
    return res.status(500).json({
      success: false,
      message: "Email service is not configured correctly.",
    });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // ✅ Construct email body dynamically based on subject
  let emailBody = `Name: ${fullName}\nSubject: ${subject}\n`;

  // Only include email if it's provided (not for Testimony)
  if (email) {
    emailBody += `Email: ${email}\n`;
  }

  if (subject !== "Testimony") {
    emailBody += `Phone Number: ${phoneNumber}\n`; // Include phone number if NOT Testimony
  }

  emailBody += `Message:\n${message}`;

  try {
    const mailOptions = {
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${subject}`,
      text: emailBody,
      ...(email ? { replyTo: email } : {}),
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message:
        "Failed to send email. If this persists, please contact church admin directly.",
    });
  }
}
