import { Link } from "@/i18n/navigation";
import { appConfig } from "@/utils/app.config";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-12 flex">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold">LoveTimeline</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Eternize cada momento do seu relacionamento em uma timeline interativa.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              {appConfig.links.footer.products.map(product => (
                <li key={product.link}>
                  {product.link.includes('#') ? (
                    <a
                      href={product.link}
                      className="text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                    >
                      {product.text}
                    </a>
                  ) : (
                    <Link
                      href={product.link as any}
                      className="text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                    >
                      {product.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {appConfig.links.footer.companies.map((company) => (
                <li key={company.link}>
                  {company.link.includes('#') ? (
                    <a
                      href={company.link}
                      className="text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                    >
                      {company.text}
                    </a>
                  ) : (
                    <Link
                      href={company.link as any}
                      className="text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                    >
                      {company.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              {appConfig.links.footer.supports.map(support => (
                <li key={support.link}>
                  {support.link.includes('#') ? (
                    <a
                      href={support.link}
                      className="text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                    >
                      {support.text}
                    </a>
                  ) : (
                    <Link
                      href={support.link as any}
                      className="text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                    >
                      {support.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} <strong>LoveTimeline</strong>. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}