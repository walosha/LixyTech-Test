import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table as ReactstrapTable } from "reactstrap";

const Table = ({ header, body }) => {
  return (
    <ReactstrapTable striped>
      <thead>
        <tr>
          <th>#</th>
          {header}
        </tr>
      </thead>
      <tbody>{body}</tbody>
    </ReactstrapTable>
  );
};

export default Table;
