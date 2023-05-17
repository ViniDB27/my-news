import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MY NEWS</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Início</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active sport-text" aria-current="page" href="#">Esportes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active health-text" aria-current="page" href="#">Saúde</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active economy-text" aria-current="page" href="#">Economia</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active policy-text" aria-current="page" href="#">Politica</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active tecnology-text" aria-current="page" href="#">Tecnologia</a>
            </li>
          </ul>
          <form className="d-flex flex-column flex-md-row justify-content-center align-items-center" role="search">
            <input className="form-control m-2" type="search" placeholder="Pesquisar" aria-label="search" />
            <button className="btn btn-outline-success" style={{ maxHeight: '38px' }} type="submit"><i className="bi bi-search"></i></button>
          </form>
          <ul className="list-unstyled d-flex m-3">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;