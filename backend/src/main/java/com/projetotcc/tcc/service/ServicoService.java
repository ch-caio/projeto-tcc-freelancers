package com.projetotcc.tcc.service;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.projetotcc.tcc.dto.ServicoDTO;
import com.projetotcc.tcc.entities.Servico;
import com.projetotcc.tcc.repositories.ServicosRepository;

@Service
public class ServicoService {

	@Autowired
	private ServicosRepository repository;

	public Page<ServicoDTO> findAll(Pageable pageable) { 
		Page<Servico> resultado = repository.findAll(pageable);
		return resultado.map(x -> new ServicoDTO(x));
	}

}
