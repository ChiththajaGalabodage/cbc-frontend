import "./header.css";
import UserData from "./userData";

export default function Header() {
  return (
    <div className="bg-[#FFFF00]">
      <a href="/">Home</a>
      <a href="/login">Login</a>
      <a href="/signup">signup</a>
      <a href="/products">Products</a>
    </div>
  );
}
