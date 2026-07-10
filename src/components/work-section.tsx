import placeholderImg from '../assets/placeholder.webp';

export default function WorkSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <HoverCard imageurl={placeholderImg} name="Bibo" description="Lead Researcher | UI/UX Designer" />
      <HoverCard imageurl={placeholderImg} name="Bibo" description="Lead Researcher | UI/UX Designer" />
    </section>
  );
}

function HoverCard({imageurl, name, description} : {imageurl: string, name: string, description: string}) {
  return (
    <div className="group relative w-full overflow-hidden rounded-xl hover:rounded-none cursor-pointer">
        <img
          src={imageurl}
          alt="Project Showcase"
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-center p-4">
          <p className="text-white text-2xl font-semibold">
            {name}
      </p>
      <p className="text-white">
        {description}
      </p>

        </div>
      </div>)
}
