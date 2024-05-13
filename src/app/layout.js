import "./globals.css";
import {Inter} from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/components/Providers/Providers";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Book & Subscribe on Restaurant | Dinehub",
    description: "Book Plate & Subscribe on Restaurant | Dinehub  Homepage",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
