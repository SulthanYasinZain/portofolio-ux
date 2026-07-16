export default function Navbar() {
  return (
    <nav aria-label="Primary navigation" className="flex w-full items-center justify-center gap-2 py-2">
      <StyleLink href="#about" text="About" />
      <StyleLink href="#work" text="Work" />
      <a
        href="/Resume_SulthanYasin.pdf"
        download="Resume_Muhammad_Sulthan.pdf"
        className="cursor-pointer rounded px-4 py-1 transition-all duration-300 hover:bg-stone-200"
      >
        Resume
      </a>
    </nav>
  )
}

function StyleLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="cursor-pointer rounded px-4 py-1 transition-all duration-300 hover:bg-stone-200"
    >
      {text}
    </a>
  )
}
