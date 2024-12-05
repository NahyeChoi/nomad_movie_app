import React from "react";
import PropTypes from "prop-types";

function Musical ({ name, image, rating }){ 
  return (
    <div>
      <h2>뮤지컬 {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name} />
    </div>
  )
}

Musical.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
}

const musicalList = [
  {
    id: 1,
    name: "키다리 아저씨",
    image: "http://tkfile.yes24.com/upload2/PerfBlog/202310/20231011/20231011-47438.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "이터니티",
    image: "http://tkfile.yes24.com/upload2/PerfBlog/202411/20241118/20241118-50610.jpg",
    rating: 4.9
  }
]

function App() {
  return (
    <div>
      {musicalList.map(musical => (
        <Musical key={musical.id} name={musical.name} image={musical.image} rating={musical.rating} />
      ))}
    </div>
  );
}

export default App;
