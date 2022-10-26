import { Repository } from 'typeorm';
import { Student } from './students.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class StudentsService {
    private readonly studentsRepository;
    constructor(studentsRepository: Repository<Student>);
    findAll(): Promise<Student[]>;
    create(student: Student): Promise<Student>;
    update(student: Student): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
