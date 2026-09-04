import Image from "next/image";

type ProductVisualProps = {
  src: string;
  alt: string;
  compact?: boolean;
};

export default function ProductVisual({ src, alt, compact = false }: ProductVisualProps) {
  return (
    <div className={`product-visual${compact ? " product-visual--compact" : ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={compact ? "(max-width: 1080px) 100vw, 33vw" : "(max-width: 1280px) 100vw, 1240px"}
        className="product-visual__image"
      />
    </div>
  );
}
