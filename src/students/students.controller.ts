import { Controller, Get } from '@nestjs/common';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Student } from './students.entity';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  @Get()
  findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Post()
  async create(@Body() studentData: Student): Promise<any> {
    return this.studentsService.create(studentData);
  }

  @Put()
  async update(@Param('id') id, @Body() studentData: Student): Promise<any> {
    studentData.id = Number(id);
    console.log('Update #' + studentData.id);
    return this.studentsService.update(studentData);
  }

  @Delete()
  async delete(@Param('id') id): Promise<any> {
    return this.studentsService.delete(id);
  }

  constructor(private readonly studentsService: StudentsService) {}
}
