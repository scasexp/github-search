import React from "react";
import "./index.scss";

//Fuctional table view component

const TableApp = ({list} = props) => {

  return (
        <table >
            <thead>
              <tr>
                <th>Nombre Repositorio</th>
                <th>Url</th>
              </tr>
            </thead>
            <tbody>
            {list.map(s=>(
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.git_url}</td>
                </tr>
              )
            )}
            </tbody>
        </table>
  );
};

export default TableApp;
