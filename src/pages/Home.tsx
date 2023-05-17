import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Card from '../components/Card'


function Home() {
  const [news, setNews] = useState<any[]>([])


  useEffect(() => {
    async function getNews() {
      const response = await axios.get('http://localhost:3000/news');
      const data = response.data;
      setNews(data)

      console.log(data);
    }

    getNews();
  }, [])
  return (
    <>
      <Nav />
      <div className="container-fluid content-body">
        <div className="container py-5">
          <div className="row">
            <div className="col-6 column-four-news">

              <Card />

              <div className="card m-1" style={{ width: '18rem' }}>
                <img
                  src="https://s2.glbimg.com/Trdjdc53rsCRk5hnQrhCfPIDwzY=/0x130:5192x3051/1080x608/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/l/f/Jrd4yKRxucGwbDBY6BYQ/2023-05-03t022603z-1829994800-rc2oq0as61b4-rtrmadp-3-brazil-argentina.jpg"
                  className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title policy-text">Haddad prevê aprovação da nova regra fiscal com 'ampla margem'</h5>
                  <p className="card-text">Fernando Haddad, disse estar confiante na aprovação do arcabouço fiscal com ampla
                    margem...</p>
                  <a href="#" className="btn policy-bg">Continuar Lendo</a>
                </div>
              </div>

              <div className="card m-1" style={{ width: '18rem' }}>
                <img
                  src="https://s2.glbimg.com/_OCTQeeYjoQ8G_iaBxVaz_f56Eg=/0x0:3840x2160/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/X/o/wCWNA2QmyCGYPGBpRPkg/apps-google.jpg"
                  className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title tecnology-text">19% dos brasileiros não acessou a internet em 2022</h5>
                  <p className="card-text">Segundo a TIC Domicílios, grupo representa 19% da população com 10 anos ou mais no
                    país...</p>
                  <a href="#" className="btn tecnology-bg">Continuar Lendo</a>
                </div>
              </div>

              <div className="card m-1" style={{ width: '18rem' }}>
                <img
                  src="https://s2.glbimg.com/KmtwYOCT3afQwdeQ3uEHUbUAz28=/0x0:902x507/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/s/A/3rrqhgS4Kv6BjZxOdVSQ/imagem1.png"
                  className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title health-text">Adoçante não deve ser usado para perder peso</h5>
                  <p className="card-text">Organização Mundial da Saúde (OMS) desaconselhou o uso dos adoçantes sem açúcar para
                    o controle do peso...</p>
                  <a href="#" className="btn health-bg">Continuar Lendo</a>
                </div>
              </div>


            </div>

            <div className="col-6 column-main-new">

              {news.length > 0 && <div className="card me-2 main-card" style={{ width: '18rem' }}>
                <img
                  src={news[0].image} alt={news[0].title} />
                <div className="card-body">
                  <h3 className={`card-title ${news[0].category}-text`}>{news[0].title}</h3>
                  <p className="card-text">{news[0].texto.substring(0, 900)}...</p>
                  <a href="#" className={`btn ${news[0].category}-bg`}>Continuar Lendo</a>
                </div>
              </div>}

            </div>

          </div>
          <div className="row">
            <div className="col-12 mt-5 column-all-news">

              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="https://s2.glbimg.com/BjjQtPDkJ_2UqC7hFxt88FzmC7k=/0x0:562x316/1080x608/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/C/6/19uBAFTU2PAGKsoiAJbQ/camera-farda.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title tecnology-text">Câmera que ajuda a reduzir letalidade policial</h5>
                  <p className="card-text">Equipamentos passaram a ser utilizados em 2020 e, até o final de 2022, 62 dos 135 batalhões do estado adotaram a tecnologia...</p>
                  <a href="#" className="btn tecnology-bg">Continuar Lendo</a>
                </div>
              </div>
              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="https://s2.glbimg.com/NguAQ_vOts-GNap4UidaLPTRQdk=/0x17:1700x973/1080x608/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/j/s/UQYnvuTdSagAZkjMawHQ/imagens-75-.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title sport-text">Presidente de clube de futebol rebateu: 'Se vira, jovem'</h5>
                  <p className="card-text">Antes de denunciar o caso, o presidente chegou a questionar o atleta sobre a participação dele no esquema...</p>
                  <a href="#" className="btn sport-bg">Continuar Lendo</a>
                </div>
              </div>
              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                  <a href="#" className="btn btn-primary">Continuar Lendo</a>
                </div>
              </div>
              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                  <a href="#" className="btn btn-primary">Continuar Lendo</a>
                </div>
              </div>
              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                  <a href="#" className="btn btn-primary">Continuar Lendo</a>
                </div>
              </div>
              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                  <a href="#" className="btn btn-primary">Continuar Lendo</a>
                </div>
              </div>
              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                  <a href="#" className="btn btn-primary">Continuar Lendo</a>
                </div>
              </div>
              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                  <a href="#" className="btn btn-primary">Continuar Lendo</a>
                </div>
              </div>
              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                  <a href="#" className="btn btn-primary">Continuar Lendo</a>
                </div>
              </div>
              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                  <a href="#" className="btn btn-primary">Continuar Lendo</a>
                </div>
              </div>
              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                  <a href="#" className="btn btn-primary">Continuar Lendo</a>
                </div>
              </div>
              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                  <a href="#" className="btn btn-primary">Continuar Lendo</a>
                </div>
              </div>
              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                  <a href="#" className="btn btn-primary">Continuar Lendo</a>
                </div>
              </div>
              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                  <a href="#" className="btn btn-primary">Continuar Lendo</a>
                </div>
              </div>
              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                  <a href="#" className="btn btn-primary">Continuar Lendo</a>
                </div>
              </div>
              <div className="card m-2 main-card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                  <a href="#" className="btn btn-primary">Continuar Lendo</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;