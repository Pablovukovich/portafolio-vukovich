"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Contacto = () => {
   const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   

    try {
      setStatus("sending");
      setFeedback(""); 

      // 1. Recolectamos los datos de los inputs usando FormData
      const formData = new FormData(e.currentTarget);
      const dataToSend = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      };

      // 2. Despachamos la petición POST incluyendo el body con los datos
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      // Si el backend tiró error, tiramos un error acá para que vaya directo al catch
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Error al enviar el mensaje.");
      }

      const result = await response.json();

      setStatus("success");
      setFeedback("¡Mensaje enviado correctamente!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error capturado en el formulario:", error);
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Hubo un error al enviar el mensaje. Intenta nuevamente.",
      );
    }
  };
  const [status, setStatus] = React.useState("");
  const [feedback, setFeedback] = React.useState("");

  return (
    <section className="grid gap-6 rounded-3xl border border-border/50 bg-card/45 p-7 shadow-[0_26px_52px_-22px_rgba(40,10,20,0.18)] sm:p-10 lg:grid-cols-2">
      <div>
        <h2 className="font-display mb-3 text-3xl font-bold sm:text-4xl">
          Hablemos.
        </h2>
        <p className="m-0 max-w-lg text-sm leading-7 text-muted-foreground">
          Escribime por aca y el mensaje llega directo a mi email.
        </p>
      </div>
      <form
        className="grid gap-4"
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-2">
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            className="h-11"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="h-11"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            name="message"
            className="min-h-28"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="h-11 rounded-xl"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Enviar"}
        </Button>
        {feedback ? (
          <p
            className={`m-0 text-sm ${
              status === "success" ? "text-emerald-600" : "text-destructive"
            }`}
          >
            {feedback}
          </p>
        ) : null}
      </form>
    </section>
  );
};
