export interface ProfileCardProps {
  profile: userProfile;
  handleModify: (data: userProfile) => void;
  handleDelete: (data: userProfile) => void;
}

export interface userProfile {
  id?: number;
  name: string;
  nickname: string;
  mbti: string;
  birth: string;
  instagram: string;
}

function ProfileCard({ profile, handleModify, handleDelete }: ProfileCardProps) {
  const { name, nickname, mbti, birth, instagram } = profile;

  return (
    <article className='profile_card'>
      <button
        type='button'
        onClick={() => {
          handleModify(profile);
        }}
      >
        수정
      </button>
      {/* <button type='button' onClick={handleDelete(profile)}>
        삭제
      </button> */}
      <ul>
        <li>이름 : {name}</li>
        <li>별명 : {nickname}</li>
        <li>MBTI : {mbti}</li>
        <li>생일 : {birth}</li>
        <li>인스타그램 : {instagram}</li>
      </ul>
    </article>
  );
}

export default ProfileCard;
