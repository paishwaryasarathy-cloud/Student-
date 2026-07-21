import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './student.model';

@Module({
  imports:[SequelizeModule.forFeature([Student])],
  providers: [StudentService],
  controllers: [StudentController],
  exports:[StudentService],
})
export class StudentModule {}
