import React from "react";
import Borad from "./Borad";
import items from "./mockup.json";

const App = () => {
  return (
    <div>
      <Borad items={items} />
    </div>
  );
};

export default App;
