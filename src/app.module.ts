import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './student/student.model';
@Module({
  imports: [ SequelizeModule.forRoot({
    dialect: 'mysql', 
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'demo',
    models: [Student],
    autoLoadModels: true, 
    synchronize: true, 
  }),
  StudentModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
