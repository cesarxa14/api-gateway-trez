import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from "@nestjs/common";
import { CreateTaskDto } from "../dtos/create-task.dto";
import { TaskService } from "../services/task.service";
import { ClientProxy } from "@nestjs/microservices";
import { UpdateTaskDto } from "../dtos/update-task.dto";


@Controller('tasks')
export class TaskController {

    constructor(
        @Inject('TASKS_SERVICE') private client: ClientProxy,
    ){}

    // crear tarea
    @Post('')
    async create(@Body() body: CreateTaskDto){
        return this.client.send('tasks.create', body);
    }

    // listar filtro por status y priority

    @Get()
    async getAllTasksFilter(){
        return this.client.send('tasks.findAll', {});
    }

    // obtener una sola tarea
    @Get(':id')
    async getTaskById(@Param('id') id){
        return this.client.send('tasks.findOne', Number(id));
    }

    

    // actualizar tarea patch
    @Patch(':id')
    async updateTask(@Param('id') id, @Body() body: UpdateTaskDto){
        return this.client.send('tasks.findOne', {
            id: Number(id),
            body    
        });

    }

    // eliminar tarea

    @Delete('id')
    async deleteTask(@Param('id') id){
        return this.client.send('tasks.delete', Number(id));
    }

}