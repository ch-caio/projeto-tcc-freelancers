const Login = () => {
    return (
        <div className="container">
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Digite o email" />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Senha</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Digite a senha" />
            </div>
            <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary" type="button">Login</button>
                <h1>  </h1>
                <button className="btn btn-primary" type="button">Criar conta</button>
            </div>
            <br />

        </div>
    );
}

export default Login;