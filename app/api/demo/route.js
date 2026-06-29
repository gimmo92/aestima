const DEMO_EMAIL = "gbasso@aestima.it";

function validate(data) {
  const errors = {};
  if (!data.nome?.trim()) errors.nome = "Campo obbligatorio";
  if (!data.azienda?.trim()) errors.azienda = "Campo obbligatorio";
  if (!data.ruolo?.trim()) errors.ruolo = "Campo obbligatorio";
  if (!data.email?.trim()) errors.email = "Campo obbligatorio";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Email non valida";
  if (!data.volume) errors.volume = "Campo obbligatorio";
  if (!data.formato) errors.formato = "Campo obbligatorio";
  return errors;
}

function buildEmailHtml(data) {
  return `
    <h2>Nuova richiesta demo aestima</h2>
    <table cellpadding="6" cellspacing="0">
      <tr><td><strong>Nome</strong></td><td>${data.nome}</td></tr>
      <tr><td><strong>Azienda</strong></td><td>${data.azienda}</td></tr>
      <tr><td><strong>Ruolo</strong></td><td>${data.ruolo}</td></tr>
      <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
      <tr><td><strong>Volume settimanale</strong></td><td>${data.volume}</td></tr>
      <tr><td><strong>Formato disegni</strong></td><td>${data.formato}</td></tr>
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
      to: [process.env.DEMO_NOTIFY_EMAIL || DEMO_EMAIL],
      reply_to: data.email,
      subject: `Richiesta demo aestima — ${data.azienda}`,
      html: buildEmailHtml(data),
    }),
  });

  if (!response.ok) {
    throw new Error("Resend request failed");
  }

  return true;
}

async function sendViaFormSubmit(data) {
  const response = await fetch(`https://formsubmit.co/ajax/${DEMO_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: `Richiesta demo aestima — ${data.azienda}`,
      _captcha: "false",
      _template: "table",
      nome: data.nome,
      azienda: data.azienda,
      ruolo: data.ruolo,
      email: data.email,
      volume: data.volume,
      formato: data.formato,
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
      { error: "Impossibile inviare la richiesta. Riprova o prenota su Calendly." },
      { status: 502 }
    );
  }
}
