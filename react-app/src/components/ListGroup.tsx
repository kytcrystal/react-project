import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem : (item:string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {

  // State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // <> automatically tells React to use Fragment
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }} // event handler
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
