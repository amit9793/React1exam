import { useState } from "react";
import Shopmain from "./Shop";

function Shopinput({ handlemain, handlemainorder }) {
  const [input, setInput] = useState([]);

  const handlechange = (e) => {
    setInput(e.target.value);
  };

  const handleclick = () => {
    handlemain(input);
  };
  const handleclickorder = () => {
    handlemainorder(input);
  };

  return (
    <>
      <input type="text" placeholder="title" onChange={handlechange} />
      <input type="text" placeholder="ingredients" />
      <input type="text" placeholder="time to cook" />
      <input type="text" placeholder="image" />
      <input type="text" placeholder=" instructions" />
      <input type="text" placeholder="accetable" />
      {/* <button onClick={handleclick}>curr</button> */}
      <button onClick={handleclickorder}>order</button>
    </>
  );
}
export default Shopinput;
