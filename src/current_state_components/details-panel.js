import React from "react";
import TableContext from "./table-context";

const DetailsPanel = () => {
  const Node = React.useContext(TableContext);
  return (
    <>
      <br></br>
      <h3>Details about Selected Node: {Node.name}</h3>
      <p>Task: {Node.currenttask}</p>
      <p><b>More Details:</b></p>
      <p>
        {Node.steps}
      </p>
    </>
  );
};
export default DetailsPanel;
