import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import NavDesktop from "./components/nav-desktop";
import NavBarMobile from "./components/nav-mobile";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "B&L Underfloor Heating installation & Plumbing Services, South East of Ireland. Best underfloor heating solutions and plumbing services in the South East of Ireland.",
  description:
    "B&L Underfloor Heating and Plumbing Services in the South East of Ireland. Underfloor Heating Without Reconstruction, Our system eliminates the hassle of removing your current floor or raising existing screed.",
  keywords:
    "Underfloor Heating, Plumbing Services, Plumber, Plumber Near Me, South East Ireland, Plumber near me",
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
      </body>
    </html>
  );
}
