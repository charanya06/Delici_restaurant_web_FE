import React from "react";
import Navigation from "./components/navbar";
import Home from "./components/main";
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import Menu from "./components/Menu/menu";
import Book from "./components/book";
import ThankYou from "./components/thankYou";

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/Delici_restaurant_web_FE' exact element={<Home/>} />
        <Route path='/Delici_restaurant_web_FE/menu' exact element={<Menu/>} />
        <Route path='/Delici_restaurant_web_FE/reservation' exact element={<Book/>} />
        <Route path='/Delici_restaurant_web_FE/thankyou' exact element={<ThankYou/>} />
      </Routes>
    </Router>
  );
}

export default App;






