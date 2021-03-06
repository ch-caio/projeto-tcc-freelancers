import axios from "axios";
import { useEffect, useState } from "react";
import { UsuariosPage } from "types/usuarios";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

    const [page, setPage] = useState<UsuariosPage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/usuarios`)
            .then(showResponse => {
                setPage(showResponse.data);
            })
    }, [])

    return (
        <>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Descrição</th>
                            <th>Palavra chave</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id}>
                                <td>{item.nome}</td>
                                <td>{item.email}</td>
                                <td>{item.descricao}</td>
                                <td>{item.area}</td>
                                <td>Ativo</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;