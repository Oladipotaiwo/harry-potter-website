import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Harry Potter API Demo",
  description: "Explore characters, books, and spells",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <Navbar />
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
