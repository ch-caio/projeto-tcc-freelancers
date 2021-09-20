package com.projetotcc.tcc.dto;

import com.projetotcc.tcc.entities.Servico;

public class ServicoDTO {

	private Long id;
	private String descricao;

	private UsuarioDTO usuarioDTO;

	public ServicoDTO() {

	}

	public ServicoDTO(Long id, String descricao, UsuarioDTO usuarioDTO) {
		this.id = id;
		this.descricao = descricao;
		this.usuarioDTO = usuarioDTO;
	}

	public ServicoDTO(Servico servico) {
		this.id = servico.getId();
		this.descricao = servico.getDescricao();
		this.usuarioDTO = new UsuarioDTO(servico.getUsuario());
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

	public UsuarioDTO getUsuarioDTO() {
		return usuarioDTO;
	}

	public void setUsuarioDTO(UsuarioDTO usuarioDTO) {
		this.usuarioDTO = usuarioDTO;
	}
}