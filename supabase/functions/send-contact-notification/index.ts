// Supabase Edge Function — send-contact-notification
//
// Déclenchée par un Database Webhook quand une nouvelle ligne est insérée
// dans la table `contact_submissions`. Envoie un email via Resend à
// l'adresse définie dans le secret `NOTIFICATION_EMAIL`.
//
// Secrets requis (Supabase → Project Settings → Edge Functions → Secrets) :
//   - RESEND_API_KEY     : clé API Resend (re_...)
//   - NOTIFICATION_EMAIL : destinataire des notifications

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const NOTIFICATION_EMAIL = Deno.env.get("NOTIFICATION_EMAIL");
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "onboarding@resend.dev";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  created_at: string;
}

interface WebhookPayload {
  type: "INSERT" | "UPDATE" | "DELETE";
  table: string;
  schema: string;
  record: ContactSubmission;
  old_record: ContactSubmission | null;
}

const SUBJECT_LABELS: Record<string, string> = {
  commande: "Commande",
  aid: "Demande Aïd al-Adha",
  information: "Information",
  autre: "Autre",
};

function escapeHtml(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderEmailHtml(sub: ContactSubmission): string {
  const subjectLabel = SUBJECT_LABELS[sub.subject] ?? sub.subject;
  const phoneRow = sub.phone
    ? `<tr><td style="padding:6px 0;color:#666;">Téléphone :</td><td style="padding:6px 0;"><a href="tel:${escapeHtml(sub.phone)}" style="color:#1a4d3a;">${escapeHtml(sub.phone)}</a></td></tr>`
    : "";
  const receivedAt = new Date(sub.created_at).toLocaleString("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
  });

  return `<!doctype html>
<html lang="fr">
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#faf8f3;padding:24px;color:#2a2a2a;line-height:1.5;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e8e2d4;">
    <div style="background:#1a4d3a;color:#ffffff;padding:20px 24px;">
      <h1 style="margin:0;font-size:18px;font-weight:600;">Nouveau message — Boucherie Al-Baraka</h1>
    </div>
    <div style="padding:24px;">
      <p style="margin:0 0 16px;">Vous avez reçu un nouveau message via le formulaire de contact du site :</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#666;width:110px;">Nom :</td><td style="padding:6px 0;"><b>${escapeHtml(sub.name)}</b></td></tr>
        <tr><td style="padding:6px 0;color:#666;">Email :</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(sub.email)}" style="color:#1a4d3a;">${escapeHtml(sub.email)}</a></td></tr>
        ${phoneRow}
        <tr><td style="padding:6px 0;color:#666;">Sujet :</td><td style="padding:6px 0;">${escapeHtml(subjectLabel)}</td></tr>
      </table>
      <div style="margin-top:16px;padding:16px;background:#faf8f3;border-left:3px solid #c9a14a;border-radius:0 4px 4px 0;">
        <div style="color:#666;font-size:12px;margin-bottom:6px;text-transform:uppercase;letter-spacing:.05em;">Message</div>
        <div style="white-space:pre-wrap;">${escapeHtml(sub.message)}</div>
      </div>
      <p style="margin:20px 0 0;font-size:12px;color:#999;">Reçu le ${receivedAt}.</p>
    </div>
  </div>
</body>
</html>`;
}

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  if (!RESEND_API_KEY || !NOTIFICATION_EMAIL) {
    return new Response(
      JSON.stringify({ error: "Missing RESEND_API_KEY or NOTIFICATION_EMAIL secret" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  let payload: WebhookPayload;
  try {
    payload = await req.json();
  } catch {
    return new Response("Invalid JSON body", { status: 400 });
  }

  if (payload.type !== "INSERT" || payload.table !== "contact_submissions") {
    return new Response(
      JSON.stringify({ skipped: true, reason: "not an INSERT on contact_submissions" }),
      { headers: { "Content-Type": "application/json" } },
    );
  }

  const sub = payload.record;
  const subjectLabel = SUBJECT_LABELS[sub.subject] ?? sub.subject;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Boucherie Al-Baraka <${FROM_EMAIL}>`,
      to: [NOTIFICATION_EMAIL],
      reply_to: sub.email,
      subject: `Nouveau message : ${subjectLabel} — ${sub.name}`,
      html: renderEmailHtml(sub),
    }),
  });

  if (!resendResponse.ok) {
    const errorBody = await resendResponse.text();
    console.error("Resend error", resendResponse.status, errorBody);
    return new Response(
      JSON.stringify({
        error: "Resend API call failed",
        status: resendResponse.status,
        details: errorBody,
      }),
      { status: 502, headers: { "Content-Type": "application/json" } },
    );
  }

  const data = await resendResponse.json();
  return new Response(
    JSON.stringify({ ok: true, id: data.id }),
    { headers: { "Content-Type": "application/json" } },
  );
});
