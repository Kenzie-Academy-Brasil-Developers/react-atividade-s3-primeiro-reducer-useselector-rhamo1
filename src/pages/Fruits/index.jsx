//importando useSelector do react-redux
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import useSound from "use-sound";
import { useState } from "react";

import banana from "./banana.mp3";
import morango from "./morango.mp3";
import { addFruit } from "../../store/modules/fruits/action";

const FruitsPage = () => {
  const [fruit, setFruit] = useState("");
  const dispatch = useDispatch();
  const fruits = useSelector((state) => state.fruits);

  const handleAddFruit = () => dispatch(addFruit(fruit));

  const [audio] = useSound(banana, { volume: 0.25 });
  const [audio2] = useSound(morango, { volume: 0.25 });

  return (
    <div className="container">
      <input
        className="box"
        type="text"
        onChange={(e) => setFruit(e.target.value)}
      />
      <button className="box" onClick={handleAddFruit}>
        Adicionar frutas
      </button>

      {fruits.map((fruit) => (
        <h2 onMouseDown={audio} onMouseUp={audio2} key={fruit}>
          {" "}
          {fruit}{" "}
        </h2>
      ))}
    </div>
  );
};

export default FruitsPage;
