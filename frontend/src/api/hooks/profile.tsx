export const useQueryProfile = () => {
  const baseURL = "http://localhost:3000";

  // QueryClient를 가져와주세요!

  const GET = () => "get 함수를 작성해주세요!"; // 프로필 조회

  const POST = () => "post 함수를 작성해주세요!"; // 프로필 추가

  const PUT = () => "put 함수를 작성해주세요!"; // 프로필 수정

  const DELETE = () => "delete 함수를 작성해주세요!"; // 프로필 삭제

  return {
    GET,
    POST,
    PUT,
    DELETE,
  };
};
