
import { useEffect, useState } from 'react';
import './App.css';
import Carousel from './components/Carousel';

function App() {
  const[images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchImages = async (imgLimit)=>{
    setLoading(true);
    try{
      const response =await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${imgLimit}`);
      const data = await response.json();
      setImages(data);
    }catch(error){
      console.log("Error in fetching images",error)
    }finally{
      setLoading(false);
    }
  }
  useEffect(()=>{
    fetchImages(8);
  },[])
  return (
    <div className="carousel-container">
      
    </div>
  );
}

export default App;
