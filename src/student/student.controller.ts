import {
    Controller, Get, Post, Body, Param,Put, Delete

} from '@nestjs/common';
import { StudentService } from './student.service';


@Controller('student')
export class StudentController {
    constructor(
        private service: StudentService
    ) {}
    @Post()
    create(
        @Body() body: any
    ) {
        return this.service.create(body);
    }

    @Get()

    findAll() {

        return this.service.findAll();

    }
    @Get(':id')

    findOne(
        @Param('id') id: number
    ) {

        return this.service.findOne(id);

    }
    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() body: any
    ) {
        return this.service.update(id, body);
    }
    @Delete(':id')
    remove(
        @Param('id') id: number,
    ) {
        return this.service.remove(id);
    }
}

