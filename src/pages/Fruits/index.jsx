//importando useSelector do react-redux
import { useSelector } from "react-redux";
import "./styles.css";
import useSound from "use-sound";

import banana from "./banana.mp3";
import morango from "./morango.mp3";

const FruitsPage = () => {
  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  const [audio] = useSound(banana, { volume: 0.25 });
  const [audio2] = useSound(morango, { volume: 0.25 });

  return (
    <div className="container">
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
