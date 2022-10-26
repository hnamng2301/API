import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './students.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>,
  ) {}
  
  async findAll(): Promise<Student[]> {
    return await this.studentsRepository.find();
  }

  async create(student: Student): Promise<Student> {
    return await this.studentsRepository.save(student);
  }

  async update(student: Student): Promise<UpdateResult> {
    return await this.studentsRepository.update(student.id, student);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.studentsRepository.delete(id);
  }
}
