export default function Navbar() {
    return(
      <nav className="flex items-center justify-center w-full gap-2 py-2">
        <StyleLink text="About" />
        <StyleLink text="Work" />
        <StyleLink text="Resume" />
        </nav>
    )
}

function StyleLink({text} : {text: string}) {
  return (
    <a className="px-4 py-1 cursor-pointer hover:bg-stone-200 transition-all duration-300 rounded">{text}</a>
)
}
