import { type MouseEvent } from "react";

function ListGroup() {
  let items: string[] = [];
  items = ["New York", "San Francisco", "Tokyo", "London"];

  // Event Handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  }

  return (
    // <> automatically tells React to use Fragment
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
