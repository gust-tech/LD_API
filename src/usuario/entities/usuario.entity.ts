import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comentario } from "../../comentario/entities/comentario.entity";

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    nome: string

    @IsEmail()
    @Column({length: 255, nullable: false})
    @ApiProperty({example: "email@email.com.br"})
    usuario: string //e-mail

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false})
    @ApiProperty()
    senha: string

    @Column({length: 5000, nullable: false})
    @ApiProperty()
    foto: string

    @ApiProperty({ type: () => Postagem })
    @ManyToOne(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]

    @ApiProperty({ type: () => Comentario })
    @ManyToOne(() => Comentario, (comentario) => comentario.usuario)
    comentario: Comentario[]
}
