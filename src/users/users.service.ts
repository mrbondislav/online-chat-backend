import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user-dto';

import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) { }

    async create(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        return user;
    }

    async findAll() {
        const users = await this.userRepository.findAll();
        return users;
    }

    async findOne(id: string) {
        const user = await this.userRepository.findOne({
            where: {
                id,
            },
        })
        return user;
    }

    async findUserByEmail(email: string) {
        const user = await this.userRepository.findOne({
            where: {
                email,
            },
        })
        return user;
    }

    async delete(id: string) {
        const user = await this.findOne(id);
        await user.destroy();
    }

}
