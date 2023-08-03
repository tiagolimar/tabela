import { useEffect, useState } from "react";
import { Thead } from "./Thead";
import { Tbody } from "./Tbody";

export const Table = (props) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(props.url);
      const users = await response.json();
      setData(users);
    };
    fetchData();
  }, [props.url]);

  return (
    data.length > 0 ? (
      <div className="container">
        <h1>Lista de Usuários</h1>
        <table className="table table-striped border">
          <Thead data={data} />
          <Tbody data={data} />
        </table>
      </div>
    ): null
  )
};
