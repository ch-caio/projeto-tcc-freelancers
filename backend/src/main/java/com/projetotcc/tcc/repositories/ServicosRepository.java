package com.projetotcc.tcc.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetotcc.tcc.entities.Servico;

public interface ServicosRepository extends JpaRepository<Servico, Long> {
	

}
