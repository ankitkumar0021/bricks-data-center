export default function LeadershipTeam() {
  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "20+ years in infrastructure. Former CTO at CloudScale Inc."
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Cloud architecture expert. Built systems serving 10M+ users"
    },
    {
      name: "Michael Chen",
      role: "COO",
      bio: "Operations specialist. Scaled infrastructure across 3 continents"
    },
    {
      name: "Priya Sharma",
      role: "CSO",
      bio: "Cybersecurity leader. Designed military-grade security systems"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Leadership Team
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">
            100+ years of combined infrastructure expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-blue-400 mb-4">{member.role}</p>
              <p className="text-blue-100">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}