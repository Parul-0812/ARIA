function PrivacyPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium text-[#6D5DD3]">
          Your privacy
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#24212F]">
          Privacy & security
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#777282]">
          ARIA is designed to keep your personal wellbeing information private,
          transparent, and under your control.
        </p>
      </div>

      <div className="rounded-2xl border border-[#E7E4EE] bg-white p-6 shadow-sm">
        <h2 className="text-base font-semibold text-[#24212F]">
          Your data belongs to you
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#777282]">
          This section will give you control over the information ARIA stores,
          how it is used, and what you can delete or export.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#E7E4EE] bg-white p-6">
          <h3 className="font-medium text-[#24212F]">
            Data stored
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#777282]">
            View the categories of information associated with your account.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E7E4EE] bg-white p-6">
          <h3 className="font-medium text-[#24212F]">
            Data controls
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#777282]">
            Export or permanently delete your personal ARIA data.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPage;