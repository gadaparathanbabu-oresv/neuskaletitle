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
        <h2>New Title Order Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Property Address:</strong> ${propertyaddress}</p>
        <p><strong>Parcel Number:</strong> ${parcelnumber}</p>
        <p><strong>Owner Name:</strong> ${ownername}</p>
        <p><strong>Comments:</strong> ${comments}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>County:</strong> ${county}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Rate:</strong> $${rate}</p>
      `,
        });

        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending email", error: error.message });
    }
}
