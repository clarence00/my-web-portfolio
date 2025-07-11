import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import StairTransition from "./transitions/StairTransition";
import PageTransition from "./transitions/PageTransition";
import Footer from "../components/Footer";

const typeface = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Clarence's Web Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-grid-pattern ${typeface.className} antialiased`}
        data-theme="forest">
        <Navbar />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
