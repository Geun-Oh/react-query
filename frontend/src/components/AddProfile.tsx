import { defaultState, mutateState, userProfile } from "../store/mutateState";
import { useRecoilValue, useSetRecoilState } from "recoil";

const AddProfile = ({
  mutateFn,
}: {
  mutateFn: (props: userProfile) => void;
}) => {
  const { name, nickname, mbti, birth, instagram } =
    useRecoilValue<userProfile>(mutateState);
  const setMutateState = useSetRecoilState<userProfile>(mutateState);

  const handleMutateState = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMutateState((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));

  return (
    <section className="profile_add">
      <h2>프로필 추가/수정</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutateFn({ name, nickname, mbti, birth, instagram });
          setMutateState(defaultState);
        }}
      >
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => handleMutateState(e)}
        />
        <br />

        <label htmlFor="nickname">별명</label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          value={nickname}
          onChange={(e) => handleMutateState(e)}
        />
        <br />

        <label htmlFor="mbti">MBTI</label>
        <input
          type="text"
          id="mbti"
          name="mbti"
          value={mbti}
          onChange={(e) => handleMutateState(e)}
        />
        <br />

        <label htmlFor="birthday">생일</label>
        <input
          type="text"
          id="birth"
          name="birth"
          value={birth}
          onChange={(e) => handleMutateState(e)}
        />
        <br />

        <label htmlFor="instagram">인스타그램</label>
        <input
          type="text"
          id="instagram"
          name="instagram"
          value={instagram}
          onChange={(e) => handleMutateState(e)}
        />
        <br />

        <input id="profile_add_btn" type="submit" value="추가/수정" />
      </form>
    </section>
  );
};

export default AddProfile;
