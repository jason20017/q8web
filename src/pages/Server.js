import React from "react";
import Tree from "../components/TreeComponent";
import TreeButton from "../components/TreeButton";

const Server = () => {
  return (
    <div>
      this is Server page
      <div className="tree_container">
        <div className="tree_button">
          <TreeButton />
        </div>
        <div className="tree_list">
          <Tree />
        </div>
      </div>
    </div>
  );
};

export default Server;
