import { Shantell_Sans, Montserrat } from "next/font/google"

export const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
})

export const shantell = Shantell_Sans({
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false,
})
