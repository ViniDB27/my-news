import React from "react";
import { Link } from "react-router-dom"

function Card({ news }: any) {
  return (
    <div className="card m-1" style={{ width: '18rem' }}>
      <img
        src={news.image}
        className="card-img-top" alt={news.title} />
      <div className="card-body">
        <h5 className={`card-title ${news.category}-text`}>{news.title}</h5>
        <p className="card-text">{news.texto.substring(0, 100)}...</p>
        <Link to={`new/${news.id}`} className={`btn ${news.category}-bg`}>Continuar Lendo</Link>
      </div>
    </div>
  );
}

export default Card;