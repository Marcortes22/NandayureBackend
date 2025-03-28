export async function ApproverNotificationMail(
  requesterId: string,
  requesterName: string,
  requestType: string,
) {
  return `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Correo de Notificación</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
        width: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      table {
        border-spacing: 0;
        border-collapse: collapse;
        width: 100%;
        margin: 0 auto;
      }
      img {
        border: 0;
        line-height: 100%;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
      .wrapper {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .header,
      .main,
      .footer {
        padding: 20px;
        text-align: center;
      }
      h1,
      h2,
      p {
        font-family: "Times New Roman", Times, serif;
        margin: 0 0 10px;
        color: #000000;
        line-height: 1.5;
      }
      h1 {
        font-size: 24px;
      }
      h2 {
        font-size: 20px;
        color: #2c3e50;
      }
      p {
        font-size: 16px;
        color: #555555;
      }
      .footer {
        margin-top: 30px;
        font-size: 12px;
        color: #aaaaaa;
      }
      .bandera {
        margin-top: 5%;
        width: 100%;
        height: 30px;
        margin-bottom: 0;
      }
      .verde {
        background-color: #008000;
        height: 10%;
        width: 33.33%;
        float: left;
      }
      .amarillo {
        background-color: #ffff00;
        height: 10%;
        width: 33.33%;
        float: left;
      }
      .celeste {
        background-color: #00bfff;
        height: 10%;
        width: 33.33%;
        float: left;
      }
    </style>
  </head>
  <body>
    <table role="presentation" class="wrapper">
      <tr>
        <td>
          <div class="header">
            <h1>Municipalidad de Nandayure</h1>
            <img
              src="cid:logoImage"
              alt="Logo"
              style="max-width: 100px; height: auto"
            />
            <h2>Tienes una Nueva Solicitud de ${requestType} que Aprobar</h2>
          </div>
          <div class="main">
            <p>Estimado usuario,</p>
            <p>
              Has recibido una nueva solicitud de ${requestType} a nombre de <b>${requesterName}</b> con numero de cédula <b>${requesterId}</b>. Queda a la espera de la revisión
              para dar una pronta respuesta al colaborador. Esperamos que pronto
              puedas revisarla.
            </p>
            <div class="bandera">
              <div class="verde"></div>
              <div class="amarillo"></div>
              <div class="celeste"></div>
            </div>
            <p>
              Este es un correo automático. Por favor, no respondas a este
              mensaje.
            </p>
          </div>
          <div class="footer">
            <p>
              © 2024 Municipalidad de Nandayure. Todos los derechos reservados.
            </p>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
