"use server";

export type ContactState = {
  status: "idle" | "error" | "success";
  message: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates the enquiry and forwards it as JSON to CONTACT_WEBHOOK_URL.
 * If that variable is not set the form says so honestly instead of pretending the message was sent.
 */
export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();
  const name = get("name");
  const email = get("email");
  const phone = get("phone");
  const topic = get("topic");
  const message = get("message");

  // Honeypot: real users never fill this hidden field.
  if (get("company")) return { status: "success", message: "Thank you. Your message has been sent." };

  const errors: NonNullable<ContactState["errors"]> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!emailRe.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please write at least a few words.";
  if (Object.keys(errors).length) return { status: "error", message: "Please check the highlighted fields.", errors };

  const hook = process.env.CONTACT_WEBHOOK_URL;
  if (!hook) {
    return { status: "error", message: "The contact form is not connected yet. Please try again later." };
  }
  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, topic, message, sentAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(String(res.status));
  } catch {
    return { status: "error", message: "Sorry, we could not send your message. Please try again." };
  }
  return { status: "success", message: "Thank you. Your message has been sent." };
}
