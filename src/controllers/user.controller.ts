import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(): object {
        return { string: 'This action returns all users', task: 'this is task' };
    }
}
