import React from "react";
import ReactDOM from "react-dom";
import Table from "./current_state_components/table";
import Sidebar from "./current_state_components/sidebar";
import TableContext from "./current_state_components/table-context";
import "./current_state_components/styles.css"; 

function TableDemo() {
  const Nodes = [
    {
      id: 1,
      name: "Download Datasets",
      currenttask: "Data Preparation",
      steps: "The next step is to 'Tokenize datasets' and the previous step was 'Setuup RTG and other libs'"
    },
    {
      id: 2,
      name: "Error",
      currenttask: "Missing Data",
      steps: "placeholder text of steps before and after"
      
    },
    {
      id: 3,
      name: "Python",
      currenttask: "Machine Translation",
      steps: "placeholder text of steps before and after, details about task"
    }
  ];
  const [Node, handleNodeChange] = React.useState(null);

  return (
    <div className="CurrentStateTable">
      <TableContext.Provider value={Node}>
        <Table Nodes={Nodes} onNodeChange={handleNodeChange} />
        {Node && <Sidebar />}
      </TableContext.Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TableDemo/>, rootElement);

export default TableDemo;
 