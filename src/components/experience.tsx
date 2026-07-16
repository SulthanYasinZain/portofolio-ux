
export default function Experience() {
  return (
    <section id="experience" className="py-8 text-stone-800 sm:py-28">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-junicode text-3xl sm:text-5xl">Where I have worked.</h2>
        </div>

        <ul className="border-y border-stone-300">
          <li className="grid gap-5 py-6 sm:grid-cols-[1fr_auto] sm:gap-8 sm:py-8">
            <div className="space-y-4">
              <div>
              <h3 className="text-lg font-medium sm:text-xl text-red-500">
                Anagata Sisedu Nusantara
              </h3>
                <p className="mt-1 text-sm sm:text-base">
                  UI/UX Intern
                </p>
              </div>

              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-stone-600 marker:text-red-500 sm:text-base sm:leading-7">
                <li>
                  Redesigned the company profile website and improved responsiveness
                  across three device breakpoints.
                </li>
                <li>
                  Collaborated with vendors and stakeholders to identify interface
                  issues and implement improvements aligned with business requirements.
                </li>
                <li>
                  Designed more than 10 website pages and user flows for the next major
                  version of ruanganagata.id.
                </li>
                <li>
                  Created reusable design components and documentation to streamline
                  developer handoff and maintain consistency.
                </li>
              </ul>
            </div>

            <time className="text-sm text-stone-500" dateTime="2025-08/2025-12">
              Aug to Dec 2025
            </time>
          </li>
        </ul>
      </div>
    </section>
  )
}
