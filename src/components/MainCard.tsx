import React from "react";

function MainCard({ news }: any) {
  return (
    <div className="card me-2 main-card" style={{ width: "18rem" }}>
      <img src={news.image} alt={news.title} />
      <div className="card-body">
        <h3 className={`card-title ${news.category}-text`}>
          {news.title}
        </h3>
        <p className="card-text">{news.texto.substring(0, 900)}...</p>
        <a href="#" className={`btn ${news.category}-bg`}>
          Continuar Lendo
        </a>
      </div>
    </div>
  );
}

export default MainCard;
