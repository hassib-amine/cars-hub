import type { Metadata } from "next";
import "./globals.css";
import { Footer, Hero, Navbar } from "../../components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
  icons: {
    icon: "/model-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
