interface HeadingProps {
  title: string;
  HeadingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "defaultWhite" | "defaultBlack";
  weight?: "normal" | "bold";
}

export function Heading({
  title,
  HeadingTag,
  size = "lg",
  color = "defaultWhite",
  weight = "bold",
}: HeadingProps) {
  let textSize: string;
  switch (size) {
    case "xs":
      textSize = "text-[1.2rem]";
      break;
    case "sm":
      textSize = "text-[1.5rem]";
      break;
    case "md":
      textSize = "text-[2rem]";
      break;
    case "lg":
      textSize = "text-[2.5rem]";
      break;
    case "xl":
      textSize = "text-[3.5rem]";
      break;
    default:
      textSize = "text-[1rem]";
  }

  const textColor =
    color === "defaultWhite" ? "text-defaultWhite" : "text-defaultBlack";

  const fontWeight = weight === "bold" ? "font-bold" : "font-normal";

  return (
    <HeadingTag
      className={`tracking-wide ${textSize} ${textColor} ${fontWeight}`}
    >
      {title}
    </HeadingTag>
  );
}
