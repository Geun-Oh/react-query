import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  DeleteDataProps,
  PutDataProps,
  userProfile,
} from "../../store/mutateState";

export const useQueryProfile = () => {
  const queryClient = useQueryClient();
  const baseURL = "http://localhost:3000";

  const GET = useQuery(["profileData"], () => axios.get(baseURL));

  const POST = useMutation(
    (postData: userProfile) => axios.post(baseURL, postData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["profileData"] });
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );

  const PUT = useMutation(
    (putData: PutDataProps) => axios.put(baseURL, putData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["profileData"] });
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );

  const DELETE = useMutation(
    (deleteData: DeleteDataProps) =>
      axios.delete(baseURL, { data: deleteData }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["profileData"] });
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );

  return {
    GET,
    POST,
    PUT,
    DELETE,
  };
};
