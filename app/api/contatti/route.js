const CONTACT_EMAIL = "gbasso@aestima.it";

function validate(data) {
  const errors = {};
  if (!data.nome?.trim()) errors.nome = "Campo obbligatorio";
  if (!data.email?.trim()) errors.email = "Campo obbligatorio";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Email non valida";
  if (!data.oggetto?.trim()) errors.oggetto = "Campo obbligatorio";
  if (!data.messaggio?.trim()) errors.messaggio = "Campo obbligatorio";
  return errors;
}

function buildEmailHtml(data) {
  return `
    <h2>Nuovo messaggio da pagina Contatti</h2>
    <table cellpadding="6" cellspacing="0">
      <tr><td><strong>Nome</strong></td><td>${data.nome}</td></tr>
      <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
      <tr><td><strong>Azienda</strong></td><td>${data.azienda || "—"}</td></tr>
      <tr><td><strong>Oggetto</strong></td><td>${data.oggetto}</td></tr>
      <tr><td><strong>Messaggio</strong></td><td>${data.messaggio.replace(/\n/g, "<br>")}</td></tr>
    </table>
  `;
}

async function sendViaResend(data) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || "aestima <onboarding@resend.dev>",
      to: [process.env.CONTACT_NOTIFY_EMAIL || CONTACT_EMAIL],
      reply_to: data.email,
      subject: `Contatti aestima — ${data.oggetto}`,
      html: buildEmailHtml(data),
    }),
  });

  if (!response.ok) {
    throw new Error("Resend request failed");
  }

  return true;
}

async function sendViaFormSubmit(data) {
  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: `Contatti aestima — ${data.oggetto}`,
      _captcha: "false",
      _template: "table",
      nome: data.nome,
      email: data.email,
      azienda: data.azienda || "—",
      oggetto: data.oggetto,
      messaggio: data.messaggio,
    }),
  });

  if (!response.ok) {
    throw new Error("FormSubmit request failed");
  }

  const result = await response.json();
  if (result.success !== "true" && result.success !== true) {
    throw new Error("FormSubmit rejected request");
  }

  return true;
}

export async function POST(request) {
  try {
    const data = await request.json();
    const errors = validate(data);

    if (Object.keys(errors).length > 0) {
      return Response.json({ errors }, { status: 400 });
    }

    try {
      const sentViaResend = await sendViaResend(data);
      if (!sentViaResend) {
        await sendViaFormSubmit(data);
      }
    } catch {
      await sendViaFormSubmit(data);
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Impossibile inviare il messaggio. Riprova o contattaci per telefono." },
      { status: 502 }
    );
  }
}
