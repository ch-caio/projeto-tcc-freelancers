package com.projetotcc.tcc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetotcc.tcc.entities.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}
