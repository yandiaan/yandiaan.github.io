import Image from "next/image";
import CardItem from "./CardItem";
import { data } from "./data";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col text-white min-h-screen p-36 gap-12 mt-24"
    >
      <h1 className="text-6xl overflow-y-hidden">My Projects</h1>
      <div className="flex flex-col gap-16">
        {data.map((item: any) => (
          <CardItem
            key={item.title}
            href={item.href}
            src={item.src}
            title={item.title}
            stacks={item.stacks}
          />
        ))}
      </div>
    </div>
  );
}
