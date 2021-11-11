// import React from "react";
// import ReactDOM from "react-dom";
// import Carousel from "react-elastic-carousel";
// import Item from "./components/Item";
// import "./sass/style.css";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

// function App() {
//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
//       <div className="App">
//         <Carousel breakPoints={breakPoints}>
//           <Item>One</Item>
//           <Item>Two</Item>
//           <Item>Three</Item>
//           <Item>Four</Item>
//           <Item>Five</Item>
//           <Item>Six</Item>
//           <Item>Seven</Item>
//           <Item>Eight</Item>
//         </Carousel>
//       </div>
//     </>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import reportWebVitals from './reportWebVitals';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
