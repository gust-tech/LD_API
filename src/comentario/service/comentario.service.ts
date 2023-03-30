import { Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Comentario } from "../entities/comentario.entity";

@Injectable()
export class ComentarioService {

    constructor(
        @InjectRepository(Comentario)
        private ComentarioRepository: Repository<Comentario>
    ) { }

    async findAll(): Promise<Comentario[]> {
        return await this.ComentarioRepository.find({
            relations: {
                usuario: true,
                postagem: true
            }
        })
    }


    async findById(id: number): Promise<Comentario> {

        let comentario = await this.ComentarioRepository.findOne({
            where: {
                id
            },
            relations: {
                usuario: true,
                postagem: true
            }
        })

        if (!comentario)
            throw new HttpException('Comentario não existe', HttpStatus.NOT_FOUND)

        return comentario
    }

    async findByUsuario(usuario: string): Promise<Comentario[]> {
        return await this.ComentarioRepository.find({
            where: {
                usuario: ILike(`%${usuario}%`)
            },
            relations: {
                usuario: true,
                postagem: true
            }
        })
    }

    async create(comentario: Comentario): Promise<Comentario>{
        return await this.ComentarioRepository.save(comentario)
    }

    async update(comentario: Comentario): Promise<Comentario> {
        let buscarComentario = await this.findById(comentario.id)

        if(!buscarComentario || !comentario.id)
            throw new HttpException('Postagem Não Existe', HttpStatus.NOT_FOUND)

            return await this.ComentarioRepository.save(comentario)
    }


    async delete(id: number): Promise<DeleteResult> {
        let buscarComentario = await this.findById(id)

        if(!buscarComentario)
            throw new HttpException('Comentario não encontrado', HttpStatus.NOT_FOUND)

        return await this.ComentarioRepository.delete(id)
    }
    


}