"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
    const t = useTranslations('index')

    return (
        <section className="flex flex-col lg:flex-row items-center justify-between py-12">
            <div className="lg:w-1/2">
                <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
                <p className="text-xl mb-6">{t('heroDescription')}</p>

                <div className="flex items-center gap-4 justify-self-end">
                    <Button size="lg" asChild>
                        <Link href="#editor">
                            <ArrowDown className="w-4 h-4 mr-2" />
                            {t('startEditing')}
                        </Link>
                    </Button>
                    <p className="text-sm text-gray-500">{t('startEditingDescription')}</p>
                </div>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:justify-end lg:w-1/2 lg:mt-0">
                <Image
                    src="/hero-image.png"
                    alt="Online Image Editor"
                    width={640}
                    height={384}
                    className="rounded-lg self-end"
                />
            </div>
        </section>
    )
}
