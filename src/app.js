import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import { generatePrime } from "./utils";
import Input from "./component/Input";

const Example = () => {
  const result = generatePrime(4);
  let newArr = [];
  result.forEach((el) => {
    const res = result.map((num) => num * el);
    newArr.push(res);
  });

  const onchange = (text) => {
    console.log(text);
  };
  return (
    <Fragment>
      <Input onchange={onchange} />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            {result.map((th, index) => (
              <th key={index}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {newArr.map((el, index) => (
            <tr>
              <th scope="row">{result[index]}</th>
              {el.map((e) => (
                <td>{e}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default Example;
