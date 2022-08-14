import React from "react";
import { useSelector } from "react-redux";
import AddGroup from "../images/add-group.svg";
import AddTerminal from "../images/add-terminal.svg";
import AddServer from "../images/add-server.svg";
import AddApp from "../images/add-app.svg";

const TreeButton = () => {
  const CurrentPage = useSelector((state) => state.page);
  return (
    <div className="treeButton">
      <button className="btn_All">All</button>
      <button className="btn_Default">Default</button>
      <img className="btn_Add" src={AddGroup} />
      {CurrentPage === "Terminal" && (
        <img className="btn_Add" src={AddTerminal} alt="" />
      )}
      {CurrentPage === "Server" && (
        <img className="btn_Add" src={AddServer} alt="" />
      )}
      {CurrentPage === "App" && <img className="btn_Add" src={AddApp} alt="" />}
    </div>
  );
};

export default TreeButton;
