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

        // ✅ Configure Brevo SMTP (use verified sender)
        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
                user: "98b923001@smtp-brevo.com", // ✅ verified sender email
                pass: "zdTgcAwrFRYsQPXm", // 🔒 your Brevo SMTP key
            },
        });

        // ✅ Email sending
        await transporter.sendMail({
            from: `"Neuskale Title Orders" <YOUR_VERIFIED_SENDER_EMAIL>`,
            replyTo: email, // ✅ replies go to the user who filled the form
            to: "rathan@ventois.com", // where you’ll receive the order
            subject: `🧾 New Title Order - ${state}, ${county}`,
            html: `
        <div style="font-family: Arial, sans-serif; background: #f9fafb; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">
            <div style="background: #1e40af; color: white; padding: 16px 24px;">
              <h2 style="margin: 0;">🏡 New Title Order Received</h2>
            </div>
            <div style="padding: 20px 24px;">
              <table style="width: 100%; font-size: 15px; color: #333;">
                <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
                <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
                <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
                <tr><td><strong>Company:</strong></td><td>${company}</td></tr>
                <tr><td><strong>Property Address:</strong></td><td>${propertyaddress}</td></tr>
                <tr><td><strong>Parcel Number:</strong></td><td>${parcelnumber}</td></tr>
                <tr><td><strong>Owner Name:</strong></td><td>${ownername}</td></tr>
                <tr><td><strong>State:</strong></td><td>${state}</td></tr>
                <tr><td><strong>County:</strong></td><td>${county}</td></tr>
                <tr><td><strong>Service:</strong></td><td>${service}</td></tr>
                <tr><td><strong>Rate:</strong></td><td>$${rate}</td></tr>
              </table>
              <p style="margin-top: 20px;"><strong>Comments:</strong><br>${comments || "—"}</p>
            </div>
            <div style="background: #f1f5f9; text-align: center; padding: 12px; color: #555; font-size: 13px;">
              © ${new Date().getFullYear()} Neuskale Title. All rights reserved.
            </div>
          </div>
        </div>
      `,
        });

        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        res.status(500).json({ message: "Error sending email", error: error.message });
    }
}
