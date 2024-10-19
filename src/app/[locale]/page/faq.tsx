import { useTranslations } from 'next-intl'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const t = useTranslations('index')
  const faqs = ['howToStart', 'mobileUse', 'imageQuality', 'freePaidDifference']

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">{t('faqTitle')}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq} value={`item-${index + 1}`}>
            <AccordionTrigger>{t(`faq.${faq}.question`)}</AccordionTrigger>
            <AccordionContent>{t(`faq.${faq}.answer`)}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
