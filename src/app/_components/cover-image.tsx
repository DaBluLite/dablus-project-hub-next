import cn from "classnames";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug: string;
};

const kebabCase = (string: string) => string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .replace(/\./g, "-")
    .toLowerCase();

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      style={{
        viewTransitionName: kebabCase(slug)
      }}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {image}
    </div>
  );
};

export default CoverImage;
