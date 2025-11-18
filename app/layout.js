import localFont from "next/font/local";
import "./globals.css";

const customFont1 = localFont({
  src: "./fonts/Catamaran-Black.ttf",
  variable: "--catamaran-font"
});

const customFont2 = localFont({
  src: "./fonts/Raleway-Regular.ttf",
  variable: "--raleway-font"
});

export const metadata = {
  title: "ahfnig app",
  description:
    "Restore hope to the impoverished, Prison inmates and Hospital patients, through the giving of arms and the message of love."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${customFont1.variable} ${customFont2.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
