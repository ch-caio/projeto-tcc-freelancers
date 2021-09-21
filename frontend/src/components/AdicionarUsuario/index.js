import React, { useState } from 'react';
import axios from 'axios';

const AdicionarUsuario = () => {

    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [descricao, setDescricao] = useState()
    const [area, setArea] = useState()

    const handleSubmit = event => {
        event.preventDefault();
        const user = { nome, descricao, email, area };

        axios.post(`http://localhost:8080/usuarios`, user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Nome Completo</label>
                    <input type="text" className="form-control" id="validationCustom03" required onChange={(event) => setNome(event.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Email</label>
                    <input type="text" className="form-control" id="validationCustom03" required onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Descrição</label>
                    <input type="text" className="form-control" id="validationCustom03" required onChange={(event) => setDescricao(event.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Area</label>
                    <input type="text" className="form-control" id="validationCustom03" required onChange={(event) => setArea(event.target.value)} />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default AdicionarUsuario;
