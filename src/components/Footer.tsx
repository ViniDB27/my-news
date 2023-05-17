import React from 'react';

function Footer() {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5 className="sport-text">Esportes</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Futebol</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Basquete</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Natação</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Radicais</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Alternativos</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className="tecnology-text">Tecnologia</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Cloud Computing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">DevOps</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Desenvolvimento</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Inteligencia Artificial</a>
              </li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Eventos</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className="health-text">Saúde</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Estar Bem</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Corpo e Alma</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Estetica</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Odontologia</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Gestantes</a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Inscreva-se em nossa Newsletter</h5>
              <p>Receba em primeira mão as melhores notícias.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Seu melhor Email" />
                <button className="btn btn-primary" type="button">Registrar</button>
              </div>
            </form>

            <p className="mt-4" ><a className="link-opacity-100" style={{ color: 'black', textDecoration: 'none' }} href="#">Área do Redator</a></p>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2023 Todos os direitos reservados.</p>
          <ul className="list-unstyled d-flex">
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
      </footer>
    </div>
  );
}

export default Footer;