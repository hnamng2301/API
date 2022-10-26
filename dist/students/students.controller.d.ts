import { Student } from './students.entity';
import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly studentsService;
    findAll(): Promise<Student[]>;
    create(studentData: Student): Promise<any>;
    update(id: any, studentData: Student): Promise<any>;
    delete(id: any): Promise<any>;
    constructor(studentsService: StudentsService);
}
