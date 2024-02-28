import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import NavDesktop from "./components/nav-desktop";
import NavBarMobile from "./components/nav-mobile";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Southeast Plumbing & Underfloor Heating Solution, South East of Ireland. Best underfloor heating solutions and plumbing services in the South East of Ireland.",
  description:
    "Southeast Plumbing & Underfloor Heating Solution in the South East of Ireland. Serving South East Ireland, Waterford, Kilkenny, Carlow, Wexford.",
  keywords:
    "Plumbing services Southeast of Ireland, Plumbing Services, Plumber, Plumber Near Me, Underfloor Heating, South East of Ireland",
  location: "South East Ireland, Waterford, Kilkenny, Carlow, Wexford",
  service: "Underfloor Heating System Provider, Plumber, Plumbing",
  locality: "South East Ireland, Waterford, Kilkenny, Carlow, Wexford",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div>
            <NavDesktop />
          </div>
          <div>
            <NavBarMobile />
          </div>
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
