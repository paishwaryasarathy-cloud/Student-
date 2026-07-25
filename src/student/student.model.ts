import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement
} from 'sequelize-typescript';

interface StudentAttributes {
  id: number;
  name: string;
  age: number;
  course: string;
}

@Table
export class Student extends Model<StudentAttributes> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column(DataType.STRING)
  declare name: string;

  @Column(DataType.INTEGER)
  declare age: number;

  @Column(DataType.STRING)
  declare course: string;
}