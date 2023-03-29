import { Comentario } from './comentario/entities/comentario.entity';
import { ComentarioModule } from './comentario/comentario.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema/tema.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { Tema } from './tema/entities/tema.entity';
import { Postagem } from './postagem/entities/postagem.entity';

@Module({
      imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_ladydebug',
    entities: [Postagem, Tema, Usuario, Comentario],
    synchronize: true
  }),

  // TypeOrmModule.forRoot({
  //   type: 'postgres',
  //   url: process.env.DATABASE_URL,
  //   logging: false,
  //   dropSchema: false,
  //   ssl: {
  //     rejectUnauthorized: false
  //   },
  //   synchronize: true,
  //   autoLoadEntities: true,
  //  }),
    PostagemModule,
    TemaModule,
    UsuarioModule,
    ComentarioModule,
    AuthModule
  ],

  controllers: [AppController],
  providers: [],
})
export class AppModule { }
