import { useNavigate } from "react-router";

export default function WorkSection() {
  return (
    <section id="work" className="grid scroll-mt-4 grid-cols-1 gap-6 w-full md:grid-cols-2">
      <HoverCard imageurl='/bibo-thumbnail.webp' name="Bibo" description="Lead Researcher | UI/UX Designer" />
      <ComingSoonCard />
    </section>
  );
}

function ComingSoonCard() {
  return (
    <div className="group relative hidden aspect-square overflow-hidden rounded-xl bg-stone-900 text-stone-100 transition-all duration-500 hover:rounded-none sm:flex sm:flex-col sm:justify-between sm:p-8">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div
        className="absolute -right-12 -top-12 size-44 rounded-full bg-red-500 transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:scale-110"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-16 right-10 size-20 rotate-12 rounded-lg bg-amber-300 transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-110"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xs">
        <h2 className="mt-2 font-junicode text-4xl leading-tight">
          New work is taking shape.
        </h2>
        <p className="mt-4 text-sm leading-6 text-stone-300">
          Another product story will be added here soon.
        </p>
      </div>
    </div>
  )
}

function HoverCard({ imageurl, name, description }: { imageurl: string, name: string, description: string }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="group relative w-full cursor-pointer overflow-hidden rounded-xl text-left hover:rounded-none"
      onClick={() => navigate('/project/bibo')}
      aria-label={`View ${name} case study`}
    >
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
      </button>)
}
