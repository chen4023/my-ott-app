import { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

export default function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    const Theme = localStorage.getItem("theme");
    if (Theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);
  const toggleTheme = () => {
    const htmlEl = document.querySelector("html");
    if (!htmlEl) return;

    if (isDarkMode) {
      htmlEl.classList.remove("dark");
      localStorage.removeItem("theme");
    } else {
      htmlEl.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? (
        <MdSunny size="25px" color="#FF1758" />
      ) : (
        <FaMoon size="20px" color="#FF1758" />
      )}
    </button>
  );
}
