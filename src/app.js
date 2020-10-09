import React, { useState } from "react";
import Table from "./component/table/table";
import { tableHeaderAndContent } from "./utils";
import Input from "./component/input/Input";

const App = () => {
  const [header, setHeader] = useState([]);
  const [content, setContent] = useState([]);
  const [error, setError] = useState(false);

  const onTextInputChange = (text) => {
    setError(false);
    const value = text.target.value;

    if (!text.target.value.trim()) {
      setHeader([]);
      setContent([]);
    }

    if (isNaN(value)) {
      setError(true);
    }
    const { rowAndColumnheader, tableContent } = tableHeaderAndContent(value);
    setHeader(rowAndColumnheader);
    setContent(tableContent);
  };

  const renderHeader = header.map((th, index) => <th key={index}>{th}</th>);

  const renderBody = content.map((el, index) => (
    <tr key={index}>
      <th scope="row">{header[index]}</th>
      {el.map((e, index) => (
        <td key={index}>{e}</td>
      ))}
    </tr>
  ));

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <Input error={error} onchange={onTextInputChange} />
      <Table header={renderHeader} body={renderBody} />
    </div>
  );
};

export default App;
