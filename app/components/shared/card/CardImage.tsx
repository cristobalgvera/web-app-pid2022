import Image from "next/image";

interface CardImageProps {
  cover?: {
    src: string;
    alt: string;
  };
}

const PlaceholderImage = () => <div className="relative block h-48 w-full overflow-hidden bg-gray-200"></div>;

export const CardImage = ({ cover }: CardImageProps) =>
  cover ? (
    <picture className="relative block h-48 w-full overflow-hidden">
      <Image
        className="rounded-t-md object-cover"
        src={cover.src}
        alt={cover.alt}
        fill
      />
    </picture>
  ) : (
    <PlaceholderImage />
  );
