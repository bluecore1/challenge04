// app/layout.tsx
import "../app/globals.css";
import ClientLayout from "@/components/ClientLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
