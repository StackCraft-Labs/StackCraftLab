"use server";

import { Resend } from "resend";

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const honeypot = formData.get("website") as string;

  // 1. Spam Prevention: Honeypot check
  if (honeypot) {
    // Silently succeed for bots
    return { success: true };
  }

  // 2. Validation
  if (!name || name.length < 2) {
    return { error: "Name must be at least 2 characters long." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }
  if (!message || message.length < 10) {
    return { error: "Message must be at least 10 characters long." };
  }

  // Note: For rate limiting, you would typically use Upstash Redis here.
  // Example Upstash implementation is provided in the instructions.

  // 3. Send Email using Resend
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not defined.");
    return { error: "Server configuration error. Please contact us directly." };
  }

  const resend = new Resend(resendApiKey);

  try {
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "stackcraftlabs@gmail.com";
    
    // We recommend adding a verified domain in Resend for 'from'
    const { error } = await resend.emails.send({
      from: "StackCraft Labs Contact <onboarding@resend.dev>", 
      to: [recipient],
      subject: `New Contact from StackCraft Labs – ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    });

    if (error) {
      console.error("Resend API error:", error);
      return { error: "Something went wrong. Please try again or email us directly at hellostackcraftlabs@gmail.com" };
    }

    return { success: true };
  } catch (err) {
    console.error("Resend execution error:", err);
    return { error: "Something went wrong. Please try again or email us directly at hellostackcraftlabs@gmail.com" };
  }
}
