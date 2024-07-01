import React from "react";

function Cards({ image, title, desc }) {
  return (
    <div class="card" style={{padding:'8px', margin:'4px', border:"none" ,boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.8)" }}>
    <img style={{borderRadius:'2%'}} src={image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{desc}</p>
    </div>
  </div>
  );
}

export default Cards;