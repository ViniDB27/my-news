import React, { useState } from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

function Register() {
  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')

  const cpfMask = (value: string) => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  const phoneMask = (value: string) => {

    value = value.replace(/\D/g, "")
    // value = value.replace(/^(\d)/, "+$1")
    value = value.replace(/(.{0})(\d)/, "$1($2")
    value = value.replace(/(.{3})(\d)/, "$1) $2")

    if (value.length > 10) {
      value = value.replace(/(.{4})$/, "-$1")
    }


    return value;
  }



  return (
    <>
      <Nav />
      <div className="container-fluid content-body">
        <div className="container py-5 d-flex justify-content-center">
          <div className="card p-5 form-card" >
            <form>
              <div className="mb-3">
                <label htmlFor="cpf" className="form-label">CPF</label>
                <input type="cpf" className="form-control" id="cpf" aria-describedby="cpf" value={cpf} onChange={e => setCpf(cpfMask(e.target.value))} />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="name" className="form-control" id="name" aria-describedby="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Sexo</label>
                <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                  <option selected>Selecionar</option>
                  <option value="1">Masculino</option>
                  <option value="2">Feminino</option>
                  <option value="3">Outro</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="cellphone" className="form-label">Telefone</label>
                <input type="cellphone" className="form-control" id="cellphone" aria-describedby="cellphone" value={phone} onChange={e => setPhone(phoneMask(e.target.value))} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Senha</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirmar Senha</label>
                <input type="cpassword" className="form-control" id="cpassword" />
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Imagem de Perfil</label>
                <input className="form-control" type="file" id="formFile" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Bio</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Deixenos saber um pouco mais sobre você." rows={3}></textarea>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary" onClick={(e) => {
                  e.preventDefault();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Cadastro realizado com sucesso',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }} >Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
