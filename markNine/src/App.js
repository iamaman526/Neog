import { useState } from "react";
import "./styles.css";

export default function App() {
  var FoodDataBase = {
    Indian: [
      { name: "Dal makhani", type: "Veg" },
      { name: "Biryani", type: "Non-veg" },
      { name: "Litti Chokha", type: " Veg" },
      { name: " Idli – Sambar", type: "Veg" }
    ],
    Korean: [
      { name: "Kimchi", type: "Veg" },
      { name: "Haemul Pajeon", type: "Veg" },
      { name: "Kimbap", type: "Non-veg" },
      { name: "Chimaek", type: "Non-veg" }
    ],
    Italian: [
      { name: "Risotto ", type: " Veg" },
      { name: "Napoletana Pizza", type: "Veg" },
      { name: "Spaghetti", type: "Non-veg" },
      { name: "Truffles", type: "Veg" }
    ],
    Thai: [
      { name: "Guay Teow", type: "  Non-veg" },
      { name: "Som Tam", type: "Veg" },
      { name: "Bu Pad Pong Karee", type: "Non-veg" },
      { name: "APla Pao", type: "Non-veg" }
    ]
  };

  var [TastedCuisine, setCuisine] = useState("Indian");

  var cuisineHandler = (cuisine) => {
    var TastedCuisine = cuisine;
    setCuisine(TastedCuisine);
  };

  return (
    <div className="App">
      <h1 className="brand">
        FoodGram
        <span></span>
      </h1>
      <p>
        Checkout the Diversity of food Culture. Select the cuisine to get
        started
      </p>
      <div className="container">
        {Object.keys(FoodDataBase).map((cuisine) => {
          return (
            <button
              onClick={() => cuisineHandler(cuisine)}
              className="btn-cuisine link-active"
            >
              {cuisine}
            </button>
          );
        })}
        <hr></hr>
        {FoodDataBase[TastedCuisine].map((food) => (
          <div className="mini-container">
            <b>
              <span className="food">{food.name}</span>
              <br></br>
              <small style={{ padding: "3rem" }} className="type">
                <span>- </span>
                {food.type}
              </small>
            </b>
          </div>
        ))}
      </div>
    </div>
  );
}
