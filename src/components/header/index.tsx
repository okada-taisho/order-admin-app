import Link from "next/link";
import LogoutBtn from "../button/Logout";

const Header = () => {
  return (
    <div className="fixed flex justify-between px-8 w-screen h-16 bg-blue-500 items-center z-50">
      <h1 className="font-bold text-2xl text-white">管理者App</h1>
      <div className="flex gap-x-4">
        <nav>
          <ul className="flex gap-x-4 ">
            <li className="text-white p-4">
              <Link href={"/"}>注文履歴</Link>
            </li>
            <li className="text-white p-4">
              <Link href={"/menu"}>メニュー</Link>
            </li>
          </ul>
        </nav>
        <LogoutBtn />
      </div>
    </div>
  );
};

export default Header;
