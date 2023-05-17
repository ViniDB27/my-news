import React from "react";
import {
  Link
} from "react-router-dom";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

function Auth() {
  return (
    <>
      <Nav />
      <div className="container-fluid content-body">
        <div className="container py-5 d-flex justify-content-center">
          <div className="card p-5" >
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="email" />
                <div id="email" className="form-text">Escreva suas melhores noticias em nossa plataforma.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Senha</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="mb-3">
                <p className="mt-4" ><Link className="link-opacity-100" style={{ color: 'black', textDecoration: 'none' }} to="/register">Registrar-se</Link></p>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Manter sessão</label>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary" onClick={(e) => {
                  e.preventDefault();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Autenticação realizada com sucesso',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }} >Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Auth;
