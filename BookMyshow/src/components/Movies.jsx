
import "./Movie.css";
import products from "../api1.json"; 
import product from "../api2.json"; 
import product3 from "../api3.json"; 
import { MovieCard } from "./MovieCard";
import { MusicStudio } from "./MusicStudio";
export const Movies = () => {
  return (
     <div>
    <div className="parent">
       <div className="heading">
         <h1>Recommended Movie</h1>
       </div>
         
      
       <div className="card_parant">
       <div className="card grid-container">
          
          {products.map((product) => (
            <MovieCard key={product.id} product={product} />
          ))}
         
      </div>
     
       <img src="midle.avif" alt="" />
       </div>
       
       <div className="parent">
       <div className="heading">
         <h1>The Best Of Live Event</h1>
       </div>
         
       <div className="card grid-container">
          
          {product.map((product) => (
            <MovieCard key={product.id} product={product} />
          ))}
         
      </div>
       </div>
        
    </div>

    <div className="bgimg parent">
           <div className="bgimdetail">
           <div className="parent">
       <div className="heading">
         <h1>New Release Every Frieday</h1>
       </div>
         
       <div className="card grid-container">
          
          {product3.map((product) => (
            <MovieCard key={product.id} product={product} />
          ))}
         
      </div>
       </div>
              
             
           </div>
       </div>

      <div className="x grid-container">
       <MusicStudio/>
      </div>
    </div>
  )
}
