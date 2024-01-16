import Link from "next/link";
export default function NavDesktop() {
  return (
    <div className="w-11/12 mx-auto desktop_nav_container">
      <div className="absolute mt-8 w-11/12 mx-auto z-10 bg-white bg-opacity-80 flex justify-between items-center px-8 py-3 rounded-2xl">
        <div className="font-bold text-secondary">
          <Link href="/">LOGO</Link>
        </div>
        <div>Page Links Here</div>
        <div>Call Us 086-1777288</div>
      </div>
    </div>
  );
}
