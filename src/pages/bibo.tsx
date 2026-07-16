import Header from '../components/project/header'
import ImageViewer from '../components/image-viewer'

export default function Bibo() {
  return (
    <div className="min-h-screen w-full bg-stone-100 text-stone-800">
      <Header title="A Dyslexia-Friendly Reading App for Children" />

      <main className="mx-auto w-full max-w-xl space-y-14 px-4 pb-20 pt-8 sm:space-y-20 sm:pb-28 sm:pt-12">
        <ImageViewer
          src="/bibo/bibo-banner.webp"
          alt="Bibo project overview"
          downloadName="bibo-project-overview.webp"
          className="shadow-sm"
        />

        <section className="space-y-4">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Overview</h2>
          <p className="text-base leading-7 text-stone-600">
            Bibo is a mobile learning app designed to help children with dyslexia build
            reading skills through accessible, interactive practice. Our team combined
            research, accessibility principles, and usability testing to create an
            experience that feels clear, encouraging, and easy to navigate.
          </p>

          <dl className="grid grid-cols-3 divide-x divide-stone-200 rounded-xl border border-stone-200 bg-white/60 py-4 text-center">
            <div className="px-2">
              <dt className="text-xs text-stone-500">Timeline</dt>
              <dd className="mt-1 font-medium">4 weeks</dd>
            </div>
            <div className="px-2">
              <dt className="text-xs text-stone-500">Survey</dt>
              <dd className="mt-1 font-medium">16 responses</dd>
            </div>
            <div className="px-2">
              <dt className="text-xs text-stone-500">Testing</dt>
              <dd className="mt-1 font-medium">25 participants</dd>
            </div>
          </dl>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Context</h2>
          <p className="text-base leading-7 text-stone-600">
            Bibo was developed during a four-week UI/UX competition under the theme
            “Smart Digital Solutions for Real-World Problems.” We chose the Digital
            Education Innovation subtheme after finding that few learning tools
            addressed the reading needs of children with dyslexia while also helping
            parents understand their progress.
          </p>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Design Process</h2>
            <p className="text-base leading-7 text-stone-600">
              We used a focused, user-centered process to move from problem discovery
              to a tested prototype within four weeks.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <article className="rounded-xl border border-stone-200 bg-white/60 p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-amber-600">Week 1</p>
              <h3 className="mt-1 font-semibold">Discover</h3>
              <p className="mt-2 leading-6 text-stone-600">
                Studied dyslexia, accessible reading practices, and gaps in existing
                learning products.
              </p>
            </article>

            <article className="rounded-xl border border-stone-200 bg-white/60 p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-amber-600">Week 2</p>
              <h3 className="mt-1 font-semibold">Define</h3>
              <p className="mt-2 leading-6 text-stone-600">
                Surveyed 16 participants, mapped recurring themes, and prioritized the
                core problem and features.
              </p>
            </article>

            <article className="rounded-xl border border-stone-200 bg-white/60 p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-amber-600">Week 3</p>
              <h3 className="mt-1 font-semibold">Design</h3>
              <p className="mt-2 leading-6 text-stone-600">
                Developed user flows, wireframes, high-fidelity screens, and reusable
                interface components.
              </p>
            </article>

            <article className="rounded-xl border border-stone-200 bg-white/60 p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-amber-600">Week 4</p>
              <h3 className="mt-1 font-semibold">Prototype and Validate</h3>
              <p className="mt-2 leading-6 text-stone-600">
                Built the Figma prototype, tested it with 25 participants, and refined
                the design from the findings.
              </p>
            </article>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">The Problem</h2>
          <p className="text-base leading-7 text-stone-600">
            We began with the hypothesis that children with dyslexia need a learning
            experience that reduces frustration and builds confidence through clear,
            supportive interactions. We also suspected that mainstream learning
            products rarely account for dyslexia-related accessibility needs.
          </p>
          <p className="text-base leading-7 text-stone-600">
            Secondary research, a competitor review, and survey responses helped us
            turn those assumptions into concrete design priorities: reduce cognitive
            load, make reading support adjustable, and keep practice motivating.
          </p>
        </section>

        <section className="space-y-5">
          <div className="space-y-3">
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Competitive Research
            </h2>
            <p className="text-base leading-7 text-stone-600">
            We compared private tutoring, conventional learning books, general reading
            apps, and digital education platforms. Each addressed part of the problem,
            but with a trade-off: personalized support could be costly, books offered
            limited adaptability, and digital products were rarely designed
            specifically for dyslexia.
            </p>
          </div>

          <ImageViewer
            src="/bibo/bibo-competive-research.webp"
            alt="Competitive research comparison"
            downloadName="bibo-competitive-research.webp"
          />

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-amber-700">
              Key opportunity
            </p>
            <p className="mt-2 text-base leading-7 text-stone-700">
              Bring accessible reading support, low-pressure practice, and simple parent
              progress tracking together in one experience.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <div className="space-y-3">
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">User Journey</h2>
            <p className="text-base leading-7 text-stone-600">
            We mapped the end-to-end experience from onboarding and an initial learning
            assessment to practice activities, progress tracking, and ongoing support.
            The journey highlighted where children might feel overwhelmed and where
            parents needed clearer feedback.
            </p>
          </div>

          <ImageViewer
            src="/bibo/bibo-user-journey.webp"
            alt="User journey"
            downloadName="bibo-user-journey.webp"
          />
        </section>

        <section className="space-y-10">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Core Features</h2>

          <article className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-wider text-amber-600">
                Feature 01
              </p>
              <h3 className="text-lg font-semibold">Gamified Reading Practice</h3>
              <p className="text-base leading-7 text-stone-600">
                Short games turn repetition into approachable practice. Word completion,
                matching, sentence building, and memory exercises provide variety, while
                immediate feedback gives children a clear sense of progress.
              </p>
            </div>
            <ImageViewer
              src="/bibo/bibo-feature-1.webp"
              alt="Gamified word completion and reading activities in Bibo"
              downloadName="bibo-gamified-reading.webp"
            />
          </article>

          <article className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-wider text-amber-600">
                Feature 02
              </p>
              <h3 className="text-lg font-semibold">Adjustable Reading Support</h3>
              <p className="text-base leading-7 text-stone-600">
                Children can simplify text, highlight similar letters and key words,
                switch to OpenDyslexic, and adjust font size or spacing. These controls
                let each child shape the reading view around their needs.
              </p>
            </div>
            <ImageViewer
              src="/bibo/bibo-feature-2.webp"
              alt="Bibo reading view with highlighting and adjustable typography settings"
              downloadName="bibo-adjustable-reading-support.webp"
            />
          </article>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Usability Testing
            </h2>
            <p className="text-base leading-7 text-stone-600">
            We tested the interactive prototype with 25 participants using task-based
            scenarios. We measured completion, drop-off, and misclicks to identify where
            the interface created friction before the final submission.
            </p>
          </div>

          <dl className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-stone-200 bg-white/60 p-5 text-center">
              <dd className="text-3xl font-semibold text-emerald-500">100%</dd>
              <dt className="mt-1 text-sm text-stone-600">Task success</dt>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white/60 p-5 text-center">
              <dd className="text-3xl font-semibold">0%</dd>
              <dt className="mt-1 text-sm text-stone-600">Drop-off</dt>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white/60 p-5 text-center">
              <dd className="text-3xl font-semibold text-amber-500">11.7%</dd>
              <dt className="mt-1 text-sm text-stone-600">Average misclicks</dt>
            </div>
          </dl>

          <div className="rounded-xl border border-stone-200 bg-white/60 p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-amber-600">
              Design iteration
            </p>
            <h3 className="mt-1 font-semibold">Larger touch targets</h3>
            <p className="mt-2 leading-6 text-stone-600">
              Although every participant completed the tasks, the misclick rate showed
              that some controls were too small or too close together. We enlarged the
              touch targets and increased spacing to reduce accidental taps.
            </p>
          </div>
        </section>

        <section className="rounded-2xl bg-amber-300 p-6 text-stone-900 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-wider">Outcome</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            3rd place among 105 teams
          </h2>
          <p className="mt-3 text-base leading-7 text-stone-700">
            More importantly, Bibo demonstrated how accessibility principles can guide
            a learning product from early research through validation while balancing
            the needs of children and parents.
          </p>
        </section>

        <section className="space-y-4 border-t border-stone-300 pt-10">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Reflection</h2>
          <p className="text-base leading-7 text-stone-600">
            This project deepened my understanding of accessibility-first design and
            reinforced that accessibility should shape content, interactions, and
            feedback from the start. It should not be added at the end. With more time, I would
            collaborate with educators and dyslexia specialists, test with children and
            parents over a longer period, and measure Bibo’s effect on reading confidence
            and learning outcomes.
          </p>
        </section>
      </main>
    </div>
  )
}
