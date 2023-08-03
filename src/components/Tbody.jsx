const objToString = (obj) => {
  let toString = "";
  for (const k of Object.keys(obj)) {
    if (typeof obj[k] == "string" || typeof obj[k] == "number") {
      toString += ", " + obj[k];
    } else {
      toString += ", " + objToString(obj[k]);
    }
  }
  return toString.replace(", ", "");
};

export const Tbody = (props) => {
  let body_table = props.data.map((obj, item1) => {
    let finded = objToString(obj).toLowerCase().includes(props.filter.toLowerCase())
    return ( finded ?
      (<tr key={item1}>
        {Object.keys(obj).map((k, item) => {
          const isString = typeof obj[k] == "string";
          const isNumber = typeof obj[k] == "number";
          return (isString || isNumber ? (
            <td key={item}>{obj[k]}</td>
          ) : (
            <td key={item}>{objToString(obj[k])}</td>
          ));
        })}
      </tr>):null
    );
  });
  return <tbody>{body_table}</tbody>;
};
