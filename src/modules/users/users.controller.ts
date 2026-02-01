import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    @Post()
    create(@Body() createUserDto: CreateUserDto): string {
        return 'Prototype create'
    }

    @Get()
    findAll(): string {
        return 'Prototype findAll';
    }

    @Get(':id')
    findById(@Param('id') id: string): string {
        return 'Protoype findById #${id}'
    }

    @Get()
    findByFilter(@Query('name') name: string): string {
        return 'Prototype findByFilter ${name}'
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): string {
        return 'Prototype update'
    }

}
