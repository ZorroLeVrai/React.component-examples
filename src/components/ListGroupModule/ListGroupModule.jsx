import { useState } from "react";
import ListGroupItem from "../ListGroupItem";
import styles from "./ListGroupModule.module.css";

export default function ListGroupModule({ items, heading, onSelectItem }) {
  const [lastClickedIndex, setLastClickedIndex] = useState(0);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className={styles.ListGroup}>
        {items.map((item, index) => (
          <ListGroupItem
            key={index}
            text={item}
            highlighted={lastClickedIndex === index}
            onClickHandler={() => {
              setLastClickedIndex(index);
              onSelectItem(item);
            }}
          />
        ))}
      </ul>
    </>
  );
}
