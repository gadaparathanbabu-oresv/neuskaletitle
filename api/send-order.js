// server.mjs
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
const PORT = 5000;

// ✅ Middleware setup
app.use(cors());
app.use(bodyParser.json());

// ✅ Mailtrap SMTP configuration
const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: "98b923001@smtp-brevo.com", // your Mailtrap user
        pass: "zdTgcAwrFRYsQPXm", // your Mailtrap password
    },
});

// ✅ Endpoint to handle form submission and send email
app.post("/send-order", async (req, res) => {
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

        const mailOptions = {
            from: `"Title Search Orders" <orders@neuskale.com>`,
            to: "rathan@ventois.com", // 👈 replace with your recipient email
            subject: `New Title Search Order – ${state}, ${county}`,
            text: `
New Title Search Order Received:

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone || "N/A"}
🏢 Company: ${company || "N/A"}

📍 State: ${state}
🏛️ County: ${county}
🧾 Service Type: ${service}
💵 Estimated Rate: $${rate}

🏠 Property Address: ${propertyaddress || "N/A"}
🧾 Parcel Number / Tax ID: ${parcelnumber || "N/A"}
👤 Owner Name: ${ownername || "N/A"}

🗒️ Special Instructions / Comments:
${comments || "None"}
`,
        };

        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully!");
        res.status(200).json({ message: "Order email sent successfully!" });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        res.status(500).json({ message: "Failed to send email", error: error.message });
    }
});
