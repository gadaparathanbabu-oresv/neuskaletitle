import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { name, email, phone, reason, message } = req.body;

        // ✅ Configure Brevo SMTP
        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
                user: "98b923001@smtp-brevo.com", // ✅ verified sender email
                pass: "zdTgcAwrFRYsQPXm",         // 🔒 your Brevo SMTP key
            },
        });

        // ✅ Email sending
        await transporter.sendMail({
            from: `"contact from ${name}" <laxmir22@gmail.com>`, // ✅ Verified sender: user who submitted the form
            to: "rathan@ventois.com",      // where you want to receive submissions
            subject: `📩 New Contact Form Submission: ${reason || "General Inquiry"}`,
            html: `
        <div style="font-family: Arial, sans-serif; background: #f9fafb; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">
            <div style="background: #1e40af; color: white; padding: 16px 24px;">
              <h2 style="margin: 0;">📬 New Contact Form Submission</h2>
            </div>
            <div style="padding: 20px 24px;">
              <table style="width: 100%; font-size: 15px; color: #333;">
                <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
                <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
                <tr><td><strong>Phone:</strong></td><td>${phone || "—"}</td></tr>
                <tr><td><strong>Reason:</strong></td><td>${reason || "—"}</td></tr>
              </table>
              <p style="margin-top: 20px;"><strong>Message:</strong><br>${message}</p>
            </div>
            <div style="background: #f1f5f9; text-align: center; padding: 12px; color: #555; font-size: 13px;">
              © ${new Date().getFullYear()} Neuskale Title. All rights reserved.
            </div>
          </div>
        </div>
      `,
        });

        res.status(200).json({ message: "Contact form email sent successfully" });
    } catch (error) {
        console.error("❌ Error sending contact email:", error);
        res.status(500).json({ message: "Error sending contact email", error: error.message });
    }
}
