import { ImageGeneratorComponent } from "./image-generator"
import { unstable_setRequestLocale } from "next-intl/server"

export default function GenerateImagePage({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale)
    return (
        <ImageGeneratorComponent />
    )
}