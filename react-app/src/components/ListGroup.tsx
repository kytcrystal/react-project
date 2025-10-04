import { useState } from "react";

function ListGroup() {
  let items: string[] = [];
  items = ["New York", "San Francisco", "Tokyo", "London"];

  // State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // <> automatically tells React to use Fragment
    <>
      <h1>List</h1>
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
