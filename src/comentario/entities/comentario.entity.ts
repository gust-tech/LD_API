import { Postagem } from 'src/postagem/entities/postagem.entity';
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany} from "typeorm";
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({name: "tb_comentarios"})
    export class Comentario{

        
        @PrimaryGeneratedColumn()
        @ApiProperty()
        id: number

        @IsNotEmpty()
        @Column({length: 1000, nullable: false})
        @ApiProperty()
        texto: string

        @ApiProperty({ type: () => Usuario})
        @OneToMany(() => Usuario, (usuario) => usuario.comentario, {
            onDelete: "CASCADE"
        })
        @JoinColumn({})
        usuario: Usuario

        @ApiProperty({ type: () => Postagem})
        @OneToMany(() => Postagem, (postagem) => postagem.comentario, {
            onDelete: "CASCADE"
        })
        postagem: Postagem

    }
