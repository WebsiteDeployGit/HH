import React from 'react'
import Cards from './Cards'
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import image7 from "../assets/image7.jpg"
import image8 from "../assets/image8.jpg"

const Gallery = ({ image, title, desc }) => {
  return (
    <>
   

  

<div class="card-group" style={{padding:"45px"}}>
      <Cards
        image={image1}
        title="Title1"
        desc="ksjgbsoi"
      />
       <Cards
        image={image2}
        title="Title1"
        desc="ksjgbsoi"
      />
       <Cards
        image={image3}
        title="Title1"
        desc="ksjgbsoi"
      />
    </div>
    <div class="card-group" style={{padding:"20px"}}>
      <Cards
        image={image4}
        title="Title1"
        desc="ksjgbsoi"
      />
       <Cards
        image={image5}
        title="Title1"
        desc="ksjgbsoi"
      />
       <Cards
        image={image6}
        title="Title1"
        desc="ksjgbsoi"
      />
    </div>
    <div class="card-group" style={{padding:"20px"}}>
      <Cards
        image={image7}
        title="Title1"
        desc="ksjgbsoi"
      />
       <Cards
        image={image8}
        title="Title1"
        desc="ksjgbsoi"
      />
       <Cards
        image={image3}
        title="Title1"
        desc="ksjgbsoi"
      />
    </div>
  </>
  )
}

export default Gallery