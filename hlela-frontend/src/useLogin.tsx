// src/useLogin.js
// src/hooks/useLogin.ts
import { useMutation } from "react-query";
import { loginApi } from "./api/api";
import { useState } from "react";

export const useLogin = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [loginData, setLoginData] = useState({} as any);
  const loginMutation = useMutation(
    (credentials: { email: string; password: string }) => {
      return loginApi(credentials);
    },
    {
      onSuccess: (data) => {
        setLoginData(data.data);
      },
    }
  );

  return [loginMutation, loginData];
};
