import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { BASE_URL } from "utils/requests";
import { useHistory } from 'react-router-dom'

const EditarProcura = () => {

    let history = useHistory()

    const { register, handleSubmit, reset } = useForm({})

    useEffect(() => {
        axios.get(`${BASE_URL}/procuras/${useHistory}`)
            .then((response) => {
                reset(response.data)
            })
    }, [])

    const onSubmit = update => axios.put(`${BASE_URL}/procuras/editar/${useHistory}`, {
        title: update.descricao,
        description: update.email,
        content: update.palavrachave
    })

    return (
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
    );
}

export default EditarProcura;