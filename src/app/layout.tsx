import "../styles/globals.css";

export const metadata = {
  title: "Outfit Builder",
  description: "Mix and match outfits visually",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
