import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './student/student.model';
@Module({
  imports: [
  ConfigModule.forRoot({
    isGlobal: true,
  }),

  SequelizeModule.forRoot({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  models: [Student],
  autoLoadModels: true,
  synchronize: true,
}),
  StudentModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
