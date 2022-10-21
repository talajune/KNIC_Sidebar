import React from "react";
import TableRow from "./table-row";
import TableContext from "./table-context";

const isSelected = (currNode, selectedNode) =>
  selectedNode && selectedNode.id === currNode.id;

const Table = ({ Nodes, onNodeChange }) => {
  const selectedNode = React.useContext(TableContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Node ID</th>
          <th>Node Name</th>
          <th>Current Task</th>
        </tr>
      </thead>
      <tbody>
        {Nodes.map(currNode => (
          <TableRow
            selected={isSelected(currNode, selectedNode)}
            key={currNode.id}
            Node={currNode}
            onNodeChange={onNodeChange}
          />
        ))}
      </tbody>
    </table>
  );
};
export default Table;