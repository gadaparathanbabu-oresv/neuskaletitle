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
            auth: {
                user: "98b923001@smtp-brevo.com", // your Mailtrap user
                pass: "zdTgcAwrFRYsQPXm", // your Mailtrap password
            },
        });

        await transporter.sendMail({
            from: {
                name: "Neuskale Title",
                address: "laxmir22@10008867.brevosend.com", // verified
            },
            to: "rathan@ventois.com",
            subject: `New Title Order - ${state}, ${county}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Property Address: ${propertyaddress}
Parcel Number: ${parcelnumber}
Owner Name: ${ownername}
Comments: ${comments}
State: ${state}
County: ${county}
Service: ${service}
Rate: $${rate}
      `,
        });

        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending email", error: error.message });
    }
}
