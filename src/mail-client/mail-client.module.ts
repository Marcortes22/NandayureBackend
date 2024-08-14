import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { MailClientService } from './mail-client.service';
import { MailClientController } from './mail-client.controller';

@Module({
  imports: [
    ConfigModule, // Asegúrate de importar ConfigModule para que ConfigService esté disponible
    MailerModule.forRootAsync({
      imports: [ConfigModule], // Importa ConfigModule aquí
      inject: [ConfigService], // Inyecta ConfigService
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>('EMAIL_HOST'),
          auth: {
            user: configService.get<string>('EMAIL_USERNAME'),
            pass: configService.get<string>('EMAIL_PASSWORD'),
          },
        },
      }),
    }),
  ],
  controllers: [MailClientController],
  providers: [MailClientService],
  exports: [MailClientService],
})
export class MailClientModule {}
