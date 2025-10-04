function ListGroup() {
  let items: string[] = [];
  items = ["New York", "San Francisco", "Tokyo", "London"];

  // can use a constant (message) or a function (getMessage) to conditionally render content
  // const message = items.length === 0 ? <p>No items found</p> : null
  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };

  return (
    // <> automatically tells React to use Fragment
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
