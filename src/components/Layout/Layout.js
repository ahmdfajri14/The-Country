import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Brightness6Rounded } from "@material-ui/icons";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "The Country" }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };
 
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <img src="https://img.icons8.com/doodle/48/000000/europe.png"/>
        <div>
        <p className={styles.firstText}>The <span className={styles.secondaryText}>Country</span></p>
        </div>
        <button className={styles.themeSwitcher} onClick={switchTheme}>
          <Brightness6Rounded />
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <Link href="/about">
        <footer className={styles.footer}>about <p className={styles.firstText}>The <span className={styles.secondaryText}>Country</span></p></footer>
      </Link>
    </div>
  );
};

export default Layout;