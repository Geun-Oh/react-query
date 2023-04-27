import "./App.css";
import AddProfile from "./components/AddProfile";
import ProfileCard from "./components/profileCard";
import { userProfile } from "./store/mutateState";

function App() {
  // get, post, put 쿼리를 가져와주세요!
  // get 쿼리에서 필요한 데이터를 구조분해 할당으로 가져와주세요!

  // 추가 수정 로직을 분기해주는 함수입니다! 여기 있는 에러를 모두 지워주세요!
  const mutateFn: (props: userProfile) => void = (props: userProfile) => {
    const match = data.data.userprofile.filter(
      ({ name }: { name: string }) => name === props.name
    );
    return match.length === 1 ? PUT.mutate(props) : POST.mutate(props);
  };

  // 로딩 중일 때 반환할 컴포넌트를 지정해주세요!
  // 에러 발생 시 반환할 컴포넌트를 지정해주세요!

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
            {data.data.userprofile.map(
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
