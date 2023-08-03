import { useEffect, useState } from "react";
import { Thead } from "./Thead";
import { Tbody } from "./Tbody";

export const Table = (props) => {
  let [data, setData] = useState([]);
  let [strainer, setStrainer] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(props.url);
      const users = await response.json();
      setData(users);
    };
    fetchData();
  }, [props.url]);

  return data.length > 0 ? (
    <div className="container">
      <h1>Lista de Usuários</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Pesquisar"
        value={strainer}
        onChange={e=>{setStrainer(e.target.value)}}
      />
      <table className="table table-striped border mt-4">
        <Thead data={data} />
        <Tbody data={data} filter={strainer} />
      </table>
    </div>
  ) : null;
};
