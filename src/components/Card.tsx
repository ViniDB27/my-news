import React from "react";


function Card({ porps }: any) {
  return (
    <div className="card m-1" style={{ width: '18rem' }}>
      <img
        src="https://s2.glbimg.com/cuLj0U805m6LQ7TScpydTw9Vs08=/0x310:3000x1998/1080x608/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/w/0/hrKsBAS5qSb3EVOO1AKw/asp20220711020.jpg"
        className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title economy-text">Gasolina e diesel recebem reduções</h5>
        <p className="card-text">É o primeiro anúncio após a mudança da política de preços da estatal, que elimina a
          política de paridade de importação (PPI)...</p>
        <a href="#" className="btn economy-bg">Continuar Lendo</a>
      </div>
    </div>
  );
}

export default Card;