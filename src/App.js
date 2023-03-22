
import './App.css';

function App() {

  const products =[
    {phone: "Iphone",price: 435632,Brand:"Apple"},
    {phone: "Sumsung",price: 3343532,Brand:"S12"},
    {phone: "Walton",price: 63532,Brand:"Nokia"},
    {phone: "Galaxy",price: 4353255,Brand:"vivo"},
    {phone: "Tablet",price: 4356532,Brand:"Kun Brand seta amio jani na"},
    {phone: "Laptop",price: 397532,Brand:"Asuss"},
   
  
  ]
  return (

    <div className="App">
    {
      products.map(product=> <Products name={product.phone} price={product.price +' $'} brand={product.Brand}></Products>)
    }
      {
        products.map(p=>console.log(p))
      }
    </div>
  );
}

function Products(props){
  return(
    <div className="product">
      <h2>Name: {props.name} </h2>
      <b>Price: {props.price}</b>
      <b>Brand: {props.brand}</b>
    </div>
  )
}



export default App;
