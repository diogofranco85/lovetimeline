'use client'

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { appConfig } from "@/utils/app.config";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@radix-ui/react-dropdown-menu";
import { Globe, Check } from "lucide-react";

export function DropDownSelectLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (value: string) => {
    router.push(pathname, { locale: value });
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full" aria-label="Selecionar idioma">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={locale} onValueChange={handleChange} className="bg-white gap-2 rounded border border-purple-600">
          {appConfig.language.map(lang => (
            <DropdownMenuRadioItem className="flex items-center gap-2 hover:bg-purple-600 hover:text-white p-2 px-4" key={lang.id} value={lang.id}>
              <Check className="h-4 w-4" />
              <span>{lang.name}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}