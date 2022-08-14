import React from "react";
import Tree from "../components/TreeComponent";
import TreeButton from "../components/TreeButton";

const Terimnal = ({ data }) => {
  return (
    <div>
      this is Terimnal page
      <div className="tree_container">
        <div className="tree_button">
          <TreeButton />
        </div>
        <div className="tree_list">
          <Tree data={data} />
        </div>
      </div>
    </div>
  );
};

export default Terimnal;
