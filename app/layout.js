import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./components/util/theme-provider";

import Rootheader from "./components/root/Header/page";
import Sidebar from "./components/root/Sidebar";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Asset Manage",
  description: "Asset Manage, manage all your assets  in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
        <Rootheader />
        <div className="flex">
          <Sidebar />
          {children}
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
