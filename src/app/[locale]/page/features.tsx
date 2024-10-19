import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Smartphone, Filter, Shield, Wand2, Lock } from "lucide-react"
import { useTranslations } from 'next-intl'

export function FeaturesSection() {
  const t = useTranslations('index')
  const features = [
    { icon: <Cloud className="h-12 w-12 mb-4 text-primary" />, name: 'freeUse' },
    { icon: <Smartphone className="h-12 w-12 mb-4 text-primary" />, name: 'cloudSave' },
    { icon: <Filter className="h-12 w-12 mb-4 text-primary" />, name: 'multiDevice' },
    { icon: <Wand2 className="h-12 w-12 mb-4 text-primary" />, name: 'advancedFilters' },
    { icon: <Shield className="h-12 w-12 mb-4 text-primary" />, name: 'aiRetouch' },
    { icon: <Lock className="h-12 w-12 mb-4 text-primary" />, name: 'privacy' },
  ]

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">{t('featuresTitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.name}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="font-semibold text-lg mb-2">{t(`features.${feature.name}.title`)}</h3>
              <p className="text-sm text-muted-foreground">{t(`features.${feature.name}.description`)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
