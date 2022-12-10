import { IsString, Length, IsEmail, IsNotEmpty } from "class-validator";


export class CreateUserDto {
    @IsNotEmpty()
    readonly name: string;

    @IsString({ message: "Email must be a string" })
    @IsEmail()
    readonly email: string;

    @IsString({ message: "Password must be a string" })
    @IsNotEmpty()
    @Length(4, 20, { message: "Password must be at least 4 and no more than 20" })
    readonly password: string;
}