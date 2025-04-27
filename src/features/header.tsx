import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Heart } from "lucide-react";
import { DropDownSelectLanguage } from "./select-language";
import { useTranslations } from "next-intl";
import LinkNext from "next/link"
import { appConfig } from "@/utils/app.config";

export function Header() {
  const t = useTranslations('header');
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-purple-500 ml-1 md:ml-8" />
          <span className="text-sm text-center md:text-xl font-bold">{t("title")}</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {appConfig.links.mainbar.map(barlink => (
            <LinkNext key={barlink.link} href={barlink.link} className="text-sm font-medium hover:text-purple-500 transition-colors">
              {t(barlink.text)}
            </LinkNext>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <DropDownSelectLanguage />
          <Link href="/sign-in">
            <Button variant="ghost" size="sm">
              {t("signIn")}
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              {t("signUp")}
            </Button>
          </Link>
        </div>
      </div>
    </header >
  )
}