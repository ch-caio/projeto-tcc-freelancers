import axios from "axios";
import { useEffect, useState } from "react";
import { ProcurasPage } from "types/procuras";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

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
    })

    return (
        <>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Email</th>
                            <th>Area</th>

                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id}>
                                <td>{item.descricao}</td>
                                <td>{item.email}</td>
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