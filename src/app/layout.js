import Screen from "@/components/Screen";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import {store} from "@/redux/store";
import { Providers } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book & Subscribe on Restaurant | Dinehub",
  description: "Book Plate & Subscribe on Restaurant | Dinehub  Homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider store={store}> */}
        <Providers>
          {children}
          <Screen />
        </Providers>
        {/* </Provider> */}
      </body>
    </html>
  );
}
