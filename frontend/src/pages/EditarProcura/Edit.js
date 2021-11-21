import NavBar from "components/NavBar";
import Footer from "components/Footer";
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { BASE_URL } from "utils/requests";
import { useParams, useHistory } from 'react-router-dom'
import React from "react";

function EditProcura() {

    const { id } = useParams();
    let history = useHistory();

    const { register, handleSubmit, reset } = useForm({})

    useEffect(() => {
        axios.get(`${BASE_URL}/procuras/${id}`)
            .then((response) => {
                reset(response.data)
            })
    }, [])

    const onSubmit = update => axios.put(`${BASE_URL}/procuras/${id}`, {
        title: update.descricao,
        description: update.email,
        content: update.palavrachave
    })

    return (
        <>
            <NavBar />
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="fields">
                        <label>Descrição</label>
                        <input type="text" name="descricao" autoComplete="off" {...register("descricao")} />
                    </div>

                    <div className="fields" >
                        <label>Email</label>
                        <input type="text" name="email" autoComplete="off" {...register("email")} />
                    </div>

                    <div>
                        <label>Palavra Chave</label>
                        <textarea name="palavrachave" {...register("palavrachave")} ></textarea>
                    </div>
                    <div className="btn-post">
                        <button type="submit">Editar</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default EditProcura;