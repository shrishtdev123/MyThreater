
import product5 from "../api5.json"; 
import { MovieCard } from "./MovieCard";
export const Slider = () => {
  return (

    <div>
      <div className="parent">
           <div className="bgimdetail">
           <div className="parent">
       <div className="card slider">
          
          {product5.map((product) => (
            <MovieCard key={product.id} product={product} />
          ))}
         
      </div>
       </div>
              
             
           </div>
       </div>
    </div>
  )
}
