package com.projetotcc.tcc.dto;

import java.io.Serializable;

import com.projetotcc.tcc.entities.Prestador;

public class PrestadorDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private String area;
	private String palavrachave;
	private String telefone;
	private String email;
	
	public PrestadorDTO () {
		
	}

	public PrestadorDTO(Long id, String name, String area, String palavrachave, String telefone, String email) {
		this.id = id;
		this.name = name;
		this.area = area;
		this.palavrachave = palavrachave;
		this.telefone = telefone;
		this.email = email;
	}
	
	public PrestadorDTO(Prestador entity) {
		id = entity.getId();
		name = entity.getName();
		area = entity.getArea();
		palavrachave = entity.getPalavrachave();
		telefone = entity.getTelefone();
		email = entity.getEmail();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getPalavrachave() {
		return palavrachave;
	}

	public void setPalavrachave(String palavrachave) {
		this.palavrachave = palavrachave;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
