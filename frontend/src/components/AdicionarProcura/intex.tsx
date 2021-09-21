

const AdicionarProcura = () => {
    return (
        <div className="container">
            <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Descrição</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Email</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Area</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>


        </div>
    );
}
export default AdicionarProcura;