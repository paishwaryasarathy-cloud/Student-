import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement
} from 'sequelize-typescript';

@Table
export class Student extends Model {

  @PrimaryKey
  @AutoIncrement
  
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.INTEGER)
  age: number;

  @Column(DataType.STRING)
  course: string;
}