export interface ProfileCardProps {
  id?: number;
  name: string;
  nickname: string;
  mbti: string;
  birth: string;
  instagram: string;
}

function ProfileCard({ name, nickname, mbti, birth, instagram }: ProfileCardProps) {
  return (
    <article className='profile_card'>
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
