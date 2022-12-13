import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'typeorm';
import { Chat } from './chat.model';

@Injectable()
export class ChatService {
    constructor(
        @InjectModel(Chat) private chatRepository: Repository<Chat>) { }
    async createMessage(chat: Chat): Promise<Chat> {
        return await this.chatRepository.save(chat);
    }

    async getMessages(): Promise<Chat[]> {
        return await this.chatRepository.find();
    }
}