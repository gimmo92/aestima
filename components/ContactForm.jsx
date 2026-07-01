"use client";

import { useState } from "react";

const INITIAL = {
  nome: "",
  email: "",
  azienda: "",
  oggetto: "",
  messaggio: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = {};

    if (!form.nome.trim()) next.nome = "Campo obbligatorio";
    if (!form.email.trim()) next.email = "Campo obbligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Inserisci un'email valida";
    if (!form.oggetto.trim()) next.oggetto = "Campo obbligatorio";
    if (!form.messaggio.trim()) next.messaggio = "Campo obbligatorio";

    setErrors(next);
    setSubmitError("");
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    try {
      const response = await fetch("/api/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || "Invio non riuscito");
      }

      setSubmitted(true);
      setForm(INITIAL);
    } catch (error) {
      setSubmitError(
        error.message || "Invio non riuscito. Riprova o contattaci per telefono."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-5 py-4 text-[15px] leading-relaxed text-emerald-200"
      >
        Messaggio inviato. Ti ricontatteremo al più presto.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5">
        <span className="text-[13.5px] font-medium text-slate-300">
          Nome e cognome *
        </span>
        <input
          type="text"
          name="nome"
          autoComplete="name"
          value={form.nome}
          onChange={handleChange}
          className="field-dark"
          placeholder="Mario Rossi"
        />
        {errors.nome && (
          <span className="text-[12.5px] text-red-400">{errors.nome}</span>
        )}
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[13.5px] font-medium text-slate-300">Email *</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          className="field-dark"
          placeholder="mario.rossi@azienda.it"
        />
        {errors.email && (
          <span className="text-[12.5px] text-red-400">{errors.email}</span>
        )}
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[13.5px] font-medium text-slate-300">Azienda</span>
        <input
          type="text"
          name="azienda"
          autoComplete="organization"
          value={form.azienda}
          onChange={handleChange}
          className="field-dark"
          placeholder="Officina Meccanica Srl"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[13.5px] font-medium text-slate-300">Oggetto *</span>
        <input
          type="text"
          name="oggetto"
          value={form.oggetto}
          onChange={handleChange}
          className="field-dark"
          placeholder="Informazioni su aestima"
        />
        {errors.oggetto && (
          <span className="text-[12.5px] text-red-400">{errors.oggetto}</span>
        )}
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[13.5px] font-medium text-slate-300">Messaggio *</span>
        <textarea
          name="messaggio"
          rows={5}
          value={form.messaggio}
          onChange={handleChange}
          className="field-dark resize-y"
          placeholder="Scrivi qui la tua richiesta…"
        />
        {errors.messaggio && (
          <span className="text-[12.5px] text-red-400">{errors.messaggio}</span>
        )}
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary mt-1 w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Invio in corso…" : "Invia messaggio"}
      </button>

      {submitError && (
        <p className="text-center text-[12.5px] leading-relaxed text-red-400">
          {submitError}
        </p>
      )}

      <p className="text-center text-xs leading-relaxed text-slate-500">
        Inviando accetti la{" "}
        <a href="/privacy-policy" className="text-blue-300/80 underline hover:text-blue-300">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
