import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/Navbar";
import ThemeProvider from "./context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iBlog - ブログ",
  description: "Created by TheHazem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="nav-sticky">
            <NavBar />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
