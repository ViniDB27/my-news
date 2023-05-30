import React, { useEffect, useState } from "react";
import axios from "axios";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Reader from "../components/Render";

function Home() {

  const { id } = useParams();

  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    async function getNews() {
      const response = await axios.get(`http://localhost:3000/news/${id}`);
      const data = response.data;
      console.log(data)
      setNews(data);
    }

    getNews();
  }, []);
  return (
    <>
      <Nav />
      <Reader />
      <div className="container-fluid content-body">
        <div className="container py-5">

          <div className="row">
            <div className="col-12">
              {news != null && (

                <div className="card">
                  <img src={news.image} className="card-img-top" alt={news.title} />
                  <div className="card-body">
                    <h5 className={`card-title ${news.category}-text`}>{news.title}</h5>
                    <p className="card-text">{news.texto}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;