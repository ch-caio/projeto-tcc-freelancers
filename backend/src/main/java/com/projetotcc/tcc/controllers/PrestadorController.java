package com.projetotcc.tcc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetotcc.tcc.dto.PrestadorDTO;
import com.projetotcc.tcc.service.PrestadorService;

@RestController
@RequestMapping(value="/prestadores")
public class PrestadorController {

	@Autowired
	private PrestadorService prestadorService;
	
	@GetMapping
	public ResponseEntity<List<PrestadorDTO>> findAll () {
		List<PrestadorDTO> lista = prestadorService.findAll();
		return ResponseEntity.ok(lista);
		
	}
}
