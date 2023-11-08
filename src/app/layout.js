// import Screen from "@/components/Screen";
import "./globals.css";
import { Inter } from "next/font/google";
import { ProvidersComponent } from "@/redux/provider";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book & Subscribe on Restaurant | Dinehub",
  description: "Book Plate & Subscribe on Restaurant | Dinehub  Homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvidersComponent>
          {children}
          {/* <Screen /> */}
        </ProvidersComponent>
      </body>
    </html>
  );
}
