package com.projetotcc.tcc.controllers;

import java.net.URI;

import Request.AtualizarUsuario;
import com.projetotcc.tcc.entities.Procura;
import com.projetotcc.tcc.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projetotcc.tcc.dto.UsuarioDTO;
import com.projetotcc.tcc.entities.Usuario;
import com.projetotcc.tcc.service.UsuarioService;

@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioController {

	@Autowired
	private UsuarioService service;
	private UsuarioRepository usuarioRepository;

	@JsonIgnore
	@GetMapping()
	public ResponseEntity<Page<UsuarioDTO>> findAll(Pageable pageable) {
		Page<UsuarioDTO> lista = service.findAll(pageable);
		return ResponseEntity.ok(lista);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Usuario> findById (@PathVariable Long id) {
		Usuario usuario = service.findById(id);
		return ResponseEntity.ok().body(usuario);
	}

	@PostMapping
	public ResponseEntity<Usuario> insert(@RequestBody Usuario usuario) {
		usuario = service.insert(usuario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(usuario.getId())
				.toUri();
		return ResponseEntity.created(uri).body(usuario);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

	@PutMapping(value = "/editar/{id}")
	public ResponseEntity<Usuario> editar (@PathVariable Long id, @RequestBody Usuario usuario) {
		usuario = service.update(id, usuario);
		return ResponseEntity.ok().body(usuario);
	}

}