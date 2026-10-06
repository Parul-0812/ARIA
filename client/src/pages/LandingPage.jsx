
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF9FC] text-[#24212F]">

      {/* Navigation */}
      <header className="border-b border-[#E7E4EE] bg-[#FAF9FC]">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-8">

          <Link to="/" className="group">
            <div className="text-xl font-semibold tracking-tight text-[#66547F]">
              ARIA
            </div>

            <div className="mt-0.5 text-[11px] tracking-wide text-[#8B8693]">
              everyday wellbeing
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-[#777282] sm:flex">
            <a
              href="#how-it-works"
              className="transition hover:text-[#24212F]"
            >
              How it works
            </a>

            <a
              href="#privacy"
              className="transition hover:text-[#24212F]"
            >
              Privacy
            </a>

            <Link
              to="/login"
              className="transition hover:text-[#24212F]"
            >
              Sign in
            </Link>

            <Link
              to="/register"
              className="rounded-lg bg-[#66547F] px-4 py-2.5 font-medium text-white transition hover:bg-[#57456E]"
            >
              Get started
            </Link>
          </nav>

          <div className="sm:hidden">
            <Link
              to="/login"
              className="text-sm font-medium text-[#66547F]"
            >
              Sign in
            </Link>
          </div>

        </div>
      </header>

      {/* Hero */}
      <main>

        <section className="mx-auto max-w-6xl px-6 pb-24 pt-24 sm:px-8 sm:pt-32">

          <div className="max-w-3xl">

            <p className="text-sm font-medium tracking-wide text-[#66547F]">
              A space for everyday wellbeing
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#24212F] sm:text-6xl lg:text-7xl">
              Make a little more sense of how you feel.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#777282]">
              ARIA gives you a quiet place to check in, reflect, and notice
              patterns in your everyday wellbeing — without turning your life
              into a score.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-lg bg-[#66547F] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#57456E]"
              >
                Create your space
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-[#DCD7E2] bg-white px-6 py-3.5 text-sm font-medium text-[#4D4855] transition hover:border-[#C9C2D2] hover:bg-[#FDFCFD]"
              >
                See how it works
              </a>

            </div>

          </div>

          <p className="mt-16 text-xs text-[#9B96A3]">
            Your wellbeing is personal. ARIA is designed with that in mind.
          </p>

        </section>

        {/* Divider */}
        <div className="mx-auto max-w-6xl border-t border-[#E7E4EE]" />

        {/* How it works */}
        <section
          id="how-it-works"
          className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:px-8"
        >

          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#66547F]">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#24212F] sm:text-4xl">
              Start with noticing.
            </h2>

            <p className="mt-4 text-base leading-7 text-[#777282]">
              ARIA doesn't ask you to have everything figured out. You simply
              check in with yourself, and over time your own information starts
              to tell a clearer story.
            </p>
          </div>

          <div className="mt-14 grid gap-12 border-t border-[#E7E4EE] pt-10 md:grid-cols-3">

            <div>
              <p className="text-sm font-medium text-[#66547F]">01</p>

              <h3 className="mt-4 text-lg font-semibold">
                Check in
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#777282]">
                Record how you're feeling, your energy, sleep, and whatever
                seems to be affecting your day.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[#66547F]">02</p>

              <h3 className="mt-4 text-lg font-semibold">
                Reflect
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#777282]">
                Use your journal as a private place to put thoughts into words,
                without needing to make them polished or positive.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[#66547F]">03</p>

              <h3 className="mt-4 text-lg font-semibold">
                Notice patterns
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#777282]">
                As you build a history, ARIA can help you see patterns in the
                information you've chosen to share.
              </p>
            </div>

          </div>

        </section>

        {/* Features */}
        <section className="border-y border-[#E7E4EE] bg-white">

          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">

            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#66547F]">
                Your space
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built around real life.
              </h2>
            </div>

            <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">

              <div>
                <h3 className="text-lg font-semibold">
                  Daily check-ins
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-[#777282]">
                  A few thoughtful questions about how you're doing today.
                  Nothing lengthy unless you want it to be.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Private journaling
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-[#777282]">
                  A place to write freely and come back to your thoughts when
                  you need them.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Personal patterns
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-[#777282]">
                  See how things like sleep, energy, mood, and everyday stress
                  change together over time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Small things that help
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-[#777282]">
                  Find simple activities and resources that fit how you're
                  feeling instead of adding another thing to your to-do list.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Privacy */}
        <section
          id="privacy"
          className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:px-8"
        >

          <div className="max-w-2xl">

            <p className="text-sm font-medium text-[#66547F]">
              Privacy
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Some things should stay yours.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#777282]">
              Your wellbeing information is personal. ARIA is being designed
              around that principle — collect only what is useful, explain what
              is being stored, and give you control over your information.
            </p>

            <Link
              to="/privacy"
              className="mt-6 inline-flex text-sm font-medium text-[#66547F] hover:underline"
            >
              Learn about privacy
            </Link>

          </div>

        </section>

        {/* Closing CTA */}
        <section className="border-t border-[#E7E4EE] bg-[#F2EEF6]">

          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">

            <div className="max-w-2xl">

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                You don't have to figure everything out today.
              </h2>

              <p className="mt-4 text-base leading-7 text-[#777282]">
                Start with a check-in. See where it takes you.
              </p>

              <Link
                to="/register"
                className="mt-7 inline-flex rounded-lg bg-[#66547F] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#57456E]"
              >
                Create your space
              </Link>

            </div>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#E7E4EE] bg-[#FAF9FC]">

        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-xs text-[#8B8693] sm:flex-row sm:items-center sm:justify-between sm:px-8">

          <p>ARIA · Everyday wellbeing</p>

          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-[#24212F]">
              Privacy
            </Link>

            <Link to="/login" className="hover:text-[#24212F]">
              Sign in
            </Link>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default LandingPage;