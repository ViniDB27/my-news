import React, { useEffect, useState } from "react";
import axios from "axios";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import MainCard from "../components/MainCard";

function Home() {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    async function getNews() {
      const response = await axios.get("http://localhost:3000/news");
      const data = response.data;
      setNews(data);
    }

    getNews();
  }, []);
  return (
    <>
      <Nav />
      <div className="container-fluid content-body">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-6 d-flex flex-column  flex-md-row flex-md-wrap justify-content-center justify-content-md-between  align-items-center">
              {news.length > 0 && <Card news={news[1]} />}
              {news.length > 0 && <Card news={news[2]} />}
              {news.length > 0 && <Card news={news[3]} />}
              {news.length > 0 && <Card news={news[4]} />}
            </div>

            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              {news.length > 0 && <MainCard news={news[0]} />}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 d-flex flex-column flex-md-row flex-md-wrap justify-content-center justify-content-md-between align-items-center">
              {news.reverse().map((news) => (
                <Card news={news} key={news.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
