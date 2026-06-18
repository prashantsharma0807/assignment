const stats = [
  {
    value: "99.9%",
    label: "UPTIME RECORD",
  },
  {
    value: "AES-256",
    label: "DATA ENCRYPTION",
  },
  {
    value: "SOC2",
    label: "COMPLIANT PROCESS",
  },
  {
    value: "0",
    label: "BRAND LEAKS",
  },
];

export default function DeliveryTeam() {
  return (
    <section className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Your Invisible
            <span className="italic text-blue-500"> Delivery Team</span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Operating at the highest levels of security and operational
            efficiency. We are the backbone of your production, never the face.
          </p>
        </div>

        <div className="mt-16 border-t border-gray-300">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="py-10 text-center border-r border-gray-300 last:border-r-0 even:border-r-0 lg:even:border-r"
              >
                <h3 className="text-4xl font-bold text-blue-500">
                  {item.value}
                </h3>

                <p className="mt-3 text-xs tracking-widest text-gray-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
