import { ComentarioService } from './../service/comentario.service';
import { JwtAuthGuard } from './../../auth/guard/jwt-auth.guard';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Comentario } from '../entities/comentario.entity';


@ApiTags('Comentario')
@UseGuards(JwtAuthGuard)
@Controller("/comentarios")
@ApiBearerAuth()
export class ComentarioController {
    constructor(private readonly ComentarioService: ComentarioService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Comentario[]> {
        return this.ComentarioService.findAll();
    }

    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Comentario> {
        return this.ComentarioService.findById(id)
    }

    @Get('/usuario/:usuario')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('usuario') usuario: string): Promise<Comentario[]> {
        return this.ComentarioService.findByUsuario(usuario)
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() comentario: Comentario): Promise<Comentario> {
        return this.ComentarioService.create(comentario)
    }


    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() comentario: Comentario): Promise<Comentario> {
        return this.ComentarioService.update(comentario)
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.ComentarioService.delete(id)
    }
}