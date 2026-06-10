import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate ({ name, email, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5", color: "#333" }}>
      <h2 style={{ color: "#007BFF" }}>Nuevo mensaje de contacto</h2>
      <p>
        <strong>Nombre:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Mensaje:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
};
