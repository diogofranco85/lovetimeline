import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { appConfig } from "@/utils/app.config"
import { Star } from "lucide-react"
import { useTranslations } from "next-intl";


export function PlanCard() {

  const t = useTranslations('plan');

  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("textHeader")}
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            {t("textSubTitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {appConfig.plans.map((flat) => (
            <Card key={flat.planName} className="border-purple-600 shadow-lg">
              <CardHeader>
                {flat.emphasis &&
                  <div className="flex justify-center mb-2">
                    <span className="px-3 py-1 text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
                      {t("mostPopular")}
                    </span>
                  </div>}
                <CardTitle>{t(flat.planName)}</CardTitle>
                <div className="text-4xl font-bold">
                  {t('currencySymbol')} {flat.planValue.toFixed(2)}
                  {flat.period && <span className="text-sm font-normal">/{t(flat.period)}</span>}
                </div>
                {flat.subText && <CardDescription>{t(flat.subText)}</CardDescription>}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {flat.features.map((features, index) => (
                    <li key={index} className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-purple-600" />
                      <span>{t(features)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Assinar Agora</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}