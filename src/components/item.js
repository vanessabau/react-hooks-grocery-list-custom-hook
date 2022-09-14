import React from "react";
import "./item.scss";

function item(props) {
  return (
    <div className="item-style">
      {props.editable ? (
        <input
          type="text"
          onKeyPress={(e) => {
            props.onKeyPress(e, props.index);
          }}
          defaultValue={props.item.name}
        ></input>
      ) : (
        <h3 onDoubleClick={props.onDoubleClick}>Name: {props.item.name}</h3>
      )}

      <h3>Calorie: {props.item.calorie}</h3>
      <button name={props.item.name} onClick={props.onClick}>
        Remove Item
      </button>
    </div>
  );
}

export default item;
