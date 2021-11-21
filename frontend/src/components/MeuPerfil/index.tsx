import axios from "axios";
import { useEffect, useState } from "react";
import { ProcurasPage } from "types/procuras";
import { UsuariosPage } from "types/usuarios";
import { BASE_URL } from "utils/requests";
import { Link, useParams } from 'react-router-dom';
import "components/MeuPerfil/style.css"


const MeuPerfil = () => {

    // Perfil de procuras

    const [pageProcura, setPageProcura] = useState<ProcurasPage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/procuras`)
            .then(response => {
                setPageProcura(response.data);
            })
    }, [])

    function deletePostProcuras(id: number) {
        axios.delete(`${BASE_URL}/procuras/${id}`)

        alert('Excluido!')
    }

    // Perfil de usuarios

    const [pageUsuario, setPageUsuario] = useState<UsuariosPage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/usuarios`)
            .then(showResponse => {
                setPageUsuario(showResponse.data);
            })
    }, [])

    function deletePostUsuarios(id: number) {
        axios.delete(`${BASE_URL}/usuarios/${id}`)

        alert('Excluido!')
    }

    return (
        <>
            <h5>Vagas</h5>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Email</th>
                            <th>Palavra chave</th>
                            <th>Excluir/Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageProcura.content?.map(item => (
                            <tr key={item.id}>
                                <td>{item.descricao}</td>
                                <td>{item.email}</td>
                                <td>{item.area}</td>
                                <td><button onClick={() => deletePostProcuras(item.id)}>Excluir</button>
                                    <Link className="nav-item" to={{ pathname: `/EditProcura/editar/${item.id}` }}>
                                        <button>Editar</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link className="nav-item" to='/publica-vagas'>
                    <button>Adicionar Vaga</button></Link>
            </div>

            <h5>Perfis</h5>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Descrição</th>
                            <th>Palavra chave</th>
                            <th>Excluir/Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageUsuario.content?.map(item => (
                            <tr key={item.id}>
                                <td>{item.nome}</td>
                                <td>{item.email}</td>
                                <td>{item.descricao}</td>
                                <td>{item.area}</td>
                                <td><button onClick={() => deletePostUsuarios(item.id)}>Excluir</button>
                                    <Link to={{ pathname: `/EditUsuario/${item.id}` }} ><button>Editar</button></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link className="nav-item" to='/publica-anuncios'>
                    <button>Adicionar Perfil</button></Link>
            </div>

        </>
    );
}
export default MeuPerfil;
