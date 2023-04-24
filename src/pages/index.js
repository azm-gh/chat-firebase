
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Auth } from "./Components/Auth";
import { Chat } from "./Components/Chat";
import { useEffect, useState, useRef } from "react";
import Cookies from "universal-cookie";
import { isAbsoluteUrl } from "next/dist/shared/lib/utils";
const cookies = new Cookies();

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const roomInputRef = useRef(null);
  const [isAuth, setIsAuth] = useState();
  const [room, setRoom] = useState(null); // is room empty
  useEffect(() => {
    setIsAuth(cookies.get("auth-token"));
  }, [])

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth = {setIsAuth} />
      </div>
    );
  }
  return (
    <div>
      {room ? (
        <div> <Chat /> </div>
      ) : (
        <div className={styles.room}>
          <label>
            <input ref={roomInputRef} />
          </label>
          <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
        </div>
      )}
    </div>
  );
}
