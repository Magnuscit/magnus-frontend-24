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
  const { removeToken, setAcessToken } = useAuth((state) => state);

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

    const accessToken =
      user?.access_token || localStorage.getItem("access_token");
    if (accessToken) {
      localStorage.setItem("access_token", accessToken);
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/json",
            },
          },
        )
        .then((res) => {
          setAcessToken({ ...res.data, access_token: accessToken });
        })
        .catch(() => {
          localStorage.removeItem("access_token");
        });

      axios
        .post(`${API_URL}/user/login`, {
          token: accessToken,
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        })
        .catch(() => {
          localStorage.removeItem("access_token");
        });
    }
  }, [user, setAcessToken]);

  const logOut = () => {
    axios.get(`${API_URL}/user/logout`);
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
