import "./globals.css";
import { Providers } from "./providers";
import { EditModeProvider } from "@/context/EditModeContext";
import { EditControllerProvider } from "@/context/EditControllerContext";

export const metadata = {
  title: "QQ Builder",
  description: "System Builder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <EditModeProvider>
            <EditControllerProvider>
              {children}
            </EditControllerProvider>
          </EditModeProvider>
        </Providers>
      </body>
    </html>
  );
}
