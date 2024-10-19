import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from "@/components/ui/button"
import { ArrowUp } from 'lucide-react'

export function CallToAction() {
  const t = useTranslations('index')

  return (
    <section className="my-12 text-center">
      <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
      <p className="mb-6">{t('ctaDescription')}</p>
      <Button size="lg" asChild>
        <Link href="#editor">
          <ArrowUp className="w-4 h-4 mr-2" />
          {t('startEditing')}
        </Link>
      </Button>
    </section>
  )
}
