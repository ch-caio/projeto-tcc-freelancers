package com.projetotcc.tcc.service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projetotcc.tcc.dto.UsuarioDTO;
import com.projetotcc.tcc.entities.Usuario;
import com.projetotcc.tcc.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

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

    @JsonIgnore()
    @Transactional(readOnly = true)
    public Page<UsuarioDTO> findAll(Pageable pageable) {
        Page<Usuario> result = usuarioRepository.findAll(pageable);
        return result.map(x -> new UsuarioDTO(x));
    }

    public Usuario buscarPorId(Long id) {
        return usuarioRepository.findById(id).orElseThrow(() -> new RuntimeException());
    }

    public Usuario update(Long id, Usuario obj) {
        Usuario entity = usuarioRepository.getOne(id);
        updateData(entity, obj);
        return usuarioRepository.save(entity);
    }

    private void updateData(Usuario entity, Usuario obj) {
        entity.setArea(obj.getArea());
        entity.setDescricao(obj.getDescricao());
        entity.setEmail(obj.getEmail());
        entity.setNome(obj.getNome());
    }

    public Usuario findById(Long usuarioId) {
        Optional<Usuario> usuario = usuarioRepository.findById(usuarioId);
        return usuario.get();
    }
}
