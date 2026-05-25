import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNotEmpty, IsString, isString } from "class-validator";

enum StatusEnum {
    PENDING = 'pending',
    IN_PROGRESS = 'in_progress',
    DONE = 'done'
}

enum PriorityEnum {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high'
}

export class CreateTaskDto{

    @IsString( {message: 'El title es un texto'})
    @IsNotEmpty( {message: 'El title es obligatorio'})
    title!:string;

    @IsString( {message: 'El description es un texto'})
    @IsNotEmpty( {message: 'El description es obligatorio'})
    description!: string;

    @IsString( {message: 'El status es un texto'})
    @IsNotEmpty( {message: 'El status es obligatorio'})
    @IsEnum(StatusEnum, {message: 'El status solo puede ser: pending | in_progress | done'})
    status!: string; // todo enum enum: pending | in_progress | done

    @IsString( {message: 'El priority es un texto'})
    @IsNotEmpty( {message: 'El priority es obligatorio'})
    @IsEnum(PriorityEnum, {message: 'El status solo puede ser: low | medium | high'})
    priority!: string // todo enum enum: low | medium | high

    @IsString( {message: 'El assignedTo es un texto'})
    @IsNotEmpty( {message: 'El assignedTo es obligatorio'})
    assignedTo!: string;

    @Type(() => Date)
    @IsDate()
    createAt!: Date;
}