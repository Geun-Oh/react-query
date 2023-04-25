import { useState } from 'react';
import { UseMutationResult } from '@tanstack/react-query';
import { ProfileCardProps } from './ProfileCard';

const AddProfile = ({ postFn }: { postFn: UseMutationResult }) => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [mbti, setMbti] = useState('');
  const [birthday, setBirthday] = useState('');
  const [instagram, setInstagram] = useState('');

  return (
    <section className='profile_add'>
      <h2>프로필 추가</h2>
      <form onSubmit={() => postFn({ name, nickname, mbti, birthday, instagram })}>
        <label htmlFor='name'>이름</label>
        <input
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />

        <label htmlFor='nickname'>별명</label>
        <input
          type='text'
          id='nickname'
          name='nickname'
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
        />
        <br />

        <label htmlFor='mbti'>MBTI</label>
        <input
          type='text'
          id='mbti'
          name='mbti'
          value={mbti}
          onChange={(event) => setMbti(event.target.value)}
        />
        <br />

        <label htmlFor='birthday'>생일</label>
        <input
          type='text'
          id='birthday'
          name='birthday'
          value={birthday}
          onChange={(event) => setBirthday(event.target.value)}
        />
        <br />

        <label htmlFor='instagram'>인스타그램</label>
        <input
          type='text'
          id='instagram'
          name='instagram'
          value={instagram}
          onChange={(event) => setInstagram(event.target.value)}
        />
        <br />

        <input id='profile_add_btn' type='submit' value='추가' />
      </form>
    </section>
  );
};

export default AddProfile;
