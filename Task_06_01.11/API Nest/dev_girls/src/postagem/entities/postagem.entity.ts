import { ApiProperty } from "@nestjs/swagger";
import { MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({name: "tb_postagem"})
    export class Postagem{

        @PrimaryGeneratedColumn()
        @ApiProperty()
        id: number

        @UpdateDateColumn()
        @ApiProperty()
        data: string
        
        @MaxLength(100)
        @Column({length: 100, nullable: true})
        @ApiProperty()
        n_compar: string

        @MaxLength(100)
        @Column({length: 100, nullable: true})
        @ApiProperty()
        curtida: string

        @MaxLength(100)
        @Column({length: 100, nullable: true})
        @ApiProperty()
        leituras: string

        @ApiProperty({type: () => Usuario})
        @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
            onDelete: "CASCADE"
        })
        usuario: Usuario
    }