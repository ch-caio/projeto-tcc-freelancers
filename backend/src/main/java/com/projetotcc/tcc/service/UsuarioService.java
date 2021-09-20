package com.projetotcc.tcc.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetotcc.tcc.dto.UsuarioDTO;
import com.projetotcc.tcc.entities.Usuario;
import com.projetotcc.tcc.repositories.ServicosRepository;
import com.projetotcc.tcc.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private ServicosRepository servicosRepository;

	@Transactional(readOnly = true)
	public List<UsuarioDTO> findAll() {
		servicosRepository.findAll();
		List<Usuario> resultado = usuarioRepository.findAll();
		return resultado.stream().map(x -> new UsuarioDTO(x)).collect(Collectors.toList());
	}
	
	public Usuario insert(Usuario usuario) { 
		return usuarioRepository.save(usuario);
	}

	public void delete(Long id) {
		usuarioRepository.deleteById(id);
	}

}
