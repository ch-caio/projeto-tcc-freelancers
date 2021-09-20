import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

    useEffect(() => {
        axios.get(`${BASE_URL}/usuarios`)
            .then(Response => {
                setPage(Response.data);
            })
    })

    return (
        <>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Descrição</th>
                            <th>Area</th>

                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.descricao}</td>
                                <td>{item.area}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;