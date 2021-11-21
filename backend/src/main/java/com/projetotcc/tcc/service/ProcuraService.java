package com.projetotcc.tcc.service;


import com.projetotcc.tcc.entities.Procura;
import com.projetotcc.tcc.repositories.ProcuraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    public Procura atualizar(Long id, Procura procura) {
		Procura entity = procuraRepository.getOne(id);
		updateData(entity, procura);
		return procuraRepository.save(entity);
	}

	private void updateData(Procura entity, Procura obj) {
		entity.setArea(obj.getArea());
		entity.setDescricao(obj.getDescricao());
		entity.setEmail(obj.getEmail());
	}

    public Procura findById(Long procuraId) {
		Optional<Procura> procura = procuraRepository.findById(procuraId);
		return procura.get();
    }
}