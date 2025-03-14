import Navbar from "@/components/Navbar/Navbar";
import { dbConnect } from "@/services/Mongo";
import "./globals.css";

export const metadata = {
  title: "Eventry",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="py-8">{children}</main>
      </body>
    </html>
  );
}
