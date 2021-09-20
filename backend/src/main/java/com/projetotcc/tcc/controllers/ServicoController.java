package com.projetotcc.tcc.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.projetotcc.tcc.dto.ServicoDTO;
import com.projetotcc.tcc.dto.UsuarioDTO;
import com.projetotcc.tcc.entities.Servico;
import com.projetotcc.tcc.entities.Usuario;
import com.projetotcc.tcc.service.ServicoService;

@RestController
@RequestMapping(value = "/servicos")
public class ServicoController {

	@Autowired
	private ServicoService service;

	@GetMapping
	public ResponseEntity<Page<ServicoDTO>> findAll(Pageable pageable) {
		Page<ServicoDTO> lista = service.findAll(pageable);
		return ResponseEntity.ok(lista);
	}
	
	@GetMapping(value = "/listar-servicos")
	public ResponseEntity<List<ServicoDTO>> listarServicos() { 
		List<ServicoDTO> list = service.listarServicos(); 
		return ResponseEntity.ok().body(list); 
	}

	@PostMapping
	public ResponseEntity<Servico> insert(@RequestBody Servico servico) {
		servico = service.insert(servico);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(servico.getId()).toUri();
		return ResponseEntity.created(uri).body(servico);
	}

}
