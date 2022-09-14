import React, { useState } from "react";
import "./App.scss";
import Item from "./components/item";
import useList from "./hooks/useList";

const initList = [
  { name: "tomato", calorie: 20 },
  { name: "rice", calorie: 200 },
  { name: "candy", calorie: 300 }
];
function App() {
  const items = useList(initList);
  const [editable, setEditable] = useState(false);

  const removeItemHandle = (e) => {
    items.removeItem(e.target.value);
  };

  const makeEditableHandle = () => {
    setEditable(true);
  };

  const keyPressHandle = (e, i) => {
    if (e.key === "Enter") {
      setEditable(!editable);
      items.saveItem(i, e.target.value);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {items.list.map((v, k) => {
          return (
            <Item
              item={v}
              key={`${k}-${v.name}`}
              onClick={removeItemHandle}
              editable={editable}
              onDoubleClick={makeEditableHandle}
              onKeyPress={keyPressHandle}
              index={k}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
