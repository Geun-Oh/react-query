import { useQuery } from "@tanstack/react-query";

const Hello = () => {
  const { data } = useQuery(["getBackendData"]);
  console.log(data);
  return <>유후~~</>;
};

export default Hello;
