import Image from "next/image";
import { CustomCursorElement } from "./custom-cursor-element";
import { ScrollView } from "./scroll-view";

export default function PortfolioCard({
  card,
}: {
  card: {
    name: string;
    description: string;
    img: string;
  };
}) {
  return (
    <div>
      <CustomCursorElement
cursor={
  <div className="text-zinc-950 text-lg font-medium">
    Concept
  </div>
}      >
        <ScrollView>
          <div className="group transition-all duration-500 hover:scale-105">
            <Image
              className="w-full rounded-md object-cover object-top grayscale-25 transition-all duration-500 hover:grayscale-0"
              height="480"
              width="720"
              src={card.img}
              alt={card.name}
            />

            <div className="mt-4">
              <h3 className="text-title text-2xl font-medium">
                {card.name}
              </h3>

              <p className="text-muted-foreground">
                {card.description}
              </p>
            </div>
          </div>
        </ScrollView>
      </CustomCursorElement>
    </div>
  );
}