import { ChevronsLeftRight, Globe } from "lucide-react";
import { CardSpotlight } from "./card-spotlight";

export const About = () => {
  const priorities = [
    {
      title: "Share with the world",
      description:
        "Turn your posts to valuable resources. Share your knowlege to the world",
      icon: <Globe className="h-6 w-6 mb-4 text-center" />,
      id: 1,
    },
    {
      title: "Developer Profiles",
      description:
        "Comprehensive profiles showcasing skills, projects, and contributions.",
      icon: <ChevronsLeftRight className="h-6 w-6 mb-4 text-center" />,
      id: 2,
    },
  ];

  return (
    <div id="about" className="dark:mt-20 xl:px-96 lg:px-60">
      <div className="text-center">
        <h2 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight first:mt-0">
          What we offer
        </h2>
        <p className="leading-7 text-xl [&:not(:first-child)]:mt-3 text-zinc-400">
          List of features we offer and our priorities.
        </p>
        <div className="grid mt-20 place-items-center gap-x-10 lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
          {priorities.map((priority) => (
            <CardSpotlight
              title={priority.title}
              icon={priority.icon}
              description={priority.description}
              key={priority.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
