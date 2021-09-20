package com.projetotcc.tcc.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projetotcc.tcc.dto.UsuarioDTO;
import com.projetotcc.tcc.entities.Usuario;
import com.projetotcc.tcc.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repository;

	public List<UsuarioDTO> findAll() {
		List<Usuario> resultado = repository.findAll();
		return resultado.stream().map(x -> new UsuarioDTO(x)).collect(Collectors.toList());
	}

}
