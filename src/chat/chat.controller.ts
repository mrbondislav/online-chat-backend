import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat-dto';


@Controller()
export class ChatController {
    constructor(private chatService: ChatService) { }

    @Post()
    create(@Body() chatDto: CreateChatDto) {
        return this.chatService.createMessage(chatDto);
    }



    @Get('/chat')
    async Chat(@Res() res) {
        const messages = await this.chatService.getMessages();
        res.json(messages);
    }
}