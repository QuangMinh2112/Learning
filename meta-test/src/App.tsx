import { useState } from "react";
import "./App.css";
import Action from "./components/Action";
import List from "./components/List";
import { item } from "./data";
import { removeItemMoved, leftMove } from "./utils/moveItemFunction";
import InputList from "./components/Test";

function App() {
  const [leftItem, setLeftItem] = useState<number[]>(item);
  const [rightItem, setRightItem] = useState<number[]>([]);
  const [checkedItem, setCheckedItem] = useState<number[]>([]);

  const leftMoveArr = leftMove(leftItem, checkedItem);

  const handleToggle = (item: number) => {
    const currentIndexItem = checkedItem?.indexOf(item);
    const newCheckedItem = [...checkedItem];

    if (currentIndexItem === -1) {
      newCheckedItem.push(item);
    } else {
      newCheckedItem.splice(currentIndexItem, 1);
    }

    setCheckedItem(newCheckedItem);
  };

  const moveRight = (): void => {
    setRightItem(rightItem.concat(leftMoveArr));
    setLeftItem(removeItemMoved(leftItem, leftMoveArr));
    setCheckedItem(removeItemMoved(checkedItem, leftMoveArr));
  };
  const moveLeft = (): void => {
    console.log("moveLeft");
  };
  console.log("checkedItem", checkedItem);
  console.log("leftItem", leftItem);

  return (
    <div className="app flex">
      <List data={leftItem} handleToggle={handleToggle} />
      <div className="actions">
        <Action moveRight={moveRight} moveLeft={moveLeft} />
      </div>
      <List data={rightItem} handleToggle={handleToggle} />
      <InputList />
    </div>
  );
}

export default App;
