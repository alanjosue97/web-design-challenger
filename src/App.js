import React from "react"
import star from "./star.svg";
import "./App.css";
import anne from "./assets/anne.jpg";
import colton from "./assets/colton.jpg";
import irene from "./assets/irene.jpg";



function App() {
  return (
    <div className="App">
      <Rated />
      <Coments />
    </div>
  );
}

function Rated() {
  return (
    <div>
      <h1 className="title is-1 titulo">
        10,000+ of our <br /> users love our <br />
        products.
      </h1>
      <p className="sub-parrafo">
        We only provide great products combined with excellent
        <br /> customer service. See what our satisfied customers are <br />{" "}
        saying about our services.
      </p>
      <div className="rated1">
      <img src={star} alt="React Logo" /> &nbsp;
      <img src={star} alt="React Logo" />&nbsp;
      <img src={star} alt="React Logo" />&nbsp;
      <img src={star} alt="React Logo" />&nbsp;
      <img src={star} alt="React Logo" />&nbsp;
      <h4>Rated 5 Start in Reviews</h4>
        
      </div>
      <div className="rated2">
      <img src={star} alt="React Logo" />&nbsp;
      <img src={star} alt="React Logo" />&nbsp;
      <img src={star} alt="React Logo" />&nbsp;
      <img src={star} alt="React Logo" />&nbsp;
      <img src={star} alt="React Logo" />
      <h4>Rated 5 Start in Reviews</h4>
     </div>
      <div className="rated3">
      <img src={star} alt="React Logo" />&nbsp;
      <img src={star} alt="React Logo" />&nbsp;
      <img src={star} alt="React Logo" />&nbsp;
      <img src={star} alt="React Logo" />&nbsp;
      <img src={star} alt="React Logo" />&nbsp;
      <h4>Rated 5 Start in Reviews</h4>
        
      </div>
    </div>
  );
}

function Coments() {
  return (
    <div>
      <div className="content is-mobile">
        <img className="img-colton" src={colton} alt={colton} />
        <p className="subtitle is-5 name1">Colton Smith</p>
        <p className="subtitle is-5 sub">Verifed Buyer</p>
        <p className="parrafo">
          "We needed the same printed design as <br /> the one we had ordered a
          week prior. Not <br />
          only did they find the original order, but <br />
          we also received it in time. Excellent!"
        </p>
      </div>
      <div className="content1">
        <img className="img-colton" src={irene} alt={irene} />
        <p className="subtitle is-5 name2">Irene Roberts</p>
        <p className="subtitle is-5 sub">Verifed Buyer</p>
        <p className="parrafo">
          "Customer serivce is always excellent and <br /> very quick turn
          around. Completely <br />
          delighted with the simplicity of the <br /> purchase and the speed of
          delivery."
        </p>
      </div>
      <div className="content2">
        <img className="img-colton" src={anne} alt={anne} />
        <p className="subtitle is-5 name3">Anne Wallace</p>
        <p className="subtitle is-5 sub">Verifed Buyer</p>
        <p className="parrafo">
          "Put an order with this company and can <br />
          only praise them for the very high <br />
          standard. Will definitely use them again <br />
          and recommend them to everyone!"
        </p>
      </div>
    </div>
  );
}

export default App;
