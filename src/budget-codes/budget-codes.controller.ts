import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BudgetCodesService } from './budget-codes.service';
import { CreateBudgetCodeDto } from './dto/create-budget-code.dto';
import { UpdateBudgetCodeDto } from './dto/update-budget-code.dto';

@Controller('budget-codes')
export class BudgetCodesController {
  constructor(private readonly budgetCodesService: BudgetCodesService) {}

  @Post()
  create(@Body() createBudgetCodeDto: CreateBudgetCodeDto) {
    return this.budgetCodesService.create(createBudgetCodeDto);
  }

  @Get()
  findAll() {
    return this.budgetCodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetCodesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetCodeDto: UpdateBudgetCodeDto) {
    return this.budgetCodesService.update(+id, updateBudgetCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetCodesService.remove(+id);
  }
}
