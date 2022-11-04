import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemCrontoller } from "./controller/postagem.controller";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./service/postagem.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [PostagemService],
    controllers: [PostagemCrontoller],
    exports: [TypeOrmModule]
})
    export class PostagemModule { }