import { Resend } from "resend";
import { EmailTemplate } from "@/components/secciones/contacto/resend/email-template";
import { render } from "@react-email/render"; 

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
      
    
    if (!name || !email || !message) {
      return Response.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    // Convertimos el componente de React a un String de HTML puro usando render()
    const emailHtml = await render(
      EmailTemplate({ name, email, message })
    );
      


    const { data, error } = await resend.emails.send({
      from: 'Contacto Web <onboarding@resend.dev>',
      to: ['pablovukovich@gmail.com'],
      subject: `Nuevo mensaje de ${name}`,
      html: emailHtml, // <-- En vez de "react:", usamos "html:" con el string procesado
    }); 
    
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("Error en la ruta API/SEND:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Error interno" }, 
      { status: 500 }
    );
  }
}