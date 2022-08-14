import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pages } from "../actions";
import MenuTerminal from "../images/menu-terminal.svg";
import MenuServer from "../images/menu-app-server.svg";
import MenuApp from "../images/menu-app.svg";
import MenuLog from "../images/menu-log.svg";
import MenuSettings from "../images/menu-setting.svg";

const SideBar = () => {
  //redux - useSelector & dispatch
  const CurrentPage = useSelector((state) => state.page);
  const dispatch = useDispatch();

  //hook - page change
  const [page, setPage] = useState("");

  //function - page change
  const ChangePages = (pageName) => {
    setPage(pageName);
    dispatch(pages(pageName));
  };
  console.log(page);
  return (
    <div className="sideBar-container">
      <div onClick={() => ChangePages("Terminal")} className="side-button">
        <img src={MenuTerminal} alt="" />
        <span>TERMINALS</span>
      </div>
      <div onClick={() => ChangePages("Server")} className="side-button">
        <img src={MenuServer} alt="" />
        <span>APP SERVERS</span>
      </div>
      <div onClick={() => ChangePages("App")} className="side-button">
        <img src={MenuApp} alt="" />
        <span>APP</span>
      </div>
      <div onClick={() => ChangePages("Log")} className="side-button">
        <img src={MenuLog} alt="" />
        <span>LOG</span>
      </div>
      <div onClick={() => ChangePages("Settings")} className="side-button">
        <img src={MenuSettings} alt="" />
        <span>SETTINGS</span>
      </div>
      <div className="test">Right now in {CurrentPage} </div>
    </div>
  );
};

export default SideBar;
