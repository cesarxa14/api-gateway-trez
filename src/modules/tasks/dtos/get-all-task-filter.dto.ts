import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNumberString } from 'class-validator';
export class TasksPaginatedDto {

    @ApiPropertyOptional()
    @IsOptional()
    status?: string;

    @ApiPropertyOptional()
    @IsOptional()
    priority?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumberString()
    page?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumberString()
    limit?: string;
}