package com.projetotcc.tcc.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


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

	public Page<Procura> findAll(Pageable pageable) {
		return procuraRepository.findAll(pageable);
		
	}
}


