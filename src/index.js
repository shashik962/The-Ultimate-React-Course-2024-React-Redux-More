import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App() {
    return (
        <div className="container ">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Menu() {
   const pizzas = pizzaData;
   // const pizzas = [];
   const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 ? (
                <ul className="pizzas">
                  {pizzaData.map(pizza => (
                     <Pizza pizzaObj={pizza} key={pizza.name} />
                  ))}
               </ul>
            ): (
               <p>We're still working on our menu. Please come back later :) </p>
            )}
           
            {/* <ul className="pizzas">
               {pizzaData.map(pizza => (
                  <Pizza 
                     name={pizza.name} 
                     photoName={pizza.photoName} 
                     ingredients={pizza.ingredients} 
                     price={pizza.price}
                     soldOut={pizza.soldOut}
                  />
               ))}
            </ul> */}
            {/* <Pizza 
                name="Pizza Spinaci" 
                ingredient="Tomato, mozarella, spinach, and ricotta cheese" 
                photoName="pizzas/spinaci.jpg" 
                price={10}
            />
             <Pizza 
                name="Pizza Funghi" 
                ingredient="Tomato, mozarella, mushrooms, and onion" 
                photoName="pizzas/funghi.jpg" 
                price={12}
            /> */}
        </main>
    );
}

//create component 
function Pizza(props) {
   console.log(props);
   
   if (props.pizzaObj.soldOut) return null;

   return (
      <li className="pizza">
         <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
         <div>
            <h3>{props.pizzaObj.name}</h3>
            <p>{props.pizzaObj.ingredients}</p>
            <span>{props.pizzaObj.price}</span>
         </div>
      </li>       
    );
}

function Header() {
    // const style = { color: "red", fontSize: '48px', textTransform: 'uppercase' };
    const style = {};

    return (
        <header  className="header">
            <h1 style={style} >Fast React Pizza Co. </h1>
        </header>
    );
}



function Footer() {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    return (
        <footer className="footer">
            {isOpen ? (
              <Order closeHour={closeHour}/>
            ): (
               <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00. </p>
            )}
        </footer>
        // return React.createElement("footer", null, "We're currently open!");
    );
    
}

function Order(props) {
   return (
      <div className="order">
         <p>
            We're open until {props.closeHour}:00. Come visit us or order online.
         </p>
         <button className="btn">Order</button>
      </div>
   )
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//React before 18
//React.render(<App />);

