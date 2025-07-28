export default function StatsSection() {
  const stats = [
    { value: "99.999%", label: "Uptime Guarantee" },
    { value: "350+", label: "Enterprise Clients" },
    { value: "12", label: "Global Data Centers" },
    { value: "24/7", label: "Expert Support" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl text-blue-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}