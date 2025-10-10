import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Playfair_Display, Space_Grotesk, Source_Code_Pro } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
})

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-code",
  display: "swap",
})

export const metadata: Metadata = {
  title: "David Alisson - Full-Stack Developer & IT Analyst",
  description:
    "Full-Stack Developer specializing in automation, web development, and quality systems. Building modern web applications with React, Node.js, and more.",
  keywords: ["Full-Stack Developer", "Web Development", "React", "Node.js", "Automation", "Quality Systems"],
  authors: [{ name: "David Alisson Sarapião Pedro" }],
  openGraph: {
    title: "David Alisson - Full-Stack Developer",
    description: "Full-Stack Developer specializing in automation and web development",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} ${spaceGrotesk.variable} ${sourceCodePro.variable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove Next.js development indicators
              (function() {
                const removeElements = () => {
                  const elements = [
                    '#__next-build-watcher',
                    '[data-nextjs-scroll-focus-boundary]',
                    '[data-nextjs-dialog-overlay]',
                    '[data-nextjs-toast]',
                    '[data-nextjs-portal]',
                    '.nextjs-container-build-error',
                    '.nextjs-container-build-error-header'
                  ];
                  
                  elements.forEach(selector => {
                    const element = document.querySelector(selector);
                    if (element) {
                      element.remove();
                    }
                  });
                };
                
                // Remove immediately
                removeElements();
                
                // Remove on DOM changes
                const observer = new MutationObserver(removeElements);
                observer.observe(document.body, { childList: true, subtree: true });
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
