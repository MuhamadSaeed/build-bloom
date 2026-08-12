import PortfolioCard from "@/components/portfolio-card";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";

export default function PortfolioSection() {
  return (
    <section
      className="bg-gray-50 py-16 dark:bg-transparent md:py-32"
      id="portfolio"
    >
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-4xl font-semibold">
              Selected Work
            </h2>
          </div>

          <p className="max-w-sm sm:ml-auto text-muted-foreground">
            A selection of digital products and website concepts showcasing
            the kinds of experiences we can build for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          {PORTFOLIO_CONTENT.map((item, index) => (
            <div
              key={item.name}
              className={index % 2 === 1 ? "md:mt-20" : ""}
            >
              <PortfolioCard card={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}