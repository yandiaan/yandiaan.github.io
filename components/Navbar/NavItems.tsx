import cx from "classnames";
import { Link } from "react-scroll";

interface NavItemsProps {
  href: string;
  title: string;
}

export default function NavItems({ href, title }: NavItemsProps) {
  return (
    <Link
      smooth
      spy
      to={href}
      className="text-white xl:text-xl text-sm pb-1 cursor-pointer"
      activeClass="border-b-4 font-bold"
    >
      {title}
    </Link>
  );
}
