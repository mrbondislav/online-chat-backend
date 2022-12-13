import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Chat } from './chat.model';

@Module({
    controllers: [ChatController],
    providers: [ChatService],
    imports: [
        SequelizeModule.forFeature([Chat])
    ],
    exports: [ChatService]
})
export class ChatModule { }
