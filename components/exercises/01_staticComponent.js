import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
const Demo = () => {
  return (
    <table className="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>No lectures</th>
        <th>No practicals</th>
      </tr>
    </thead>
    <tbody >
      <tr>
        <td>DevOps</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Enterprise Web Dev</td>
        <td>3</td>
        <td>3</td>
      </tr>
    </tbody >
  </table>
  );
};

export default Demo;
