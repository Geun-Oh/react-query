import "./App.css";
import AddProfile from "./components/AddProfile";
import ProfileCard from "./components/profileCard";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { PutDataProps, userProfile } from "./store/mutateState";

function App() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery(["profileData"], () =>
    axios.get("http://localhost:3000")
  );

  const mutateFn: (props: userProfile) => void = (props: userProfile) => {
    const match = data?.data.userprofile.filter(
      ({ name }: { name: string }) => name === props.name
    );
    return match.length === 1 ? putFn.mutate(props) : postFn.mutate(props);
  };

  const postFn = useMutation(
    (postData: userProfile) => axios.post("http://localhost:3000", postData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["profileData"] });
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );

  const putFn = useMutation(
    (putData: PutDataProps) => axios.put("http://localhost:3000", putData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["profileData"] });
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error!!</span>;
  }

  return (
    <>
      <header>
        <h1>💙 웹 심화 스터디 프로필 만들기 💙</h1>
      </header>
      <main>
        <section className="profile_menu">
          <AddProfile mutateFn={mutateFn} />
        </section>
        <section className="profile">
          <h2>프로필 목록</h2>
          <section>
            {data?.data.userprofile?.map(
              ({ name, nickname, mbti, birth, instagram }: userProfile) => (
                <ProfileCard
                  name={name}
                  nickname={nickname}
                  mbti={mbti}
                  birth={birth}
                  instagram={instagram}
                  key={name}
                />
              )
            )}
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
