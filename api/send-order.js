import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const {
            name,
            email,
            phone,
            company,
            propertyaddress,
            parcelnumber,
            ownername,
            comments,
            state,
            county,
            service,
            rate,
        } = req.body;

        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false, // use TLS
            auth: {
                user: "98b923001@smtp-brevo.com", // your Mailtrap user
                pass: "zdTgcAwrFRYsQPXm", // your Mailtrap password
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`, // user's email used here
            to: "rathan@ventois.com", // where you want the form sent
            subject: `New Title Order - ${state}, ${county}`,
            html: `
  <div style="font-family: 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f8f9fb; padding: 30px;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); overflow: hidden;">
      <div style="background-color: #1e40af; color: white; padding: 20px 30px;">
        <h2 style="margin: 0;">🏡 New Title Order Received</h2>
      </div>

      <div style="padding: 25px 30px;">
        <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
          You’ve received a new title order from <strong>${name}</strong>. Below are the details:
        </p>

        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr><td style="padding: 8px 0; color: #555;"><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Phone:</strong></td><td>${phone}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Company:</strong></td><td>${company}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Property Address:</strong></td><td>${propertyaddress}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Parcel Number:</strong></td><td>${parcelnumber}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Owner Name:</strong></td><td>${ownername}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Comments:</strong></td><td>${comments || "—"}</td></tr>
        </table>

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">

        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr><td style="padding: 8px 0; color: #555;"><strong>State:</strong></td><td>${state}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>County:</strong></td><td>${county}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Service:</strong></td><td>${service}</td></tr>
          <tr><td style="padding: 8px 0; color: #555;"><strong>Rate:</strong></td><td><strong style="color: #1e40af;">$${rate}</strong></td></tr>
        </table>

        <div style="text-align: center; margin-top: 25px;">
          <a href="mailto:${email}" style="background-color: #1e40af; color: #fff; text-decoration: none; padding: 10px 22px; border-radius: 6px; font-weight: 500; display: inline-block;">
            Reply to ${name}
          </a>
        </div>
      </div>

      <div style="background-color: #f1f5f9; padding: 15px 30px; text-align: center; font-size: 13px; color: #777;">
        © ${new Date().getFullYear()} Neuskale Title. All rights reserved.
      </div>
    </div>
  </div>
`
        });

        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending email", error: error.message });
    }
}
