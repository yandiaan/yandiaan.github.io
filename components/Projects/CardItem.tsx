import Image from "next/image";
import Link from "next/link";

interface CardProps {
  href: string;
  src: string;
  title: string;
  stacks: any;
}

export default function CardItem({ href, src, title, stacks }: CardProps) {
  return (
    <div className="flex flex-col text-white rounded-none relative group drop-shadow-xl">
      <Link href={href}>
        <a className="bg-glass text-white text-xl font-bold flex flex-col py-4 px-24 absolute z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 hover:scale-110 transition-all ease-in-out duration-300">
          See More
        </a>
      </Link>

      <Image
        src={`/img/${src}`}
        width={620}
        height={720}
        className="object-contains group-hover:blur-sm group-hover:saturate-50 group-hover:scale-105 transition-all duration-500 ease-in-out border-8"
        alt=""
      />
      <div className="flex group-hover:justify-between justify-center items-center">
        <h1 className="text-3xl overflow-y-hidden mt-4 py-8 font-bold">
          {title}
        </h1>
        <div className="mt-4 overflow-y-hidden text-white opacity-0 group-hover:flex hidden group-hover:opacity-100 gap-6">
          {stacks.map((item: any) => (
            <span className="rounded-pill text-2xl bg-glass p-4" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
