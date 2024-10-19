import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Crop,
  ImagePlus,
  Sliders,
  Type,
  Eraser,
  Wand2
} from 'lucide-react'

export function ToolsSection() {
  const t = useTranslations('index')
  const tools = [
    { icon: <Crop className="h-8 w-8" />, name: 'crop', description: 'cropDescription' },
    { icon: <ImagePlus className="h-8 w-8" />, name: 'filter', description: 'filterDescription' },
    { icon: <Sliders className="h-8 w-8" />, name: 'adjust', description: 'adjustDescription' },
    { icon: <Type className="h-8 w-8" />, name: 'text', description: 'textDescription' },
    { icon: <Eraser className="h-8 w-8" />, name: 'remove', description: 'removeDescription' },
    { icon: <Wand2 className="h-8 w-8" />, name: 'retouch', description: 'retouchDescription' },
  ]

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">{t('toolsTitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link href={`/${tool.name}`} key={tool.name} className="block">
            <Card className="transition-transform hover:scale-105">
              <CardContent className="flex flex-col items-center p-6">
                {tool.icon}
                <h3 className="text-xl font-semibold mt-4">{t(tool.name)}</h3>
                <p className="text-center mt-2">{t(tool.description)}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
