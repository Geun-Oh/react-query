import "./App.css";
import ProfileCard, { ProfileCardProps } from "./components/profileCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const { data } = useQuery({
    queryKey: ["profileData"],
    queryFn: () => axios.get("http://localhost:3000"),
  });

  return (
    <>
      <header>
        <h1>💙 웹 심화 스터디 프로필 만들기 💙</h1>
      </header>
      <main>
        <nav>
          <button type="button" className="profile_add_btn">
            프로필 추가
          </button>
        </nav>
        <section>
          {data?.data.userprofile.map(
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
      </main>
    </>
  );
}

export default App;
