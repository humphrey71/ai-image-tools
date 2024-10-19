import Image from "next/image"

import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
    const siteName = "Image Tools"

    return (
        <header>
            <div className="px-4 md:px-16 flex items-center justify-between h-16 border-b border-gray-200">
                <div className="flex-shrink-0 fgrow-0">
                    <div className="select-none flex items-center">
                        <div className="mr-2">
                            <Image alt={`Logo of ${siteName}`} loading="lazy" width="30" height="30" decoding="async" data-nimg="1" src="/logo.svg" />
                        </div>
                        <div className="text-xl font-bold">{siteName}</div>
                    </div>
                </div>

                <div className="grow md:hidden"></div>
                <div className="flex items-center gap-2">
                    <Button>Sign in</Button>
                    <LanguageSwitcher />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
