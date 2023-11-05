import "./scss/reset.css"
import "./scss/globals.css"
import { montserrat } from "./utils/fonts"
import { Providers } from "./hoc/Providers"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

export const metadata = {
    title: "Michael Sup",
    description: "Michael Sup portfolio website.",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <div id="app">
                    <Providers>
                        <Header />
                        {children}
                        <Footer />
                    </Providers>
                </div>
                <div id="modals"></div>
            </body>
        </html>
    )
}
