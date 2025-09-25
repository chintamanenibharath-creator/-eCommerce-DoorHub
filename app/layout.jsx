import Navbar from "./components/Navbar";
import "./globals.css";


export const metadata = {
  title: "Mantu Ecommerce",
  description: "Ecommerce project built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
