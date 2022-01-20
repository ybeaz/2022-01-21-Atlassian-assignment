import "./styles.css";
import fetchData from "./data";
import { useEffect, useState } from "react";

import { ChildCompProto } from "./ChildCompProto";

export default function App() {
  const [dataState, setDataState] = useState([]);
  const [visibleState, setVisibleState] = useState(true);

  useEffect(() => {
    fetchData().then((res) => {
      const dataNext = res.map((item) => ({ ...item, visibleChildren: true }));

      setDataState(dataNext);
    });
  }, []);

  const handleEvents = (event, id) => {
    console.info("We clicked", { id });
    setVisibleState(!visibleState);
  };

  const getRenderedTree = (arrMain) => {
    return arrMain.map((item) => {
      return (
        <div className="_mainList" key={item.id}>
          <button onClick={(event) => handleEvents(event, item.id)}>▼</button>
          <div>{item.name}</div>
          {item.children && item.visibleChildren && (
            <ul className="_child">
              <ChildCompProto itemChildren={item.children} />
              {/* {childCompProto(item.children)} */}
            </ul>
          )}
        </div>
      );
    });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {getRenderedTree(dataState)}
    </div>
  );
}
