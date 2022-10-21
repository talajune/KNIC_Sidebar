import React from "react";

const TableRow = ({ Node, onNodeChange, selected }) => {
  return (
    <tr
      className={selected ? "selected" : undefined}
      key={Node.id}
      onClick={() => {
        onNodeChange(Node);
      }}
    >
      <td>{Node.id}</td>
      <td>{Node.name}</td>
      <td>{Node.currenttask}</td>
    </tr>
  );
};
export default TableRow;