import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
} from '@nestjs/common';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
	constructor(private readonly usuariosService: UsuariosService) {}

	@Post()
	crear(@Body() body: CrearUsuarioDto) {
		return this.usuariosService.crear(body);
	}

	@Get()
	obtenerTodos() {
		return this.usuariosService.obtenerTodos();
	}

	@Get(':id')
	obtenerPorId(@Param('id', ParseIntPipe) id: number) {
		return this.usuariosService.obtenerPorId(id);
	}

	@Patch(':id')
	actualizar(
		@Param('id', ParseIntPipe) id: number,
		@Body() body: ActualizarUsuarioDto,
	) {
		return this.usuariosService.actualizar(id, body);
	}

	@Delete(':id')
	eliminar(@Param('id', ParseIntPipe) id: number) {
		return this.usuariosService.eliminar(id);
	}
}
