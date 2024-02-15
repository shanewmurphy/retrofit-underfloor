import MobileSlideNav from "./mobile-slide-nav";
import Link from "next/link";
export default function NavBarMobile() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="absolute w-11/12 z-10 flex bg-white mt-8 px-3 py-1 justify-between items-center rounded-lg mobile-nav">
        <div className="font-bold text-xl">
          <Link href="/">
            <LogoNew />
          </Link>
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
function LogoC() {
  return (
    <svg
      width="75"
      height="36"
      viewBox="0 0 75 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0128 3.94382e-06C21.1814 4.22082e-06 24.3032 0.942552 27.2911 2.80146C29.5978 4.23679 31.8278 6.21912 33.9174 8.69517C37.4144 12.8384 39.3309 16.9443 39.4104 17.1173C39.4759 17.2576 46.3913 31.7913 56.9853 31.7913C64.596 31.7913 70.7881 25.6039 70.7881 17.9991C70.7881 10.3942 64.596 4.20686 56.9853 4.20686C50.6426 4.20686 45.6343 9.34972 42.549 13.6632L39.1231 11.217C42.783 6.10037 48.8534 6.63998e-06 56.9862 7.35098e-06C66.9195 8.21938e-06 75 8.07523 75 18C75 27.9257 66.9195 36 56.9862 36C53.828 36 50.7118 35.0575 47.7248 33.1976C45.42 31.7632 43.1909 29.7809 41.0985 27.3058C37.5969 23.1644 35.6701 19.0594 35.5905 18.8864C35.5213 18.7378 28.6461 4.2078 18.0138 4.2078C10.4031 4.20779 4.21101 10.3951 4.21101 18C4.21101 25.6049 10.4031 31.7922 18.0138 31.7922C24.2573 31.7922 29.2282 26.755 32.2975 22.5295L35.7056 25.0018C32.0608 30.0193 26.0315 36 18.0138 36C8.0814 36 -6.94953e-07 27.9257 1.7278e-07 18C-0.00093474 8.07522 8.08047 3.0755e-06 18.0128 3.94382e-06Z"
        fill="#F45B36"
      />
      <path
        d="M12.2659 26V9.27272H19.241C20.4934 9.27272 21.5416 9.44968 22.3855 9.80361C23.235 10.1575 23.872 10.653 24.2968 11.2901C24.7269 11.9272 24.942 12.665 24.942 13.5035C24.942 14.1406 24.8086 14.7096 24.5418 15.2106C24.275 15.7061 23.9074 16.1172 23.4392 16.4439C22.9709 16.7706 22.4291 16.9993 21.8138 17.13V17.2933C22.489 17.326 23.1125 17.5084 23.6842 17.8405C24.2614 18.1727 24.7242 18.6355 25.0727 19.229C25.4212 19.8171 25.5954 20.5141 25.5954 21.32C25.5954 22.2184 25.3667 23.0215 24.9093 23.7294C24.4519 24.4318 23.7904 24.9872 22.9246 25.3956C22.0588 25.7985 21.0079 26 19.7719 26H12.2659ZM16.3088 22.7411H18.8081C19.6848 22.7411 20.33 22.575 20.7439 22.2429C21.1631 21.9107 21.3728 21.4479 21.3728 20.8544C21.3728 20.4242 21.272 20.054 21.0706 19.7436C20.8691 19.4278 20.5832 19.1855 20.213 19.0167C19.8427 18.8424 19.3989 18.7553 18.8816 18.7553H16.3088V22.7411ZM16.3088 16.1499H18.5468C18.9878 16.1499 19.3799 16.0763 19.7229 15.9293C20.0659 15.7823 20.3327 15.57 20.5233 15.2923C20.7193 15.0146 20.8174 14.6797 20.8174 14.2876C20.8174 13.7268 20.6186 13.2857 20.2211 12.9645C19.8236 12.6432 19.2873 12.4826 18.6121 12.4826H16.3088V16.1499Z"
        fill="#F45B36"
      />
      <path
        d="M53.2661 26V9.27272H57.3091V22.7166H64.2679V26H53.2661Z"
        fill="#F45B36"
      />
    </svg>
  );
}
function LogoNew() {
  return (
    <svg
      width="47"
      height="32"
      viewBox="0 0 47 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.381 13.4579C33.3616 13.4689 32.8974 13.7385 32.1266 14.1871C31.9036 13.8017 31.724 13.5395 31.6435 13.4257C30.6372 11.8619 29.786 10.5014 29.0664 9.32091C30.9344 8.20941 32.2331 7.32484 33.0911 6.39183C35.4229 3.95242 35.4448 2.38125 37.4856 1.04124C40.184 -0.742646 43.6708 -0.149774 45.6913 2.18223C41.8728 3.36323 38.6178 3.07627 39.9265 7.22217C40.6853 9.57786 42.1501 9.52784 44.0547 8.91022C45.2735 8.58114 46.9896 8.11727 47 8.11411C46.2266 10.9684 43.3925 12.8629 40.456 13.0624C38.2632 13.243 35.9111 12.399 33.381 13.4579V13.4579ZM13.6514 23.3798C13.8013 23.8252 13.9773 24.2549 14.1783 24.6682C12.4289 25.8192 11.5072 26.7669 11.127 28.147C9.73788 32.0175 5.11047 33.1638 2.1009 30.7049C-1.05332 28.078 -0.536322 23.2713 2.85499 21.2157C6.49644 19.4087 6.92049 21.8007 11.6785 19.3697C12.1537 19.1207 12.6937 18.8206 13.302 18.4741C13.0519 19.9447 13.0629 21.6285 13.6514 23.3798ZM8.36704 25.6065C7.332 24.4955 7.94874 24.5129 7.45002 24.1243C5.6635 23.8347 6.68706 23.086 5.16687 23.8205C3.60908 23.6857 4.61122 24.3065 3.28843 25.0268C3.20906 25.1242 3.20018 25.2237 3.21114 25.3801C3.45607 26.2557 3.01113 26.3368 3.06283 26.7912C4.12869 28.038 3.47382 27.7853 3.95844 28.2965C5.76116 28.6367 4.82742 29.3454 6.22907 28.6298C7.87616 28.7356 6.79881 28.1633 8.15398 27.4162C8.23336 27.3187 8.24223 27.2192 8.23074 27.0629C7.97329 26.1409 8.4741 26.1088 8.36704 25.6065ZM44.8991 30.7043C41.8895 33.1638 37.2616 32.017 35.873 28.1465C35.4928 26.7664 34.5711 25.8187 32.8217 24.6682C33.0227 24.2549 33.1987 23.8247 33.3481 23.3798C33.9366 21.6291 33.9476 19.9447 33.6974 18.4736C34.3053 18.8206 34.8453 19.1202 35.321 19.3692C40.0795 21.8002 40.503 19.4087 44.1445 21.2152C47.5368 23.2708 48.0533 28.078 44.8991 30.7043ZM43.7889 25.3801C43.7998 25.2232 43.7909 25.1242 43.7116 25.0268C42.3883 24.3065 43.3909 23.6857 41.8331 23.8205C40.3129 23.086 41.337 23.8347 39.55 24.1243C39.0513 24.5129 39.668 24.496 38.633 25.6065C38.5259 26.1088 39.0267 26.1409 38.7687 27.0623C38.7572 27.2192 38.7661 27.3182 38.8455 27.4156C40.2007 28.1628 39.1233 28.7356 40.7704 28.6293C42.1721 29.3448 41.2383 28.6361 43.041 28.296C43.5262 27.7847 42.8713 28.0375 43.9366 26.7906C43.9889 26.3368 43.5434 26.2557 43.7889 25.3801ZM13.9089 6.3913C11.5771 3.95189 11.5552 2.38073 9.51437 1.04071C6.81604 -0.743173 3.32917 -0.1503 1.30869 2.1817C5.12718 3.36323 8.38219 3.07627 7.0735 7.22217C6.31471 9.57786 4.84988 9.52784 2.94533 8.91022C1.72647 8.58114 0.0104444 8.11727 0 8.11463C0.773411 10.969 3.60751 12.8634 6.54397 13.063C8.73678 13.2436 11.0889 12.399 13.6185 13.4579H13.619C13.6378 13.4684 14.1021 13.738 14.8734 14.1871C15.0969 13.8017 15.276 13.5395 15.3565 13.4257C16.3555 11.873 17.2057 10.5093 17.9279 9.31723C16.063 8.20783 14.7658 7.32379 13.9089 6.3913ZM31.6796 23.1492C31.0163 25.1231 29.7933 26.5879 28.3253 27.5599C26.8574 28.5313 25.1455 29.0105 23.5047 29.0121C23.4974 29.0121 23.4958 29.0121 23.4958 29.0121C20.2142 29.0084 16.6479 27.0976 15.321 23.1492C13.8493 18.77 16.8103 14.771 16.8103 14.771C22.5621 5.83634 23.5047 2.98782 23.5047 2.98782C23.5935 3.29373 24.4384 5.83687 30.1902 14.771C30.1902 14.771 33.1512 18.77 31.6796 23.1492ZM23.8958 24.4176C23.6645 24.3381 23.43 24.2607 23.1814 24.1796C21.7182 23.6994 20.0596 23.155 19.0021 21.9129C18.0705 20.8177 17.7399 19.276 18.0193 17.3294C17.8992 17.5869 17.7764 17.8791 17.6657 18.1977C17.1419 19.7051 17.0929 21.1152 17.5211 22.3883C17.7561 23.0881 18.0934 23.7226 18.5232 24.2744C18.9222 24.7861 19.4021 25.23 19.9499 25.5928C20.9876 26.2799 22.2472 26.659 23.4974 26.6606C23.4974 26.6606 23.5063 26.6606 23.5084 26.6606C23.5151 26.6606 23.5219 26.6606 23.5292 26.6606H23.5339C24.2442 26.6558 24.58 26.1377 24.6515 25.6949C24.7236 25.2505 24.5685 24.6503 23.8958 24.4176Z"
        fill="#303030"
      />
    </svg>
  );
}
