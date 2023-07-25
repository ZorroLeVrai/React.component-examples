import GetProducts from "./components/GetProducts";
import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";

const items = ["New York", "Tokyo", "London", "Paris"];

export default function App() {
  const [category, setCategory] = useState("");

  return (
    <div>
      <input
        type="text"
        className="form-control"
        onChange={(event) => setCategory(event.target.value)}
      ></input>
      <GetProducts category={category}></GetProducts>
      <ListGroup
        items={items}
        heading="List Group example"
        onSelectItem={(item) => console.log(`Item ${item} clicked`)}
      ></ListGroup>
    </div>
  );
}
