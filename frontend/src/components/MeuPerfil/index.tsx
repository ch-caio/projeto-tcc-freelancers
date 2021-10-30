import axios from "axios";
import { useEffect, useState } from "react";
import { ProcurasPage } from "types/procuras";
import { BASE_URL } from "utils/requests";

const MeuPerfil = () => {

    const [page, setPage] = useState<ProcurasPage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/procuras?pag=0&size=20`)
            .then(response => {
                setPage(response.data);
            })
    }, [])

    function deletePost(id: number) {
        axios.delete(`${BASE_URL}/procuras/${id}`)

        alert('Excluido!')
    }

    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Email</th>
                            <th>Palavra chave</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id}>
                                <td>{item.descricao}</td>
                                <td>{item.email}</td>
                                <td>{item.area}</td>
                                <td><button onClick={() => deletePost(item.id)}>Excluir</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default MeuPerfil;