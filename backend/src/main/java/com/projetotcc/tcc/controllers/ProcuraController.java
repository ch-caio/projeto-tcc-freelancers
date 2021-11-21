package com.projetotcc.tcc.controllers;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projetotcc.tcc.dto.ProcuraDTO;
import com.projetotcc.tcc.entities.Procura;
import com.projetotcc.tcc.service.ProcuraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/procuras")
public class ProcuraController {

	@Autowired
	private ProcuraService service;

	@GetMapping(value = "/{id}")
	public ResponseEntity<Procura> findById (@PathVariable Long id) {
		Procura procura = service.findById(id);
		return ResponseEntity.ok().body(procura);
	}

	@JsonIgnore
	@GetMapping()
	public Page<ProcuraDTO> findAll(Pageable pageable) {
		Page<Procura> pageProcuras = service.findAll(pageable);
		List<ProcuraDTO> procuras = this.toCollectionProcuraDTO(pageProcuras.getContent());
		return new PageImpl<ProcuraDTO>(procuras, pageable, pageProcuras.getTotalElements());
	}

	private List<ProcuraDTO> toCollectionProcuraDTO(List<Procura> procuras) {
		return procuras.stream()
				.map(this::toModelProcuraDTO)
				.collect(Collectors.toList());
	}

	private ProcuraDTO toModelProcuraDTO(Procura procura) {
		return new ProcuraDTO(procura);
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

	@PutMapping(value = "/{id}")
	public ResponseEntity<Procura> atualizar(@PathVariable Long id, @RequestBody Procura procura) {
		procura = service.atualizar(id, procura);
		return ResponseEntity.ok().body(procura);
	}
 }

