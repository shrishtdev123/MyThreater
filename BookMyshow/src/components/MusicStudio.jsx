
import product4 from "../api4.json"; 
import { MovieCard } from "./MovieCard";
export const MusicStudio = () => {
  return (
    <div>
      <div className="parent">
           <div className="bgimdetail">
           <div className="parent">
       <div className="heading">
         <h1>Your Music Studio</h1>
       </div>
         
       <div className="card grid-container">
          
          {product4.map((product) => (
            <MovieCard key={product.id} product={product} />
          ))}
         
      </div>
       </div>
              
             
           </div>
       </div>
    </div>
  )
}
