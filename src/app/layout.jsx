import "./scss/reset.css"
import "./scss/globals.css"
import { montserrat } from "./utils/fonts"

export const metadata = {
    title: "Michael Sup",
    description: "Michael Sup portfolio website.",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>{children}</body>
        </html>
    )
}
