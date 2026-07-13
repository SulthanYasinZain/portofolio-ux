import Header from '../components/project/header'
import ImageViewer from '../components/image-viewer'

export default function Bibo() {
  return (
    <div className="px-8 bg-stone-100 h-full flex flex-col items-center w-full text-stone-800 text-sm">
      <Header title="A Dyslexia-Friendly Reading Learning App for Children" />

      <div className="max-w-xl w-full  space-y-8 py-8">
        <ImageViewer
          src="/bibo/bibo-banner.webp"
          alt="Bibo project overview"
          downloadName="bibo-project-overview.webp"
        />
        <section className='space-y-2'>
          <h2 className='text-2xl'>Overview</h2>
          <p className=''>Bibo is a dyslexia-friendly reading app designed to help children develop reading skills through accessible and interactive learning experiences. The project combines research, accessibility principles, and usability testing to create a reading experience that is simple, engaging, and inclusive.</p>
          <p className=''>
            <strong>Editor's note:</strong> This is a condensed version of the original
            case study, focusing on the most important research, design decisions, and
            outcomes. If you'd like to explore the complete 30-page documentation, click{" "}
            <a href="/bibo.pdf" className="underline">
              here
            </a>.
          </p>
        </section>

        <section className='space-y-2'>
          <h2 className='text-2xl'>Background</h2>
          <p className=" text-muted-foreground">
            The project was created for a one-month UI/UX competition under the theme "Smart Digital Solutions for Real-World Problems."
          </p>
          <p className="">
            Our team selected the Digital Education Innovation subtheme after identifying a lack of digital learning tools designed specifically for children with dyslexia. Existing solutions often overlooked accessibility and provided little support for parents to monitor learning progress.
          </p>

        </section>

        <section className="space-y-6">
          <h2 className="text-2xl">Design Process</h2>

          <p className="">
            Working within a four-week competition timeline, our goal was to understand
            the needs of children with dyslexia and translate those insights into an
            accessible learning experience.
          </p>

          <p className="">
            We followed a user-centered design process, beginning with research and
            problem discovery, before defining user needs, designing the interface,
            building an interactive prototype, and validating the solution through
            usability testing.
          </p>

          <div>
            <h3 className='font-medium'>Week 1 · Discover</h3>
            <ul className='list-disc pl-6'>
              <li>Conducted secondary research on dyslexia and reading accessibility.</li>
              <li>Reviewed existing educational applications and identified usability gaps.</li>
              <li>Explored accessibility guidelines and dyslexia-friendly design principles.</li>
            </ul>
          </div>
          <div>
            <h3 className='font-medium'>Week 2 · Define</h3>
            <ul className='list-disc pl-6'>
              <li>Collected responses from 16 survey participants to understand learning habits and challenges.</li>
              <li>Synthesized research findings through affinity mapping.</li>
              <li>Created personas, user journeys, and information architecture.</li>
              <li>Defined the problem statement and prioritized core features.</li>
            </ul>
          </div>

          <div>
            <h3 className='font-medium'>Week 3 · Design</h3>
            <ul className='list-disc pl-6'>
              <li>Designed low-fidelity wireframes.</li>
              <li>Created high-fidelity interfaces and reusable components.</li>
              <li>Refined layouts through design reviews and feedback.</li>
            </ul>
          </div>

          <div>
            <h3 className='font-medium'>Week 4 · Prototype & Validate</h3>
            <ul className='list-disc pl-6'>
              <li>Conducted usability testing with 25 participants using task-based scenarios.</li>
              <li>Built an interactive prototype in Figma.</li>
              <li>Conducted usability testing and documented findings.</li>
              <li>Iterated on the design before the final competition submission.</li>
            </ul>
          </div>
        </section>

        <section className='space-y-2'>
          <h2 className='text-2xl'>Initial Assumption</h2>

          <p className=''>
            Children with dyslexia need a learning experience that reduces reading
            frustration and builds confidence through accessible, engaging, and
            supportive interactions.
          </p>

          <p className=''>
            Before conducting research, we assumed that many existing digital learning
            platforms were not designed with the accessibility needs of children with
            dyslexia in mind.
          </p>

          <p className=''>
            To validate these assumptions, we reviewed existing solutions, conducted
            secondary research, and interviewed users to better understand their
            challenges, behaviors, and unmet needs.
          </p>
        </section>

        <section>
          <h2 className='text-2xl'>Competitive Research</h2>

          <p className=''>
            We reviewed existing learning solutions to understand how they support
            children with reading difficulties and where they fall short. The analysis
            revealed that available solutions often provide either personalized
            guidance or convenient access, but rarely combine accessibility,
            engagement, and dyslexia-focused learning in one experience.
          </p>

          <ImageViewer
            src="/bibo/bibo-competive-research.webp"
            alt="Competitive research comparison"
            downloadName="bibo-competitive-research.webp"
          />
        </section>



        <section>
          <h2 className='text-2xl'>Key Opportunity</h2>

          <p className=''>
            Existing solutions do not fully combine personalized reading support,
            accessibility features, interactive learning, and parental progress
            monitoring. This created an opportunity for Bibo to provide a more
            accessible and supportive reading experience for children with dyslexia.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl">Our Solution</h2>

          <p className="">
            Based on our research findings, we designed Bibo around three core
            principles: reducing cognitive load, improving reading accessibility, and
            creating a more engaging learning experience for children with dyslexia.
          </p>

          <ImageViewer
            src="/bibo/bibo-solution.webp"
            alt="Core solution"
            downloadName="bibo-core-solution.webp"
          />
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl">Personas</h2>

          <p className="">
            Our research identified two primary user groups: children with dyslexia,
            who require an accessible and engaging learning experience, and parents,
            who need simple tools to monitor their child's learning progress.
          </p>

          <ImageViewer
            src="/bibo/personas.webp"
            alt="User personas"
            downloadName="bibo-user-personas.webp"
          />
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl">User Journey</h2>

          <p className="">
            Mapping the learning journey helped us understand how children and parents
            interact with the application, uncover pain points, and identify
            opportunities to improve the overall experience.
          </p>

          <ImageViewer
            src="/bibo/bibo-user-journey.webp"
            alt="User journey"
            downloadName="bibo-user-journey.webp"
          />
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl">Features</h2>

          <h3 className="font-medium">Feature #1</h3>
          <p>Create a gamification</p>
          <ImageViewer src='/bibo/bibo-feature-1.webp' alt='Feature #1' />

          <ImageViewer
            src="/bibo/final-design.webp"
            alt="Final design"
            downloadName="bibo-final-design.webp"
          />
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl">Usability Testing</h2>

          <p>
            We conducted usability testing with 25 participants to evaluate the app’s
            ease of use, identify interaction issues, and validate our design decisions
            before the final submission.
          </p>

          <div className="grid grid-cols-3 py-8">
            <div className="text-center">
              <h3 className="text-green-500 font-semibold text-4xl">100%</h3>
              <p>Task success rate</p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-4xl">0%</h3>
              <p>Drop-off rate</p>
            </div>

            <div className="text-center">
              <h3 className="text-yellow-500 font-semibold text-4xl">11.7%</h3>
              <p>Average misclick rate</p>
            </div>
          </div>

          <p>
            The testing results helped us identify several usability issues that needed
            refinement before finalizing the prototype.
          </p>

          <div>
            <h3 className="font-medium">Larger Touch Targets</h3>
            <p>
              The misclick rate showed that some interactive elements were too small or
              placed too close together. We increased their touch target size and
              adjusted the spacing to make them easier for children to select.
            </p>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl">Outcome</h2>

          <p className="">
            Bibo received 3rd Place among 105 participating teams. More importantly,
            the project demonstrated how accessibility-focused design can improve the
            learning experience for children with dyslexia while supporting parents
            throughout the process.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl">Reflection</h2>

          <p className="">
            This project strengthened my understanding of accessibility-first design
            and reinforced the importance of validating assumptions through research
            and usability testing. Given more time, I would collaborate with educators
            and dyslexia specialists to further refine the learning experience and
            expand the product beyond its initial prototype.
          </p>
        </section>
      </div>
    </div>
  )
}
