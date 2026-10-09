import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function LandingPage() {
  
const navigate = useNavigate();

const [demoStep, setDemoStep] = useState(1);
const [demoData, setDemoData] = useState({
  mood: null,
  energy: null,
  sleep: null,
  factors: [],
});

const updateDemo = (field, value) => {
  setDemoData((current) => ({
    ...current,
    [field]: value,
  }));
};

const toggleFactor = (factor) => {
  setDemoData((current) => ({
    ...current,
    factors: current.factors.includes(factor)
      ? current.factors.filter((item) => item !== factor)
      : [...current.factors, factor],
  }));
};

const handleDemoContinue = () => {
  if (demoStep < 4) {
    setDemoStep((current) => current + 1);
    return;
  }

  navigate("/register", {
    state: {
      fromDemo: true,
      demoData,
    },
  });
};
  return (
    <div className="min-h-screen bg-[#FAF9FC] text-[#24212F]">

      {/* Navigation */}
<header className="sticky top-0 z-50 border-b border-[#E8DFDB] bg-[#FFFCFA]/95 backdrop-blur-sm">
  <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
    {/* Brand */}
    <Link to="/" className="group flex flex-col">
      <span className="text-2xl font-semibold tracking-[-0.06em] text-[#292522]">
        ARIA<span className="text-[#D96643]">.</span>
      </span>
      <span className="mt-0.5 text-[11px] tracking-[0.08em] text-[#81736D]">
        EVERYDAY WELLBEING
      </span>
    </Link>

    {/* Navigation */}
    <div className="flex items-center gap-5 sm:gap-9">
      <a
        href="#how-it-works"
        className="text-sm text-[#625852] transition-colors hover:text-[#D96643]"
      >
        How it works
      </a>

      <Link
        to="/privacy"
        className="hidden text-sm text-[#625852] transition-colors hover:text-[#D96643] sm:inline-block"
      >
        Privacy
      </Link>

      <Link
        to="/login"
        className="text-sm text-[#625852] transition-colors hover:text-[#D96643]"
      >
        Sign in
      </Link>

      <Link
        to="/register"
        className="rounded-md bg-[#D96643] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#BF5638] sm:px-5"
      >
        Get started
      </Link>
    </div>
  </nav>
</header>

      {/* Hero */}
<main>
  <section
  className="relative overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/peachbg.jpg')",
  }}
>
  <div className="absolute inset-0 bg-white/50" />
  <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">

    <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-20">

      {/* Hero copy */}
      <div>
        <p className="text-lg font-medium tracking-wide text-[#D96643] sm:text-xl">
  A space for everyday wellbeing
</p>

        <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.05] tracking-[-0.035em] text-[#242522] sm:text-6xl lg:text-[4.5rem]">
          Make a little more sense of how you feel.
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-8 text-[#6F6A63]">
          Check in with yourself, put your thoughts somewhere private, and
          look back when you want to understand your days a little better.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/register"
            className="inline-flex items-center justify-center rounded-lg bg-[#D96F4A] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#C75F3D]"
          >
            Create your space
          </Link>

          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-lg border border-[#D9D4CC] bg-white px-6 py-3.5 text-sm font-medium text-[#3F3C37] transition hover:border-[#C9C2B8] hover:bg-[#F8F6F1]"
          >
            See how it works
          </a>
        </div>
      </div>
{/* Interactive check-in preview */}
<div className="relative">
  <div className="border border-[#D9D4CC] bg-white p-7 shadow-[0_18px_50px_rgba(36,37,34,0.06)] sm:p-9">

    {/* Progress */}
    <div className="flex items-center justify-between border-b border-[#E5E1DA] pb-5">
      <p className="text-xs font-medium uppercase tracking-wider text-[#9A938A]">
        Check in
      </p>

      <p className="text-xs text-[#9A938A]">
        {demoStep} / 4
      </p>
    </div>

    {/* Step 1 — Mood */}
    {demoStep === 1 && (
      <div className="pt-8">
        <p className="text-xs uppercase tracking-wider text-[#9A938A]">
          Step one
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#242522]">
          How are you feeling?
        </h2>

        <p className="mt-2 text-sm text-[#6F6A63]">
          There isn't a right answer.
        </p>

        <div className="mt-8 grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => updateDemo("mood", value)}
              className={`flex h-12 items-center justify-center rounded-full border text-sm font-medium transition ${
                demoData.mood === value
                  ? "border-[#D96F4A] bg-[#D96F4A] text-white"
                  : "border-[#D9D4CC] text-[#6F6A63] hover:border-[#D96F4A]"
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            disabled={!demoData.mood}
            onClick={handleDemoContinue}
            className="text-sm font-medium text-[#D96F4A] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue →
          </button>
        </div>
      </div>
    )}

    {/* Step 2 — Energy */}
    {demoStep === 2 && (
      <div className="pt-8">
        <p className="text-xs uppercase tracking-wider text-[#9A938A]">
          Step two
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#242522]">
          How's your energy?
        </h2>

        <p className="mt-2 text-sm text-[#6F6A63]">
          Think about how you've felt through the day.
        </p>

        <div className="mt-8 grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => updateDemo("energy", value)}
              className={`h-12 rounded-lg border text-sm font-medium transition ${
                demoData.energy === value
                  ? "border-[#D96F4A] bg-[#D96F4A] text-white"
                  : "border-[#D9D4CC] text-[#6F6A63] hover:border-[#D96F4A]"
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={() => setDemoStep(1)}
            className="text-sm text-[#6F6A63]"
          >
            ← Back
          </button>

          <button
            type="button"
            disabled={!demoData.energy}
            onClick={handleDemoContinue}
            className="text-sm font-medium text-[#D96F4A] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue →
          </button>
        </div>
      </div>
    )}

    {/* Step 3 — Sleep */}
    {demoStep === 3 && (
      <div className="pt-8">
        <p className="text-xs uppercase tracking-wider text-[#9A938A]">
          Step three
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#242522]">
          How did you sleep?
        </h2>

        <p className="mt-2 text-sm text-[#6F6A63]">
          Roughly how much sleep did you get?
        </p>

        <div className="mt-8 grid grid-cols-3 gap-2">
          {["Less than 5h", "5–7h", "7–9h"].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => updateDemo("sleep", value)}
              className={`min-h-12 rounded-lg border px-2 text-sm font-medium transition ${
                demoData.sleep === value
                  ? "border-[#D96F4A] bg-[#D96F4A] text-white"
                  : "border-[#D9D4CC] text-[#6F6A63] hover:border-[#D96F4A]"
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={() => setDemoStep(2)}
            className="text-sm text-[#6F6A63]"
          >
            ← Back
          </button>

          <button
            type="button"
            disabled={!demoData.sleep}
            onClick={handleDemoContinue}
            className="text-sm font-medium text-[#D96F4A] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue →
          </button>
        </div>
      </div>
    )}

    {/* Step 4 — Factors */}
    {demoStep === 4 && (
      <div className="pt-8">
        <p className="text-xs uppercase tracking-wider text-[#9A938A]">
          One last thing
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#242522]">
          What's been affecting you?
        </h2>

        <p className="mt-2 text-sm text-[#6F6A63]">
          Pick anything that feels relevant.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {[
            "Studies",
            "Work",
            "Sleep",
            "Relationships",
            "Family",
            "Social life",
            "Self-image",
            "Other",
          ].map((factor) => {
            const selected = demoData.factors.includes(factor);

            return (
              <button
                key={factor}
                type="button"
                onClick={() => toggleFactor(factor)}
                className={`rounded-full border px-3.5 py-2 text-sm transition ${
                  selected
                    ? "border-[#D96F4A] bg-[#D96F4A] text-white"
                    : "border-[#D9D4CC] text-[#6F6A63] hover:border-[#D96F4A]"
                }`}
              >
                {factor}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={() => setDemoStep(3)}
            className="text-sm text-[#6F6A63]"
          >
            ← Back
          </button>

          <button
            type="button"
            disabled={demoData.factors.length === 0}
            onClick={handleDemoContinue}
            className="text-sm font-medium text-[#D96F4A] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Save check-in →
          </button>
        </div>
      </div>
    )}

  </div>
</div>

    </div>
    </div>
  </section>
        {/* Divider */}
        <div className="mx-auto max-w-6xl border-t border-[#E7E4EE]" />

        {/* How it works */}
        {/* How it works */}
<section
  id="how-it-works"
  className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:px-8"
>
  <div className="mx-auto max-w-3xl text-center">
  <p className="text-2xl font-semibold tracking-tight text-[#242522] sm:text-3xl">
  How ARIA works
</p>

  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#242522] sm:text-4xl">
    Three simple ways to spend time with yourself.
  </h2>
</div>

  <div className="mt-14 grid gap-5 md:grid-cols-3">
    {/* Check in */}
    <div className="rounded-2xl border border-[#DDD9D1] bg-white p-7">
      <p className="text-sm font-medium text-[#D96F4A]">01</p>

      <div className="mt-10">
        <div className="mb-6 inline-flex rounded-lg border border-[#E5E1DA] bg-[#F8F6F1] px-3 py-2 text-sm text-[#5F5A53]">
          Mood&nbsp;&nbsp; <span className="font-medium text-[#D96F4A]">4 / 5</span>
        </div>

        <h3 className="text-xl font-semibold text-[#242522]">
          Check in
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#6F6A63]">
          Tell ARIA how you're feeling, how your energy is, how you slept,
          and what's been affecting your day.
        </p>
      </div>
    </div>

    {/* Reflect */}
    <div className="rounded-2xl border border-[#DDD9D1] bg-white p-7">
      <p className="text-sm font-medium text-[#D96F4A]">02</p>

      <div className="mt-10">
        <div className="mb-6 rounded-lg border border-[#E5E1DA] bg-[#F8F6F1] px-3 py-2 text-sm text-[#6F6A63]">
          Today felt a little...
        </div>

        <h3 className="text-xl font-semibold text-[#242522]">
          Reflect
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#6F6A63]">
          Put your thoughts somewhere private. Write as much or as little
          as you want, without having to make it sound a certain way.
        </p>
      </div>
    </div>

    {/* Look back */}
    <div className="rounded-2xl border border-[#DDD9D1] bg-white p-7">
      <p className="text-sm font-medium text-[#D96F4A]">03</p>

      <div className="mt-10">
        <div className="mb-6 flex items-end gap-1 rounded-lg border border-[#E5E1DA] bg-[#F8F6F1] px-3 py-4">
          <span className="h-3 w-1.5 rounded-full bg-[#D96F4A]" />
          <span className="h-5 w-1.5 rounded-full bg-[#D96F4A]" />
          <span className="h-4 w-1.5 rounded-full bg-[#D96F4A]" />
          <span className="h-7 w-1.5 rounded-full bg-[#D96F4A]" />
          <span className="h-6 w-1.5 rounded-full bg-[#D96F4A]" />
          <span className="h-8 w-1.5 rounded-full bg-[#D96F4A]" />
          <span className="h-7 w-1.5 rounded-full bg-[#D96F4A]" />
        </div>

        <h3 className="text-xl font-semibold text-[#242522]">
          Look back
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#6F6A63]">
          See how your mood, energy, sleep, and everyday factors change
          over time.
        </p>
      </div>
    </div>
  </div>
</section>
{/* What ARIA stands for */}
<section className="border-y border-[#DDD9D1] bg-[#F8F6F1]">
  <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28">

    <div className="text-center">
      <h2 className="text-3xl font-semibold tracking-tight text-[#242522] sm:text-4xl">
        What ARIA stands for
      </h2>
    </div>

    <div className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-4">

      {/* Awareness */}
      <div className="group border border-[#D9D4CC] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#C9C2B8]">
        <div className="text-7xl font-semibold leading-none tracking-tight text-[#D96F4A]">
          A
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[#242522]">
            Awareness
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#6F6A63]">
            Notice how you're doing before trying to change anything.
          </p>
        </div>
      </div>

      {/* Reflection */}
      <div className="group border border-[#D9D4CC] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#C9C2B8]">
        <div className="text-7xl font-semibold leading-none tracking-tight text-[#D96F4A]">
          R
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[#242522]">
            Reflection
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#6F6A63]">
            Give your thoughts some space and put them into words.
          </p>
        </div>
      </div>

      {/* Insights */}
      <div className="group border border-[#D9D4CC] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#C9C2B8]">
        <div className="text-7xl font-semibold leading-none tracking-tight text-[#D96F4A]">
          I
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[#242522]">
            Insights
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#6F6A63]">
            Look back and notice patterns that might be easy to miss day to day.
          </p>
        </div>
      </div>

      {/* Action */}
      <div className="group border border-[#D9D4CC] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#C9C2B8]">
        <div className="text-7xl font-semibold leading-none tracking-tight text-[#D96F4A]">
          A
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[#242522]">
            Action
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#6F6A63]">
            Use what you've noticed to choose one small next step.
          </p>
        </div>
      </div>

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