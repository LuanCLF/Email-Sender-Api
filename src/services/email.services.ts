import sender from '../connection/connection';
import EmailDto from '../dtos/email.dto';

const fetchTo = async (returnTo: string, status: string) => {
  await fetch(returnTo, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });
};

const EmailService = async ({
  toEmail,
  content,
  subject,
  returnTo,
}: EmailDto) => {
  await sender
    .sendMail({
      from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
      to: toEmail,
      subject,
      text: content,
    })
    .then(async (response) => {
      if (response.accepted.includes(toEmail)) {
        if (returnTo) {
          await fetchTo(returnTo, 'Recebido');
        }
        console.log('E-mail enviado e recebido com sucesso!');
      } else {
        if (returnTo) {
          await fetchTo(returnTo, 'Enviado');
        }
        console.log('Email enviado com sucesso!');
      }
    })
    .catch(async () => {
      if (returnTo) await fetchTo(returnTo, 'Não enviado');
      else console.log('Email não foi enviado.');
    });
};

export default EmailService;
