import "./styles/globals.scss";
import localFont from 'next/font/local'

export const metadata = {
  title: "Fly Today",
  description: "Test App",
  icons: {
    icon: "/flyToday.png",
  },
};
const vazir = localFont({ src: '../public/fonts/vazir.ttf' })

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`bg-[#f3f3f3] ${vazir.className}`} >{children}</body>
    </html>
  );
}
