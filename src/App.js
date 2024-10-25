import { useState } from "react";
import "./App.css";
import { Dashboard } from "./components/dashboard";

function App() {
  const [isAlertVisible, setIsAlertVisible  ] = useState(false);

  return (
    <div className={`${isAlertVisible && 'app-sapce'} App`}>
      <Dashboard
        isAlertVisible={isAlertVisible}
        setIsAlertVisible={setIsAlertVisible}
      />
    </div>
  );
}

export default App;
