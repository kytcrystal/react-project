import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>This is an alert message</Alert>}
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>

    </div>
  )
}

export default App;
