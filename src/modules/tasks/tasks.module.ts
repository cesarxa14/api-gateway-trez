import { Module } from '@nestjs/common';
import { TaskController } from './controllers/task.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
        {
            name: 'TASKS_SERVICE',
            transport: Transport.TCP,
            options: {
            host: 'localhost',
            port: 3001
            }
        }
        ])
    ],
    controllers: [TaskController],
    providers: []
})
export class TasksModule {}
