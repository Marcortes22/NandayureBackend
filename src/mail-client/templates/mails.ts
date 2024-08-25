export async function WelcomeMail(
  EmployeeId: number,
  Password: string,
  loginURL: string,
) {
  return `<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registro Exitoso</title>
  </head>
  <body>
    <!-- Tabla contenedora principal -->
    <table
      width="100%"
      cellspacing="0"
      cellpadding="0"
      border="0"
      style="padding: 20px"
    >
      <tr>
        <td align="center">
          <table
            width="100%"
            max-width="500"
            cellspacing="0"
            cellpadding="0"
            border="0"
            style="
              background-color: #ffffff;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            "
          >
            <tr>
              <td
                align="center"
                style="
                  padding: 20px;
                  border-top-left-radius: 10px;
                  border-top-right-radius: 10px;
                  color: #0e0e0e;
                "
              >
                <h1 style="margin-bottom: 10px; font-size: 24px">
                  Municipalidad de Nandayure
                </h1>
                <img
                  src="cid:logoImage"
                  alt="Logo"
                  style="
                    width: 80px;
                    height: 80px;
                    margin-bottom: 10px;
                    border-radius: 50%;
                  "
                />
                <h2 style="font-size: 20px; margin-bottom: 0">
                  Registro Exitoso
                </h2>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 20px">
                <p style="margin-bottom: 15px; color: #333; line-height: 1.5">
                  Su cuenta ha sido registrada correctamente.
                </p>
                <p style="margin-bottom: 15px; color: #333; line-height: 1.5">
                  Usuario: ${EmployeeId}.
                  <br />
                  Contraseña: ${Password}
                </p>
                <p style="margin-bottom: 15px; color: #333; line-height: 1.5">
                  Puedes verificarlo presionando en el siguiente botón.
                </p>
                <a
                  href="${loginURL}"
                  style="
                    display: inline-block;
                    background-color: #1fae32;
                    color: #ffffff;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 16px;
                  "
                  >Ir a Iniciar Sesión</a
                >
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style="
                  padding: 10px;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                  color: #959393;
                "
              >
                <p style="font-size: 14px">
                  © 2024 Municipalidad de Nandayure. Todos los derechos
                  reservados.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}

export async function RecoverPasswordMail(ResetPasswordURL: string) {
  return `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Forgot Password</title>
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
      a {
        display: block;
        width: 220px;
        margin: 20px auto;
        padding: 15px;
        text-align: center;
        background-color: #3498db;
        color: #ffffff;
        text-decoration: none;
        font-size: 18px;
        border-radius: 5px;
        transition: background-color 0.3s;
      }
      a:hover {
        background-color: #2980b9;
      }
      .footer {
        margin-top: 30px;
        font-size: 12px;
        color: #aaaaaa;
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
            <h2>Recuperación de Contraseña</h2>
          </div>
          <div class="main">
            <p>Estimado usuario,</p>
            <p>
              Hemos recibido una solicitud para cambiar la contraseña de su
              cuenta en la Municipalidad. Si no realizó esta solicitud, puede
              ignorar este mensaje. De lo contrario, haga clic en el enlace a
              continuación para recuperar su contraseña:
            </p>
            <a href="${ResetPasswordURL}">Recuperar Contraseña</a>
            <p>
              Este enlace es válido por 1 hora y un solo uso. Si necesita asistencia
              adicional, no dude en contactarnos.
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
</html>


`;
}
