package Request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AtualizarUsuario {

    private String nome;
    private String email;
    private String descricao;
    private String area;
}