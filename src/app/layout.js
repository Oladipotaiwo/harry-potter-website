import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Harry Potter API Demo",
  description: "Explore characters, books, and spells",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className="min-h-screen text-gray-800"
        style={{
          backgroundImage: "url('/harry-images/harrypotter.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <main className="max-w-6xl mx-auto p-6  rounded-xl shadow-lg">
          {children}
        </main>
      </body>

    </html>
  );
}
