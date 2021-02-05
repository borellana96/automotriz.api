import { Controller, Get, Post, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { CreateUsuarioDTO } from '../dto/usuario.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) { }

    @Get()
    async findAll(@Res() res) {
        let usuarios = await this.usuarioService.getUsuarios();
        return res.status(HttpStatus.OK).json({
            usuarios
        })
    }

    @Get('/:usuarioId')
    async findUsuarioById(@Res() res, @Param('usuarioId') usuarioId) {
        let usuario = await this.usuarioService.getUsuarioById(usuarioId);
        if (!usuario)
            throw new NotFoundException('Usuario does not exists');
        else
            return res.status(HttpStatus.OK).json({
                usuario
            });
    }

    @Post()
    async saveUsuario(@Res() res, @Body() createUsuarioDTO: CreateUsuarioDTO) {
        let usuario = await this.usuarioService.createUsuario(createUsuarioDTO);
        res.status(HttpStatus.OK).json({
            message: 'Usuario Successfully Created',
            usuario: usuario
        });
    }
    // {
    //     "nombre_usuario": "Leticia",
    //     "password": "123"
    // }
}
