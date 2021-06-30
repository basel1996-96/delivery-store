//styling
import { Center,Tit1 } from "../styles";
//data
import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../App.css';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
  'https://static.wixstatic.com/media/86e9ab_d61125d359514492a2baccadd90ceda7~mv2.jpg/v1/fill/w_640,h_414,al_c,q_80,usm_0.66_1.00_0.01/86e9ab_d61125d359514492a2baccadd90ceda7~mv2.webp',
  'https://c4.wallpaperflare.com/wallpaper/778/966/360/olives-lettuce-greek-cooking-wallpaper-preview.jpg',
  'https://c1.wallpaperflare.com/preview/733/148/987/chocolate-cake-chocolate-cake-recipe-chocolate-images-chocolate-ice-cream.jpg',
];



const Home = () => {
  return (
    <div>
    <Center>
  <Tit1>Enjoy My Joy</Tit1><br></br>
      <p className="tt">Cooking is a philosophy; it's not a recipe </p>
      </Center>
      <br></br>
      <Center>
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div className="image" style={{'backgroundImage': `url(${slideImages[0]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div className="image" style={{'backgroundImage': `url(${slideImages[1]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div className="image" style={{'backgroundImage': `url(${slideImages[2]})`}}>
             
            </div>
           
          </div>
        </Slide>
      </div>
      </Center>
    
      </div>
     

  );

};

export default Home;
