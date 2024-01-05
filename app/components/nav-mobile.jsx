export default function NavBarMobile() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="absolute w-11/12 z-10 flex bg-white mt-4 px-3 justify-between items-center rounded-lg mobile-nav">
        <div className="font-bold text-xl">Logo</div>
        <div>
          <div className="text-black p-2">Menu</div>
        </div>
      </div>
    </div>
  );
}
