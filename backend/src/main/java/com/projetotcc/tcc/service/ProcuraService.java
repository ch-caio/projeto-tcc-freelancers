package com.projetotcc.tcc.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projetotcc.tcc.dto.ProcuraDTO;
import com.projetotcc.tcc.entities.Procura;
import com.projetotcc.tcc.repositories.ProcuraRepository;

@Service
public class ProcuraService {

	@Autowired
	private ProcuraRepository procuraRepository;

	public Procura insert(Procura procura) {
		return procuraRepository.save(procura);
	}

	public void delete(Long id) {
		procuraRepository.deleteById(id);
	}

	@JsonIgnore
	@Transactional()
	public Page<ProcuraDTO> findAll(Pageable pageable) {
		Page<Procura> resultado = procuraRepository.findAll(pageable);
		return resultado.map(x -> new ProcuraDTO(x));
	}

}


