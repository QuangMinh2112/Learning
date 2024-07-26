import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import UserInformation from "./UserInformation";

export default function Sidebar() {
  const { isOpen, themeStyle } = useContext(AppContext);
  if (!isOpen) return null;
  return (
    <div
      className="sidebar"
      style={{
        ...themeStyle,
        padding: 10,
        gridColumn: "1 / 2",
        gridRow: "1 / 3",
      }}
    >
      <h2>Sidebar</h2>
      <UserInformation />
    </div>
  );
}
