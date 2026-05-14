"use server";

import { Resend } from "resend";

// Initialize Resend with API key
// Ensure you have RESEND_API_KEY set in your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return { success: false, message: "Please fill out all required fields." };
    }

    // Default From address for testing in Resend is onboarding@resend.dev
    // Update the 'to' address to where you want to receive these emails
    const { data, error } = await resend.emails.send({
      from: "EGSA Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "admin@egsa.org", 
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, message: error.message };
    }

    return { success: true, message: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, message: "Failed to send message. Please try again later." };
  }
}
