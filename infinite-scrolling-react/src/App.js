
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [products , setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage ] = useState(1);

  const fetchProducts = async () =>{
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=${page * 10}`);
      const data =await response.json();
      setProducts(data);
      setPage(page + 1);
    } catch (error) {
      console.log('Error in fetching products', error);
    }finally{
      setLoading(false);
    }
  }
  useEffect(()=>{
    fetchProducts();
  },[])
  const mythrottle = (cb, d) =>{
    let last = 0;
    return (...args) =>{
      let now = new Date().getTime();
      if(now - last < d) return;
      last = now;
      return cb(...args);
    }
  }
  const handleScroll = mythrottle(() =>{
    //document.documentElement.offsetHeight ===> It is height of the html page
    //window.innerHeight ===> height of the viewport simply height of the page which is visible to us
    //document.documentElement.scrollTop ===> height from the top to the point where the scroll is at present
    //the below condition is when height is 500px from the ground then hit the api call
    if(window.innerHeight  + document.documentElement.scrollTop + 500 > 
      document.documentElement.offsetHeight && !loading &&
      products.limit < products.total){
        fetchProducts();
    }
  },500)
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    
    return () =>window.removeEventListener("scroll",handleScroll);
  },[handleScroll]);

  const {products:Allproducts} = products;
  return (
   <div>
      <h1>Ininite Scrolling</h1>
      {Allproducts?.length > 0 && (
        <div className='products'>
          {Allproducts?.map((prod)=>{
            return (
              <div className='products__single' key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title}/>
                <span>{prod.title}</span>
              </div>
            )
          })}
        </div>
      )} 
      {loading  && <h1>Loading...</h1>}
   </div>
  );
}

export default App;
