import nodemailer from 'nodemailer';
import path from 'path';
import pug from 'pug';
import dotenv from 'dotenv';
dotenv.config();

type workInquiryMailType = {
    message: string;
    name: string;
    phone: string;
    email: string;
    company: string;
    budget: string;
};

const mailer = async (from: any, to: string | null, subject: string, emailHTML: any) => {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT) || 0,
        secure: false,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD
        }
    });

    const mailOptions: any = {
        from: from,
        to: to,
        subject: subject,
        html: emailHTML,
    };

    try {
        console.log(`Sending mail to - ${to}`);

        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent: ' + info.response);

        return info.response;
    } catch (error) {
        console.log(`Nodemailer error sending email to ${to}`, error);
        return error;
    }
};

export const sendWorkInquiryMail = async (payload: workInquiryMailType) => {
    // mail configs
    const from = {
        name: "Work Inquiry",
        address: "inquiry@nexlura.io"
    };
    const to = "nexlura@gmail.com";
    const subject = "Work Inquiry Mail";

    // get template
    const templatePath = `${process.cwd()}/src/utils/mail/templates/work_inquiry_email.pug`;

    // Compile a Pug template from a file to a function
    const compiledFunction = pug.compileFile(path.resolve(templatePath));

    // Render the function
    const emailHTML = compiledFunction({
        Message: payload.message,
        Name: payload.name,
        Phone: payload.phone,
        Email: payload.email,
        Company: payload.company,
        Budget: payload.budget,
    });

    return await mailer(from, to, subject, emailHTML);
}
