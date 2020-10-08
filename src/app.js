import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import { generatePrime } from "./utils";
import Input from "./component/Input";

const Example = () => {
  const [header, setHeader] = useState([]);
  const [content, setContent] = useState([]);

  const onchange = (text) => {
    const value = text.target.value;
    if (isNaN(value) || !text.target.value.trim()) {
      console.log("not a number");
    }
    const result = generatePrime(value);
    let newArr = [];
    result.forEach((el) => {
      const res = result.map((num) => num * el);
      newArr.push(res);
    });
    setHeader(result);
    setContent(newArr);
  };

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <Input onchange={onchange} />
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
            <tr>
              <th scope="row">{header[index]}</th>
              {el.map((e) => (
                <td>{e}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Example;
