import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength, MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { Tema } from "../../tema/entities/tema.entity";

@Entity({name: "tb_usuario"})
    export class Usuario{

        @PrimaryGeneratedColumn()
        @ApiProperty()
        id: number;

        @IsNotEmpty()
        @Column({length: 255, nullable: false})
        @ApiProperty()
        nome: string;

        @IsEmail()
        @IsNotEmpty()
        @MaxLength(255)
        @Column({ length: 255, nullable: false })
        @ApiProperty({ example: "email@email.com" })
        usuario: string; //E-mail

        @IsNotEmpty()
        @MinLength(8)
        @Column({ length: 255, nullable: false })
        @ApiProperty()
        senha: string;
    
        @IsNotEmpty()
        @MaxLength(2000)
        @Column({ length: 2000, nullable: false })
        @ApiProperty()
        foto: string;

        @ApiProperty({ type: () => Postagem})
        @OneToMany( () => Postagem, (postagem) => postagem.usuario)
        postagem: Postagem[]
}
