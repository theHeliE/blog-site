import Image from "next/image";
import styles from "./page.module.css";
import Posts from "./Components/Posts";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./Components/HomePage"), {
  ssr: false,
});
export default function Home() {
  return (
    <main>
      <div>
        <HomePage />
      </div>
    </main>
  );
}
