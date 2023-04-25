import './App.css';
import AddProfile from './components/AddProfile';
import ProfileCard, { ProfileCardProps, userProfile } from './components/ProfileCard';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

function App() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery(['profileData'], () =>
    axios.get('http://localhost:3000'),
  );

  const postFn = useMutation(
    (postData: userProfile) => axios.post('http://localhost:3000', postData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['profileData'] });
      },
      onError: (e) => {
        console.log(e);
      },
    },
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
        <section className='profile_menu'>
          <AddProfile postFn={postFn} />
        </section>
        <section className='profile'>
          <h2>프로필 목록</h2>
          <section>
            {data?.data.userprofile?.map(
              ({ id, name, nickname, mbti, birth, instagram }: userProfile) => (
                <ProfileCard
                  name={name}
                  nickname={nickname}
                  mbti={mbti}
                  birth={birth}
                  instagram={instagram}
                  key={id}
                  handleModify={}
                  handleDelete={}
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
