import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import { tableHeaderAndContent } from "./utils";
import Input from "./component/Input";

const Example = () => {
  const [header, setHeader] = useState([]);
  const [content, setContent] = useState([]);
  const [error, setError] = useState(false);

  const onchange = (text) => {
    setError(false);
    const value = text.target.value;

    if (!text.target.value.trim()) {
      setHeader([]);
      setContent([]);
    }

    if (isNaN(value)) {
      setError(true);
    }
    const { result, newArr } = tableHeaderAndContent(value);
    setHeader(result);
    setContent(newArr);
  };

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <Input error={error} onchange={onchange} />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            {header.map((th, index) => (
              <th key={index}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.map((el, index) => (
            <tr key={index}>
              <th scope="row">{header[index]}</th>
              {el.map((e, index) => (
                <td key={index}>{e}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Example;
