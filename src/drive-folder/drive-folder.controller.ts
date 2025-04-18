import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DriveFolderService } from './drive-folder.service';
import { CreateDriveFolderDto } from './dto/create-drive-folder.dto';
import { UpdateDriveFolderDto } from './dto/update-drive-folder.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('drive-folder')
@Controller('drive-folder')
@UseGuards(AuthGuard)
export class DriveFolderController {
  constructor(private readonly driveFolderService: DriveFolderService) {}

  @Post()
  create(@Body() createDriveFolderDto: CreateDriveFolderDto) {
    return this.driveFolderService.create(createDriveFolderDto);
  }

  @Get()
  findAll() {
    return this.driveFolderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driveFolderService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDriveFolderDto: UpdateDriveFolderDto,
  ) {
    return this.driveFolderService.update(+id, updateDriveFolderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driveFolderService.remove(+id);
  }
}
