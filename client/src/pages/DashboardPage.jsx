
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Moon,
  Sparkles,
  TrendingUp,
  Activity,
} from "lucide-react";

function DashboardPage() {
  const [checkIns, setCheckIns] = useState([]);

  useEffect(() => {
    const storedCheckIns =
      JSON.parse(localStorage.getItem("aria_checkins")) || [];

    setCheckIns(storedCheckIns);
  }, []);

  /*
   * All dashboard metrics below are derived from actual check-in data.
   * Nothing here is manually assigned as a fake wellbeing score.
   */

  const wellbeingData = useMemo(() => {
    if (checkIns.length === 0) {
      return {
        hasData: false,
        averageMood: null,
        averageEnergy: null,
        averageSleep: null,
        recentMood: null,
        moodTrend: null,
      };
    }

    const validMoodEntries = checkIns.filter(
      (entry) =>
        typeof entry.mood === "number" &&
        entry.mood >= 1 &&
        entry.mood <= 5
    );

    const validEnergyEntries = checkIns.filter(
      (entry) =>
        typeof entry.energy === "number" &&
        entry.energy >= 1 &&
        entry.energy <= 5
    );

    const validSleepEntries = checkIns.filter(
      (entry) =>
        entry.sleepHours !== "" &&
        !Number.isNaN(Number(entry.sleepHours))
    );

    const average = (values) => {
      if (!values.length) return null;

      return (
        values.reduce((total, value) => total + value, 0) /
        values.length
      );
    };

    const averageMood = average(
      validMoodEntries.map((entry) => entry.mood)
    );

    const averageEnergy = average(
      validEnergyEntries.map((entry) => entry.energy)
    );

    const averageSleep = average(
      validSleepEntries.map((entry) => Number(entry.sleepHours))
    );

    const recentMood =
      validMoodEntries.length > 0
        ? validMoodEntries[validMoodEntries.length - 1].mood
        : null;

    /*
     * Trend is only calculated when there are enough mood entries.
     * We compare the first half of the available data with the second half.
     */
    let moodTrend = null;

    if (validMoodEntries.length >= 4) {
      const midpoint = Math.floor(validMoodEntries.length / 2);

      const earlierEntries = validMoodEntries.slice(0, midpoint);
      const recentEntries = validMoodEntries.slice(midpoint);

      const earlierAverage = average(
        earlierEntries.map((entry) => entry.mood)
      );

      const recentAverage = average(
        recentEntries.map((entry) => entry.mood)
      );

      if (recentAverage > earlierAverage + 0.25) {
        moodTrend = "up";
      } else if (recentAverage < earlierAverage - 0.25) {
        moodTrend = "down";
      } else {
        moodTrend = "steady";
      }
    }

    return {
      hasData: true,
      averageMood,
      averageEnergy,
      averageSleep,
      recentMood,
      moodTrend,
    };
  }, [checkIns]);

  const formatNumber = (value) => {
    if (value === null || value === undefined) return "—";

    return value.toFixed(1);
  };

  const getMoodLabel = (mood) => {
    const labels = {
      1: "Very low",
      2: "Low",
      3: "Okay",
      4: "Good",
      5: "Great",
    };

    return labels[mood] || "—";
  };

  const getTrendText = () => {
    if (!wellbeingData.hasData) {
      return "Complete your first check-in to begin tracking.";
    }

    if (wellbeingData.moodTrend === "up") {
      return "Your recent mood is trending upward.";
    }

    if (wellbeingData.moodTrend === "down") {
      return "Your recent mood has been trending lower.";
    }

    if (wellbeingData.moodTrend === "steady") {
      return "Your mood has remained relatively steady.";
    }

    return "Complete more check-ins to identify a trend.";
  };

  return (
    <section className="space-y-8">

      {/* Header */}
      <div>
        <p className="text-sm font-medium text-[#6D5DD3]">
          Your wellbeing space
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#24212F] sm:text-4xl">
          How are you doing today?
        </h1>

        <p className="mt-2 max-w-2xl text-[#777282]">
          ARIA helps you notice patterns in your wellbeing without judging or
          diagnosing you.
        </p>
      </div>

      {/* Main action */}
      <div className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">

        <div className="rounded-3xl border border-[#E7E4EE] bg-white p-8 shadow-sm">
          <div className="flex items-start justify-between gap-6">

            <div>
              <p className="text-sm font-medium text-[#777282]">
                Daily check-in
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-[#24212F]">
                Take a moment for yourself.
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-[#777282]">
                A short check-in helps ARIA understand your wellbeing over
                time. You choose what you want to share.
              </p>
            </div>

            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEEBFA] text-[#6D5DD3] sm:flex">
              <Sparkles size={22} strokeWidth={1.7} />
            </div>
          </div>

          <Link
            to="/check-in"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#66547F] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#57456E]"
          >
            Start check-in
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Latest check-in */}
        <div className="rounded-3xl border border-[#E7E4EE] bg-[#F5F1F8] p-8">

          <div className="flex items-center gap-2 text-sm font-medium text-[#66547F]">
            <CheckCircle2 size={17} />
            Latest check-in
          </div>

          {wellbeingData.recentMood !== null ? (
            <>
              <p className="mt-5 text-3xl font-semibold text-[#24212F]">
                {getMoodLabel(wellbeingData.recentMood)}
              </p>

              <p className="mt-2 text-sm text-[#777282]">
                Based on your most recent mood check-in.
              </p>
            </>
          ) : (
            <>
              <p className="mt-5 text-xl font-semibold text-[#24212F]">
                Nothing recorded yet.
              </p>

              <p className="mt-2 text-sm leading-6 text-[#777282]">
                Your first check-in will give ARIA something meaningful to
                work with.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Wellbeing overview */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-[#24212F]">
            Your wellbeing
          </h2>

          <p className="mt-1 text-sm text-[#777282]">
            Based only on information you've shared with ARIA.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">

          {/* Mood */}
          <div className="rounded-2xl border border-[#E7E4EE] bg-white p-6">
            <div className="flex items-center gap-2 text-sm text-[#777282]">
              <Activity size={17} />
              Average mood
            </div>

            <p className="mt-4 text-3xl font-semibold text-[#24212F]">
              {formatNumber(wellbeingData.averageMood)}
              {wellbeingData.averageMood !== null && (
                <span className="ml-1 text-base font-normal text-[#A09BAA]">
                  / 5
                </span>
              )}
            </p>

            <p className="mt-2 text-xs text-[#A09BAA]">
              {checkIns.length > 0
                ? `${checkIns.length} check-in${
                    checkIns.length === 1 ? "" : "s"
                  } recorded`
                : "No check-ins yet"}
            </p>
          </div>

          {/* Energy */}
          <div className="rounded-2xl border border-[#E7E4EE] bg-white p-6">
            <div className="flex items-center gap-2 text-sm text-[#777282]">
              <TrendingUp size={17} />
              Average energy
            </div>

            <p className="mt-4 text-3xl font-semibold text-[#24212F]">
              {formatNumber(wellbeingData.averageEnergy)}
              {wellbeingData.averageEnergy !== null && (
                <span className="ml-1 text-base font-normal text-[#A09BAA]">
                  / 5
                </span>
              )}
            </p>

            <p className="mt-2 text-xs text-[#A09BAA]">
              Calculated from your check-ins
            </p>
          </div>

          {/* Sleep */}
          <div className="rounded-2xl border border-[#E7E4EE] bg-white p-6">
            <div className="flex items-center gap-2 text-sm text-[#777282]">
              <Moon size={17} />
              Average sleep
            </div>

            <p className="mt-4 text-3xl font-semibold text-[#24212F]">
              {formatNumber(wellbeingData.averageSleep)}
              {wellbeingData.averageSleep !== null && (
                <span className="ml-1 text-base font-normal text-[#A09BAA]">
                  hrs
                </span>
              )}
            </p>

            <p className="mt-2 text-xs text-[#A09BAA]">
              Based on recorded sleep duration
            </p>
          </div>

        </div>
      </div>

      {/* Pattern section */}
      <div className="rounded-3xl border border-[#E7E4EE] bg-white p-7">

        <div className="flex items-start gap-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEEBFA] text-[#66547F]">
            <TrendingUp size={20} />
          </div>

          <div>
            <h2 className="font-semibold text-[#24212F]">
              What your data says
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#777282]">
              {getTrendText()}
            </p>
          </div>

        </div>

        {checkIns.length < 4 && (
          <div className="mt-5 rounded-xl bg-[#FAF9FC] px-4 py-3 text-xs leading-5 text-[#777282]">
            ARIA will avoid making trend claims until there is enough data to
            support them.
          </div>
        )}
      </div>

      {/* Empty state */}
      {checkIns.length === 0 && (
        <div className="rounded-3xl border border-dashed border-[#D8D2E0] bg-[#FAF9FC] p-8 text-center">

          <h2 className="text-lg font-semibold text-[#24212F]">
            Your wellbeing picture starts here.
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#777282]">
            Complete a few check-ins and ARIA will gradually build a picture
            of your patterns. Nothing will be inferred before there's enough
            information.
          </p>

          <Link
            to="/check-in"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#66547F] hover:underline"
          >
            Complete your first check-in
            <ArrowRight size={16} />
          </Link>

        </div>
      )}

    </section>
  );
}

export default DashboardPage;
