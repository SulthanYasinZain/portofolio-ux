export default function Footer({title,description} : {title: string; description: string}) {
  return (
    <footer className="text-stone-800 text-center space-y-4 pt-40 pb-8">
      <p className="font-junicode text-3xl">{title}</p>
      <p className="text-sm">{description}</p>
       <button type="button" className="inline-block px-6 py-2 bg-stone-800 shadow w-fit text-neutral-100 rounded hover:scale-105 transition-all duration-300" onClick={() => window.open('https://www.linkedin.com/in/muhammad-sulthan-yasin-zain-523a32273/')}>Contact me</button>
    </footer>
  );
}
