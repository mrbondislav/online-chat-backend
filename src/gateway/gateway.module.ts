import { Module } from "@nestjs/common";
import { MyGeteway } from "./gateway";


@Module({
    providers: [MyGeteway]
})
export class GatewayModule { }
