import "./App.css";
import AddProfile from "./components/AddProfile";
import ProfileCard from "./components/profileCard";
import { userProfile } from "./store/mutateState";
import { useQueryProfile } from "./api/hooks/profile";

function App() {
  const { GET, POST, PUT } = useQueryProfile();
  const { data, isLoading, isError } = GET;

  const mutateFn: (props: userProfile) => void = (props: userProfile) => {
    const match = data?.data.userprofile.filter(
      ({ name }: { name: string }) => name === props.name
    );
    return match.length === 1 ? PUT.mutate(props) : POST.mutate(props);
  };

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
            {data?.data.userprofile.map(
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
