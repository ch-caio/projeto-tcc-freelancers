package com.projetotcc.tcc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetotcc.tcc.entities.Usuario;
import com.projetotcc.tcc.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	public Usuario insert(Usuario usuario) {
		return usuarioRepository.save(usuario);
	}

	public void delete(Long id) {
		usuarioRepository.deleteById(id);
	}

	@Transactional(readOnly = true)
	public List<Usuario> findAll() {
		return usuarioRepository.findAll();
	}

}
