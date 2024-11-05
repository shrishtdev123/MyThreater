import "./Movie.css";

// eslint-disable-next-line react/prop-types
export const MovieCard = ({ product }) => { // Accept product as a prop
  return (
    <div className="movie-card"> {/* Add a class for styling */}
      <img src={product.img} alt={product.title} className="img" />
      <p>{product.title}</p>
      <p>{product.type}</p>
    </div>
  );
};
