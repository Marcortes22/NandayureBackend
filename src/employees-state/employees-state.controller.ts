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
import { EmployeesStateService } from './employees-state.service';
import { CreateEmployeesStateDto } from './dto/create-employees-state.dto';
import { UpdateEmployeesStateDto } from './dto/update-employees-state.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('employees-state')
@ApiTags('employees-state')
@UseGuards(AuthGuard)
export class EmployeesStateController {
  constructor(private readonly employeesStateService: EmployeesStateService) {}

  @Post()
  create(@Body() createEmployeesStateDto: CreateEmployeesStateDto) {
    return this.employeesStateService.create(createEmployeesStateDto);
  }

  @Get()
  findAll() {
    return this.employeesStateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesStateService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeesStateDto: UpdateEmployeesStateDto,
  ) {
    return this.employeesStateService.update(+id, updateEmployeesStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesStateService.remove(+id);
  }
}
