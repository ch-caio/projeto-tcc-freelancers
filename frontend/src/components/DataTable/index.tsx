const DataTable = () => {
    return (
        <>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Prestador</th>
                            <th>Area</th>
                            <th>Função</th>
                            <th>Telefone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Caio Hneirque</td>
                            <td>Desenvolvedor</td>
                            <td>back-end</td>
                            <td>(11) 9 1234 1234</td>
                            <td>caio@caio.com.br</td>
                        </tr>

                        <tr>
                            <td>teste</td>
                            <td>Desenvolvedor</td>
                            <td>back-end</td>
                            <td>(11) 9 1234 1234</td>
                            <td>teste@teste.com.br</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;