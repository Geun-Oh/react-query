import axios from "axios";

const Axios = () => {
  const data = axios.get("http://localhost:3000");
  console.log(data);
  return <>axios</>;
};

export default Axios;
