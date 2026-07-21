import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Student } from './student.model';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student)
    private readonly studentModel: typeof Student,
  ) {}

  async create(studentData: any) {
    return this.studentModel.create(studentData);
  }

  async findAll() {
    return this.studentModel.findAll();
  }

  async findOne(id: number) {
    return this.studentModel.findByPk(id);
  }

  async update(id: number, data: any) {
    const student = await this.studentModel.findByPk(id);

    if (!student) {
      return {
        message: 'Student Not Found!',
      };
    }

    return student.update(data);
  }

  async remove(id: number) {
    const student = await this.studentModel.findByPk(id);

    if (!student) {
      return {
        message: 'Student Not Found!',
      };
    }

    await student.destroy();

    return {
      message: 'Student Deleted Successfully',
    };
  }
}