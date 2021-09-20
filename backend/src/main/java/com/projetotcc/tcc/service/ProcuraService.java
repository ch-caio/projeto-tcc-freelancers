package com.projetotcc.tcc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

	@Transactional(readOnly = true)
	public List<Procura> findAll() {
		return procuraRepository.findAll();
	}

}
