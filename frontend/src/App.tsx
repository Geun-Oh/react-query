import './App.css';
import AddProfile from './components/AddProfile';
import ProfileCard, { ProfileCardProps } from './components/ProfileCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function App() {
  const { data } = useQuery({
    queryKey: ['profileData'],
    queryFn: () => axios.get('http://localhost:3000'),
  });

  return (
    <>
      <header>
        <h1>💙 웹 심화 스터디 프로필 만들기 💙</h1>
      </header>
      <main>
        <section className='profile_menu'>
          <AddProfile />
        </section>
        <section className='profile'>
          <h2>프로필 목록</h2>
          <section>
            {data?.data.userprofile.map(
              ({ id, name, nickname, mbti, birth, instagram }: ProfileCardProps) => (
                <ProfileCard
                  id={id}
                  name={name}
                  nickname={nickname}
                  mbti={mbti}
                  birth={birth}
                  instagram={instagram}
                  key={id}
                />
              ),
            )}
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
