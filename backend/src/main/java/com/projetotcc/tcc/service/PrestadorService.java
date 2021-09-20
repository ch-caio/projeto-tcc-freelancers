package com.projetotcc.tcc.service;

import java.awt.print.Pageable;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetotcc.tcc.dto.PrestadorDTO;
import com.projetotcc.tcc.entities.Prestador;
import com.projetotcc.tcc.repositories.PrestadorRepository;

@Service
public class PrestadorService {

	@Autowired
	private PrestadorRepository prestadorRepository;

	@Transactional(readOnly = true)
	public List<PrestadorDTO> findAll() {
		List<Prestador> resultado = prestadorRepository.findAll();
		
		return resultado.stream().map(x -> new PrestadorDTO(x)).collect(Collectors.toList());
	}

	public Prestador insert(Prestador obj) {
		return prestadorRepository.save(obj);
	}

	public void delete(Long id) {
		prestadorRepository.deleteById(id);
	}
	
}
