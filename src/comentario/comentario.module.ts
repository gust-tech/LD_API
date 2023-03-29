import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComentarioController } from "./controller/comentario.controller";
import { Comentario } from "./entities/comentario.entity";
import { ComentarioService } from "./service/comentario.service";


@Module({
    imports: [TypeOrmModule.forFeature([Comentario])],
    providers: [ComentarioService],
    controllers: [ComentarioController],
    exports: [TypeOrmModule],
})
    export class ComentarioModule {}