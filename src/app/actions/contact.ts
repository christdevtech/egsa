"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SENDER = `EGSAOSA <${process.env.SENDER_EMAIL || "noreply@egsaosa.org"}>`;
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "michael@egsaosa.org,goke@egsaosa.org")
  .split(",")
  .map((e) => e.trim());

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return { success: false, message: "Please fill out all required fields." };
    }

    // 1. Send admin notification
    const { error: adminError } = await resend.emails.send({
      from: SENDER,
      to: ADMIN_EMAILS,
      subject: `[EGSA Contact] ${subject || "New Message"} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B2A4A; color: #fff; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
            <p style="margin: 8px 0 0; opacity: 0.7;">EGSAOSA 70th Anniversary Website</p>
          </div>
          <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 100px; vertical-align: top;">Name:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Subject:</td>
                <td style="padding: 8px 0;">${subject || "No Subject"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
      replyTo: email,
    });

    if (adminError) {
      console.error("Admin email error:", adminError);
      return { success: false, message: adminError.message };
    }

    // 2. Send confirmation to the person who filled the form
    const { error: confirmError } = await resend.emails.send({
      from: SENDER,
      to: email,
      subject: "We received your message — EGSAOSA",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B2A4A; color: #fff; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">Thank you, ${name}!</h2>
          </div>
          <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p>We have received your message and a member of the EGSAOSA team will get back to you shortly.</p>
            <p style="margin-top: 16px; padding: 16px; background: #f9fafb; border-radius: 6px; border-left: 4px solid #F26418;">
              <strong>Your message:</strong><br/>
              <span style="white-space: pre-wrap;">${message}</span>
            </p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
            <p style="font-size: 14px; color: #6b7280;">
              <strong>EGSAOSA — Ebenezer Grammar School Old Students Association</strong><br/>
              <em>"Strive for the Highest"</em><br/>
              70th Platinum Jubilee (1956 – 2026)
            </p>
          </div>
        </div>
      `,
    });

    if (confirmError) {
      // Log but don't fail — admin already got the message
      console.error("Confirmation email error:", confirmError);
    }

    return { success: true, message: "Your message has been sent successfully! Check your email for a confirmation." };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, message: "Failed to send message. Please try again later." };
  }
}
