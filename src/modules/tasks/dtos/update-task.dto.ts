import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, isString } from "class-validator";

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

export class UpdateTaskDto{

    @ApiPropertyOptional()
    @IsString( {message: 'El title es un texto'})
    @IsOptional()
    title?:string;

    @ApiPropertyOptional()
    @IsString( {message: 'El description es un texto'})
    @IsOptional()
    description?: string;

    @ApiPropertyOptional()
    @IsString( {message: 'El status es un texto'})
    @IsOptional()
    @IsEnum(StatusEnum, {message: 'El status solo puede ser: pending | in_progress | done'})
    status?: string; // todo enum enum: pending | in_progress | done

    @ApiPropertyOptional()
    @IsString( {message: 'El priority es un texto'})
    @IsOptional()
    @IsEnum(PriorityEnum, {message: 'El status solo puede ser: low | medium | high'})
    priority?: string // todo enum enum: low | medium | high

    @ApiPropertyOptional()
    @IsString( {message: 'El assignedTo es un texto'})
    @IsOptional()
    assignedTo?: string;

}