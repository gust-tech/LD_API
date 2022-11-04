import { MaxLength } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne } from "typeorm";

@Entity({name: "tb_postagem"})
    export class Postagem{

        @PrimaryGeneratedColumn()
        id: number

        @UpdateDateColumn()
        data: string
        
        @MaxLength(100)
        @Column({length: 100, nullable: true})
        n_compar: string

        @MaxLength(100)
        @Column({length: 100, nullable: true})
        curtida: string

        @MaxLength(100)
        @Column({length: 100, nullable: true})
        comentario: string

        @ManyToOne(() => Tema, (tema) => tema.postagem, {
            onDelete: "CASCADE"
        })
        tema: Tema

 }