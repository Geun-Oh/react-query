import { atom } from "recoil";

export interface userProfile {
    name: string;
    nickname: string;
    mbti: string;
    birth: string;
    instagram: string;
  }

export interface PutDataProps {
    name: string;
    nickname?: string;
    mbti?: string;
    birth?: string;
    instagram?: string;
}

export interface DeleteDataProps {
    name: string;
}

const defaultState: userProfile = {
    name: "",
    nickname: "",
    mbti: "",
    birth: "",
    instagram: ""
}

export const mutateState = atom<userProfile>({
    key: "mutateState",
    default: defaultState
});