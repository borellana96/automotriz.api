import { Injectable, Inject } from '@nestjs/common';
import { createQueryBuilder, Repository } from 'typeorm';
import { CreateUsuarioDTO } from '../dto/usuario.dto';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) { }

  async getUsuarios(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async getUsuarioById(usuarioId): Promise<Usuario> {
    return this.usuarioRepository.findOne(usuarioId);
  }

  async createUsuario(createUsuarioDTO: CreateUsuarioDTO): Promise<Usuario[]> {
    let usuario = this.usuarioRepository.create(createUsuarioDTO as any);
    return await this.usuarioRepository.save(usuario);
  }
}