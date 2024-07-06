import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";
import Rootheader from "./components/root/Header/page";
import Sidebar from "./components/root/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Asset Manage",
  description: "Asset Manage, manage all your assets  in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Rootheader />
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
