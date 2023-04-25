import { useState } from "react";
import "./App.css";
import AddProfile from "./components/AddProfile";
import ProfileCard, { ProfileCardProps } from "./components/profileCard";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const queryClient = useQueryClient();
  const [profileData, setProfileData] = useState<ProfileCardProps[]>();

  const getFn = useQuery(
    ["profileData"],
    () => axios.get("http://localhost:3000"),
    {
      onSuccess: ({ data }) => {
        console.log(data);
        setProfileData(data?.userprofile);
      },
    }
  );

  const postFn = useMutation(
    (postData: ProfileCardProps) =>
      axios.post("http://localhost:3000", postData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["profileData"] });
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );

  return (
    <>
      <header>
        <h1>💙 웹 심화 스터디 프로필 만들기 💙</h1>
      </header>
      <main>
        <section className="profile_menu">
          <AddProfile postFn={postFn} />
        </section>
        <section className="profile">
          <h2>프로필 목록</h2>
          <section>
            {profileData?.map(
              ({
                id,
                name,
                nickname,
                mbti,
                birth,
                instagram,
              }: ProfileCardProps) => (
                <ProfileCard
                  id={id}
                  name={name}
                  nickname={nickname}
                  mbti={mbti}
                  birth={birth}
                  instagram={instagram}
                  key={id}
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
