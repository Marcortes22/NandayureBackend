import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
  UseGuards,
  Req,
  UseInterceptors,
  UploadedFile,
  ConflictException,
  Param,
  Res,
  Delete,
  Query,
} from '@nestjs/common';
import { Response } from 'express';
import { GoogleDriveFilesService } from './google-drive-files.service';
import { CreateGoogleDriveFileDto } from './dto/create-google-drive-file.dto';
import { CreateGoogleDriveFolderDto } from './dto/create-google-folder-file.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/auth-roles/roles.decorator';
import { Role } from 'src/auth/auth-roles/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { GetFilesFilterDto } from './dto/get-files-filter.dto';

@ApiTags('google-drive-files')
@Controller('google-drive-files')
@UseGuards(AuthGuard)
export class GoogleDriveFilesController {
  constructor(
    private readonly googleDriveFilesService: GoogleDriveFilesService,
  ) {}

  @Roles(Role.RRHH)
  @UseGuards(RolesGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async createFile(
    @Body() createGoogleDriveFileDto: CreateGoogleDriveFileDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new ConflictException('No se ha subido ningún archivo');
    }

    const resultado = await this.googleDriveFilesService.createFile(
      createGoogleDriveFileDto,
      file,
    );
    return {
      mensaje: 'Archivo PDF subido con éxito',
      archivo: resultado,
    };
  }

  @Roles(Role.RRHH)
  @UseGuards(RolesGuard)
  @Get('EmployeeFolders/:employeeId')
  async getEmployeeFolders(@Param('employeeId') employeeId: string) {
    return this.googleDriveFilesService.getEmployeeFolders(employeeId);
  }

  //Este es el que se usa para listar las carpetas del usuario logueado (Marco viendo sus propias carpetas)
  @Get('MyFolders')
  async getMyFolders(@Req() req) {
    return this.googleDriveFilesService.getMyFolders(req.user.id);
  }

  //Este es el que se usa luego de entrar en una carpeta para listar los archivos dentro de ella(Funciona solo para la vista del usuario logueado que ve sus propios archivos)
  @Get('MyFilesByFolder/:folderId')
  findAllFilesByFolder(
    @Param('folderId') folderId: string,
    @Req() req,
    @Query() query: GetFilesFilterDto,
  ) {
    return this.googleDriveFilesService.findAllMyFilesByFolder(
      req.user.id,
      folderId,
      query,
    );
  }

  //Este es el que se usa luego de entrar en una carpeta para listar los archivos dentro de ella(Funciona solo para que yeilin pueda ver los archivos de un empleado)
  @Roles(Role.RRHH)
  @UseGuards(RolesGuard)
  @Get('FilesByFolder/:folderId')
  findAllByFolder(
    @Param('folderId') folderId: string,
    @Query() query: GetFilesFilterDto,
  ) {
    return this.googleDriveFilesService.findAllFilesByFolder(folderId, query);
  }

  //Este es el que se usa para descargar un archivo de los que se listaron con el de arriba y sin importar la vista solo necesita el fileId
  @Get('getFile/:fileId')
  async downloadPdfFile(@Param('fileId') fileId: string, @Res() res: Response) {
    return this.googleDriveFilesService.downloadFile(fileId, res);
  }

  //Este es el que se usa para crear una nueva carpeta

  @Roles(Role.RRHH)
  @UseGuards(RolesGuard)
  @Post('createFolder')
  async createNewFolder(
    @Body() createGoogleDriveFolderDto: CreateGoogleDriveFolderDto,
    @Req() req,
  ) {
    return this.googleDriveFilesService.createNewFolder(
      req.user.id,
      createGoogleDriveFolderDto.folderName,
    );
  }

  @Roles(Role.RRHH)
  @UseGuards(RolesGuard)
  @Delete('deleteFile/:fileId')
  async deleteFile(@Param('fileId') fileId: string) {
    return this.googleDriveFilesService.remove(fileId);
  }
}
