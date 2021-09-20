package com.projetotcc.tcc.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.projetotcc.tcc.entities.Procura;
import com.projetotcc.tcc.service.ProcuraService;

@RestController
@RequestMapping(value = "/procuras")
public class ProcuraController {

	@Autowired
	private ProcuraService service;

	@GetMapping()
	public ResponseEntity<List<Procura>> findAll() {
		List<Procura> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	@PostMapping
	public ResponseEntity<Procura> insert(@RequestBody Procura procura) {
		procura = service.insert(procura);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(procura.getId())
				.toUri();
		return ResponseEntity.created(uri).body(procura);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}