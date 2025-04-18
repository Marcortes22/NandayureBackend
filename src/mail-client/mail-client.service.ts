import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateMailClientDto } from './dto/create-mail-client.dto';
import { WelcomeMail } from './templates/WelcomeMail';
import { RecoverPasswordMail } from './templates/RecoverPasswordMail';
import { RequestConfirmationMail } from './templates/RequestConfirmationMail';
import { ApproverNotificationMail } from './templates/ApproverNotificationMail';
import { RequestResolutionMail } from './templates/RequestResolutionMail';
import { CancelationRequestMailToApprover } from './templates/CancelationRequestMailToApprover';
import { ConfigService } from '@nestjs/config';
import { NewDepartmentHeadMail } from './templates/NewDepartmentHeadMail';

@Injectable()
export class MailClientService {
  constructor(
    private readonly mailService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendWelcomeMail(createMailClientDto: CreateMailClientDto) {
    try {
      await this.mailService.sendMail({
        from: 'RH-Nandayure',
        to: createMailClientDto.to,
        subject: createMailClientDto.subject,
        text: createMailClientDto.message,
        html: await WelcomeMail(
          createMailClientDto.EmployeeId,
          createMailClientDto.Password,
          this.configService.get('FrontEndLoginURL'),
        ),
        attachments: [
          {
            filename: 'MuniLogo',
            path: './src/mail-client/assets/MuniLogo.jpeg',
            cid: 'logoImage',
          },
        ],
      });
    } catch (error) {
      console.error('Error al enviar el correo de bienvenida:', error);
    }
  }

  async sendNewDepartmentHeadMail({
    newHeadEmail,
    newHeadName,
    departmentName,
    pendingRequestsCount,
  }: {
    newHeadEmail: string;
    newHeadName: string;
    departmentName: string;
    pendingRequestsCount: number;
  }) {
    try {
      await this.mailService.sendMail({
        from: 'RH-Nandayure',
        to: newHeadEmail,
        subject: 'Asignación como Jefe de Departamento',
        html: await NewDepartmentHeadMail(
          newHeadName,
          departmentName,
          pendingRequestsCount,
          this.configService.get('FrontEndLoginURL'), // o localhost si estás en dev
        ),
        attachments: [
          {
            filename: 'MuniLogo.jpeg',
            path: './src/mail-client/assets/MuniLogo.jpeg',
            cid: 'logoImage',
          },
        ],
      });
    } catch (error) {
      console.error(
        'Error al enviar el correo de nuevo jefe de departamento:',
        error,
      );
    }
  }

  async sendCancelationRequestToApproverMail(
    approverMail: string,
    requesterId: string,
    requesterName: string,
    requestType: string,
    requesterEmail: string,
    cancelationReason: string,
  ) {
    try {
      await this.mailService.sendMail({
        from: 'RH-Nandayure',
        to: approverMail,
        subject: `Solicitud Cancelada: ${requestType}`,
        html: await CancelationRequestMailToApprover(
          requesterId,
          requesterName,
          requestType,
          requesterEmail,
          cancelationReason,
          this.configService.get('FrontEndLoginURL'),
        ),
        attachments: [
          {
            filename: 'MuniLogo.jpeg',
            path: './src/mail-client/assets/MuniLogo.jpeg',
            cid: 'logoImage',
          },
        ],
      });
    } catch (error) {
      console.error('error al enviar el correo de cancelación:', error);
    }
  }

  async sendRecoverPasswordMail(createMailClientDto: CreateMailClientDto) {
    try {
      await this.mailService.sendMail({
        from: 'RH-Nandayure',
        to: createMailClientDto.to,
        subject: createMailClientDto.subject,
        text: createMailClientDto?.message,
        html: await RecoverPasswordMail(createMailClientDto.RecoverPasswordURL),
        attachments: [
          {
            filename: 'MuniLogo',
            path: './src/mail-client/assets/MuniLogo.jpeg',
            cid: 'logoImage',
          },
        ],
      });
    } catch (error) {
      console.error('Error al enviar el correo electrónico');
    }
  }

  async sendRequestConfirmationMail(mail: string, requestType: string) {
    try {
      await this.mailService.sendMail({
        from: 'RH-Nandayure',
        to: mail,
        subject: `Solicitud de ${requestType} enviada`,
        text: 'Su solicitud ha sido enviada con éxito, pronto recibirá una respuesta',
        html: await RequestConfirmationMail(
          requestType,
          this.configService.get('FrontEndLoginURL'),
        ),
        attachments: [
          {
            filename: 'MuniLogo',
            path: './src/mail-client/assets/MuniLogo.jpeg',
            cid: 'logoImage',
          },
        ],
      });
    } catch (error) {
      console.error(' Error al enviar RequestResolutionMail:', error);
    }
  }

  async sendApproverNotificationMail(
    approverMail: string,
    requesterId: string,
    requesterName: string,
    requestType: string,
  ) {
    try {
      await this.mailService.sendMail({
        from: 'RH-Nandayure',
        to: approverMail,
        subject: `Nueva solicitud de ${requestType}`,
        text: `Se ha creado una nueva solicitud a nombre de ${requesterName}   numero de cédula: ${requesterId} que necesita su aprobación`,
        html: await ApproverNotificationMail(
          requesterId,
          requesterName,
          requestType,
          this.configService.get('FrontEndLoginURL'),
        ),
        attachments: [
          {
            filename: 'MuniLogo',
            path: './src/mail-client/assets/MuniLogo.jpeg',
            cid: 'logoImage',
          },
        ],
      });
    } catch (error) {
      console.error(' Error al enviar RequestResolutionMail:', error);
    }
  }

  async sendRequestResolution(
    requesterEmail: string,
    requestType: string,
    approved: boolean,
  ) {
    try {
      await this.mailService.sendMail({
        from: 'RH-Nandayure',
        to: requesterEmail,
        subject: `Respuesta de solicitud de ${requestType}`,
        html: await RequestResolutionMail(
          approved,
          requestType,
          this.configService.get('FrontEndLoginURL'),
        ),
        attachments: [
          {
            filename: 'MuniLogo',
            path: './src/mail-client/assets/MuniLogo.jpeg',
            cid: 'logoImage',
          },
        ],
      });
    } catch (error) {
      console.error('Error al enviar RequestResolutionMail:', error);
    }
  }
}
