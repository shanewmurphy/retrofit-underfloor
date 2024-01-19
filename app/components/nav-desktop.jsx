import Link from "next/link";
export default function NavDesktop() {
  return (
    <div className="w-11/12 mx-auto desktop_nav_container">
      <div className="absolute mt-8 w-11/12 mx-auto z-10 bg-white bg-opacity-80 flex justify-between items-center px-8 py-3 rounded-2xl">
        <div className="font-bold text-secondary">
          <Link href="/">
            <LogoB />
          </Link>
        </div>
        <div>
          <ul className="inline-flex">
            <li className="pr-4">
              <Link href="/" className="cursor-pointer">
                <span className="text-base font-semibold relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                  Home
                </span>
              </Link>
            </li>
            <li className="pr-4">
              <Link className="cursor-pointer" href="installation">
                <span className="text-base font-semibold relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                  Installation
                </span>
              </Link>
            </li>
            <li className="pr-4">
              <Link href="benefits" className="cursor-pointer">
                <span className="text-base font-semibold relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                  Benefits
                </span>
              </Link>
            </li>
            <li className="pr-4">
              <Link href="about-us" className="cursor-pointer">
                <span className="text-base font-semibold relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                  About Us
                </span>
              </Link>
            </li>
            <li className="pr-4">
              <Link href="about-us" className="cursor-pointer">
                <span className="text-base font-semibold relative after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                  Conatct Us
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="font-semibold">Call Us 087-7618255</div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <svg
      width="60"
      height="27"
      viewBox="0 0 60 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.4496 16.8233C33.2362 19.1122 35.1372 21.3502 37.4007 23.1877C39.5878 24.9679 42.131 26.3603 44.9794 26.6083C50.0658 27.0533 55.1204 24.1286 57.5301 19.6844C59.9906 15.1511 59.5773 9.39716 56.4365 5.2899C53.3974 1.31615 48.0058 -0.947294 43.0656 0.381527C40.5797 1.04912 38.4052 2.5496 36.5232 4.25355C34.565 6.02743 32.8738 8.06834 31.2461 10.1411C29.7329 12.0675 28.2706 14.0321 26.7637 15.9586C25.1361 18.0377 23.4194 20.0659 21.423 21.8016C19.5792 23.4038 17.4302 24.7517 15.0014 25.2159C12.6617 25.6609 10.0931 25.1841 7.97585 24.1286C5.85864 23.0732 4.08476 21.4138 2.89581 19.3729C1.66236 17.2493 1.12193 14.7951 1.30631 12.3536C1.67508 7.52792 5.08932 3.27441 9.70523 1.83751C12.1594 1.07455 14.798 1.08726 17.1759 2.10454C19.789 3.22991 21.9507 5.21996 23.8518 7.29267C24.8118 8.34174 25.7147 9.43531 26.5984 10.548C26.8146 10.815 27.2724 10.7705 27.4949 10.548C27.7619 10.2809 27.7111 9.91852 27.4949 9.65149C25.6765 7.36261 23.7564 5.10552 21.4548 3.27441C19.2422 1.51325 16.6609 0.171713 13.7934 0.0254788C8.70066 -0.222483 3.75414 2.75306 1.45255 7.27359C0.289035 9.56247 -0.206889 12.182 0.0792207 14.7442C0.365331 17.2938 1.35718 19.6844 2.95939 21.6935C6.06209 25.5719 11.5618 27.6446 16.4002 26.1886C18.8798 25.4447 21.0479 23.9061 22.9362 22.164C24.8945 20.3583 26.5793 18.2856 28.2006 16.1811C29.6884 14.2547 31.1317 12.3218 32.6512 10.4144C34.2916 8.35445 36.021 6.32625 38.0365 4.62231C39.8866 3.05189 42.0483 1.76757 44.4771 1.37973C46.8232 1.01097 49.3855 1.57047 51.4709 2.68312C53.5563 3.79577 55.2857 5.50607 56.4174 7.57878C57.5936 9.73414 58.0641 12.2201 57.8098 14.6616C57.3075 19.4746 53.7534 23.6136 49.1184 24.9234C46.6325 25.6228 44.013 25.5147 41.6542 24.4211C39.0728 23.2258 36.9365 21.2485 35.0482 19.163C34.1072 18.1267 33.2171 17.0395 32.3524 15.9332C32.1426 15.6598 31.6785 15.7107 31.4559 15.9332C31.1825 16.1939 31.2398 16.5499 31.4496 16.8233Z"
        fill="#F45B36"
      />
    </svg>
  );
}
function LogoB() {
  return (
    <svg
      width="60"
      height="29"
      viewBox="0 0 60 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.3171 4.02727e-06C16.8355 4.24744e-06 19.3167 0.759279 21.6916 2.25673C23.525 3.41297 25.2974 5.00985 26.9582 7.00444C29.7377 10.3421 31.261 13.6496 31.3242 13.7889C31.3763 13.9019 36.8727 25.6096 45.293 25.6096C51.3421 25.6096 56.2636 20.6254 56.2636 14.4992C56.2636 8.3731 51.3421 3.38886 45.293 3.38886C40.2517 3.38886 36.271 7.53172 33.8188 11.0064L31.0959 9.03595C34.0047 4.91419 38.8296 6.17023e-06 45.2937 6.73534e-06C53.1889 7.42555e-06 59.6113 6.50505 59.6113 14.5C59.6113 22.4957 53.1889 29 45.2937 29C42.7835 29 40.3067 28.2407 37.9326 26.7425C36.1007 25.587 34.329 23.9902 32.666 21.9963C29.8828 18.6602 28.3513 15.3534 28.2881 15.2141C28.2331 15.0943 22.7686 3.38961 14.3178 3.38961C8.26874 3.38961 3.3472 8.37384 3.3472 14.5C3.3472 20.6262 8.26874 25.6104 14.3178 25.6104C19.2803 25.6104 23.2312 21.5526 25.6708 18.1487L28.3796 20.1403C25.4826 24.1822 20.6905 29 14.3178 29C6.42344 29 0.000223246 22.4957 0.000223945 14.5C-0.000519129 6.50504 6.4227 3.33712e-06 14.3171 4.02727e-06Z"
        fill="#F45B36"
      />
    </svg>
  );
}
