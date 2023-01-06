import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { LongCard } from "../component/cards";
export const Home = () => (
	<div className="text-center">
      <h1>StarWars Blog</h1>
      <div className="row">
         <div className="col-12">
         <LongCard titulo= "Go to Characters" ruta="/personajes" imagen="https://cdn.shopify.com/s/files/1/0190/5436/2724/articles/star_wars_personajes_800x.jpg?v=1616087475"/>
         </div>
         <div className="col-12">
         <LongCard titulo= "Go to Planets" ruta="/planetas" imagen="https://p4.wallpaperbetter.com/wallpaper/505/162/415/star-wars-fiction-planet-wallpaper-preview.jpg"/>
         </div>
         
       

      </div>
   </div>


);
