import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kalpdreams Realty Pvt Ltd | Home",
  description:'KALPDREAMS REALTY PVT. LTD. working in real estate sines 2019. Our developer project is Near Lal Kuan ghaziabad the name of the colony is Mansarovar park in which we have delivered more than 1500+ independent houses and plot also',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Link
          href="#"
          className="fixed bottom-4 left-4 bg-green-500 text-white rounded-full p-3 shadow-lg flex items-center justify-center z-50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp  className="fab fa-whatsapp text-2xl"></FaWhatsapp >
        </Link>
        <Footer/>
      </body>
    </html>
  );
}
