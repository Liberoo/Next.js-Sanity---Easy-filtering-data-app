import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 bg-black-100 border-black-200 py-7 text-white">
      <div className="flex-between nx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image width={55} height={40} src="/jsm-logo.svg" alt="Logo"></Image>
        </Link>
        <Image
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="Hamburger Menu"
          className="block md:hidden"
        ></Image>
        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link href="https://kamiljamroz.pl" target="_blank">
              KJ Website
            </Link>
          </li>
          <li className="body-text ">
            <Link href="https://kamiljamroz.pl" target="_blank">
              Front
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
