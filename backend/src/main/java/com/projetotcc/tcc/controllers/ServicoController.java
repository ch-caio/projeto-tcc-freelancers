package com.projetotcc.tcc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetotcc.tcc.dto.ServicoDTO;
import com.projetotcc.tcc.service.ServicoService;

@RestController
@RequestMapping(value = "/servicos")
public class ServicoController {

	@Autowired
	private ServicoService service;
	
	@GetMapping
	public ResponseEntity<Page<ServicoDTO>> findAll (Pageable pageable) {
		Page<ServicoDTO> lista = service.findAll(pageable);
		return ResponseEntity.ok(lista);
	}
}
