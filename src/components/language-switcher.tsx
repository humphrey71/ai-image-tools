'use client'

import { Check, Languages } from "lucide-react"
import { useLocale } from 'next-intl'

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link, locales, usePathname } from '@/i18n/routing'

export function LanguageSwitcher() {
    const locale = useLocale()
    const pathname = usePathname()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Languages className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Switch Language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {Object.entries(locales).map(([key, value]) => (
                    <DropdownMenuItem key={key} asChild>
                        <Link href={pathname} locale={key}>
                            <Check className={`mr-2 h-4 w-4 ${key === locale ? 'opacity-100' : 'opacity-0'}`} />
                            {value}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}