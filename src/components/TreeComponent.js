import React, { useState } from "react";
import EditIcon from "../images/action-edit.svg";
import DeleteIcon from "../images/action-delete.svg";
import checkEdit from "../images/check-mark.png";
import data from "../TestData/data";

const TreeComponent = ({ data }) => {
  const [expand, setExpand] = useState(true);
  const [edit, setEdit] = useState(false);
  const [showObject, setShowObject] = useState(data);
  //資料夾 icon 開 & 關
  const changeFolder = () => {
    if (expand) {
      return data.icon;
    } else {
      return data.iconClose;
    }
  };

  const Editable = (e) => {
    data.name = e.target.value;
  };

  const DeleteItem = () => {
    setShowObject(null);
  };

  return (
    <div>
      {showObject && (
        <span onClick={() => setExpand(!expand)} className="tree_item">
          <img src={changeFolder()} className="icon" alt="folder" />
          <div style={{ display: !edit ? "inline" : "none" }}>
            {showObject ? data.name : null}
          </div>
          <input
            style={{ display: edit ? "inline" : "none" }}
            type="text"
            defaultValue={data.name}
            onChange={Editable}
          />

          <img
            src={checkEdit}
            className="checkEdit"
            style={{ display: edit ? "inline" : "none" }}
            onClick={() => setEdit(!edit)}
            alt="check"
          />
          <img
            src={EditIcon}
            className="edit"
            onClick={() => setEdit(!edit)}
            alt="edit"
          />
          <img
            src={DeleteIcon}
            className="icon"
            onClick={() => DeleteItem(showObject)}
            alt="delete"
          />
        </span>
      )}
      <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
        {showObject?.items.map((item) => (
          <TreeComponent key={item.name} data={item} />
        ))}
      </div>
    </div>
  );
};

export default TreeComponent;
