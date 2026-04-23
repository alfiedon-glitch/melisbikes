import "./globals.css";

export const metadata = {
  title: "Melis Bikes",
  description: "Premium motorcycle showcase built with Next.js and Tailwind CSS."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
