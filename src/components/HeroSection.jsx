import { MapPin, Shield, Bell } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-red-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:gap-10 lg:py-24 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Connect donors and recipients across Bangladesh
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A secure, user-friendly platform to find compatible donors fast, verify credentials, and reward life-saving contributions.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Find a donor
            </a>
            <a
              href="#request"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-red-700 ring-1 ring-red-200 transition hover:bg-red-50"
            >
              Request blood
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-6 text-sm sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg bg-white/80 p-4 ring-1 ring-red-100">
              <MapPin className="h-5 w-5 text-red-600" />
              <div>
                <dt className="font-semibold text-gray-900">Location-aware</dt>
                <dd className="text-gray-600">Find nearby compatible donors</dd>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white/80 p-4 ring-1 ring-red-100">
              <Shield className="h-5 w-5 text-red-600" />
              <div>
                <dt className="font-semibold text-gray-900">Verified profiles</dt>
                <dd className="text-gray-600">Trust through verification</dd>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white/80 p-4 ring-1 ring-red-100">
              <Bell className="h-5 w-5 text-red-600" />
              <div>
                <dt className="font-semibold text-gray-900">Urgent alerts</dt>
                <dd className="text-gray-600">Notify matching donors instantly</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="mt-12 w-full max-w-xl lg:mt-0">
          <div className="relative rounded-2xl border border-red-100 bg-white p-6 shadow-xl">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-red-200/50 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-rose-200/60 blur-2xl" />

            <h3 className="text-lg font-semibold text-gray-900">Quick match preview</h3>
            <p className="mt-1 text-sm text-gray-600">
              Enter blood group and location to see potential matches.
            </p>

            <form className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-gray-700">Blood group</label>
                <select className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200">
                  <option>O+</option>
                  <option>O-</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700">City</label>
                <input
                  type="text"
                  placeholder="e.g., Dhaka"
                  className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="button"
                  className="w-full rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-red-700"
                >
                  Preview matches
                </button>
              </div>
              <p className="sm:col-span-2 text-xs text-gray-500">
                This is a demo preview. Account creation and verification unlock live matching.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
