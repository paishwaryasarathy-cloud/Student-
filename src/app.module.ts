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
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  autoLoadModels: true,
  synchronize: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
}),
  StudentModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
