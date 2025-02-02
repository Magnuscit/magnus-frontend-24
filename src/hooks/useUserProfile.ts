import { API_URL } from "@/libs/constants";
import { useAuth } from "@/store";
import {
  googleLogout,
  TokenResponse,
  useGoogleLogin,
} from "@react-oauth/google";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export const useProfileButton = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [user, setUser] = useState<TokenResponse>();
  const { removeToken, setAcessToken, auth } = useAuth((state) => state);

  const menuRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== menuRef.current && e.target !== imgRef.current) {
        setOpen(false);
      }
    });

    const fetch = async () => {
      const accessToken = user?.access_token || auth?.access_token;
      if (accessToken) {
        localStorage.setItem("access_token", accessToken);
        try {
          const response = await axios.post(`${API_URL}/user/login`, {
            token: accessToken,
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/json",
            },
          });
          const res = response.data;
          setAcessToken({ ...res.data, jwt: res.jwt });
        } catch (e) {
          removeToken();
        }
      }
    };

    if (!auth) fetch();
  }, [user, setAcessToken]);

  const logOut = () => {
    googleLogout();
    localStorage.removeItem("access_token");
    removeToken();
  };

  return {
    isOpen,
    setOpen,
    login,
    logOut,
    imgRef,
    menuRef,
  };
};
