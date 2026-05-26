import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, Patch, Post, Query } from "@nestjs/common";
import { CreateTaskDto } from "../dtos/create-task.dto";
import { ClientProxy } from "@nestjs/microservices";
import { UpdateTaskDto } from "../dtos/update-task.dto";
import { TasksPaginatedDto } from "../dtos/get-all-task-filter.dto";
import { ApiOperation } from "@nestjs/swagger";


@Controller('tasks')
export class TaskController {

    constructor(
        @Inject('TASKS_SERVICE') private client: ClientProxy,
    ){}

    @Post('')
    @ApiOperation({ summary: 'Crear tarea' })
    async create(@Body() body: CreateTaskDto){
        return this.client.send('tasks.create', body);
    }

    @Get()
    @ApiOperation({ summary: 'Listar tareas con filtros y paginación' })
    async getAllTasksFilter(@Query() query: TasksPaginatedDto){
        return this.client.send('tasks.findAll', query);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener una tarea especifica' })
    async getTaskById(@Param('id') id: string){
        console.log('id: ', id)
        return this.client.send('tasks.findOne', id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar una tarea especifica' })
    async updateTask(@Param('id') id: string, @Body() body: UpdateTaskDto){
        return this.client.send('tasks.update', {
            id: id,
            body    
        });

    }

    // eliminar tarea
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar una tarea especifica' })
    async deleteTask(@Param('id') id: string){
        return this.client.send('tasks.delete', id);
    }

}