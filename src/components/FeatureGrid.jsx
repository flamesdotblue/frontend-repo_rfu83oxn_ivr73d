import { HeartHandshake, ShieldCheck, Bell, Award } from "lucide-react";

const features = [
  {
    title: "Smart donor matching",
    description:
      "Search by blood group and location to connect with compatible, nearby donors in seconds.",
    icon: HeartHandshake,
  },
  {
    title: "Verified profiles",
    description:
      "Build trust with ID and donation verification badges approved by moderators.",
    icon: ShieldCheck,
  },
  {
    title: "Urgent notifications",
    description:
      "Email, SMS, and in-app alerts notify potential donors when every second counts.",
    icon: Bell,
  },
  {
    title: "Donor rewards",
    description:
      "Earn points, unlock badges, and climb the leaderboard for every donation.",
    icon: Award,
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to save lives
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Designed for donors, recipients, and medical professionals across Bangladesh.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 ring-1 ring-red-100">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.description}</p>
              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-red-100 opacity-0 blur-2xl transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
