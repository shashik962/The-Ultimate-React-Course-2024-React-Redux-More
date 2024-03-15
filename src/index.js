import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import StarReating from './StarRating';
import './index.css';
import App from './App';


function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarReating color='blue' maxRating={10} onSetRating={setMovieRating}/>
      <p>This movie was rated { movieRating } stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarReating maxRating='5' messages={["Terrible", "Bed", "Okey", "Good", "Amazing"]}/>
    <StarReating size={24} color='red' className='test' defaultRating={3}/>
    <Test /> */}
  </React.StrictMode>
);
