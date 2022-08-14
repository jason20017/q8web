import React from "react";
import { useSelector } from "react-redux";
import Terimnal from "./Terimnal";
import Server from "./Server";

const Terminal = ({ data }) => {
  const CurrentPage = useSelector((state) => state.page);
  return (
    <div>
      {CurrentPage === "Terminal" && <Terimnal data={data} />}
      {CurrentPage === "Server" && <Server data={data} />}
      {CurrentPage === "App" && <div>this is App pages</div>}
      {CurrentPage === "Log" && <div>this is Log pages</div>}
      {CurrentPage === "Settings" && <div>this is Settings pages</div>}
    </div>
  );
};

export default Terminal;
