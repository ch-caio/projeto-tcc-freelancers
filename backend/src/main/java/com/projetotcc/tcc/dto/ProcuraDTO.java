package com.projetotcc.tcc.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projetotcc.tcc.entities.Procura;

public class ProcuraDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String descricao;
	private String email;
	private String area;

	public ProcuraDTO(Long id, String descricao, String email, String area) {
		this.id = id;
		this.descricao = descricao;
		this.email = email;
		this.area = area;
	}
	
	@JsonIgnore
	public ProcuraDTO(Procura procura) {
		id = procura.getId();
		descricao = procura.getDescricao();
		email = procura.getEmail();
		area = procura.getArea();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

}
