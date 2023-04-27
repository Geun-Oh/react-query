import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Hello from "./components/Hello";
import Axios from "./components/Axios";

function App() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["getBackendData"],
    queryFn: () => axios.get("http://localhost:3000"),
    // retry: 1,
  });

  if (isLoading) {
    return <strong>Loading...</strong>;
  }

  if (isError) {
    return <strong>Error!!</strong>;
  }

  return (
    <>
      {data?.data.userprofile.map((x) => (
        <strong key={x.name}>{x.name}</strong>
      ))}
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      {/* <Axios />
      <Axios />
      <Axios />
      <Axios /> */}
    </>
  );
}

export default App;
