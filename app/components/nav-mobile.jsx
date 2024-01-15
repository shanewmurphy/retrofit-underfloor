import MobileSlideNav from "./mobile-slide-nav";
import Link from "next/link";
export default function NavBarMobile() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="absolute w-11/12 z-10 flex bg-white mt-12 px-3 py-1 justify-between items-center rounded-lg mobile-nav">
        <div className="font-bold text-xl">
          <Link href="/">Logo</Link>
        </div>
        <div>
          <div className="text-black p-2">
            <MobileSlideNav />
          </div>
        </div>
      </div>
    </div>
  );
}
