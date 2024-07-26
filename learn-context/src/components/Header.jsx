import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

// eslint-disable-next-line react/prop-types
export default function Header() {
  const { userData, isOpen, setIsOpen, themeStyle, darkMode, setDarkMode } =
    useContext(AppContext);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="header"
      style={{
        ...themeStyle,
        display: "flex",
        justifyContent: "right",
        padding: "10px",
        gridColumn: isOpen ? "2 / 4" : "1 / 4",
        gridRow: "1 / 2",
      }}
    >
      <div>
        Hello {userData?.first_name} {userData?.last_name}
      </div>
      <p style={{ cursor: "pointer" }} onClick={toggleSidebar}>
        My profile
      </p>
      <input type="checkbox" onChange={toggleTheme} />
    </div>
  );
}
