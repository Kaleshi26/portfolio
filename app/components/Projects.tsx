export default function Projects() {
  const projects = [
    {
      title: "Camping Gear Rental (MERN)",
      desc: "A role-based rental platform with dashboards and secure payments.",
      link: "https://github.com/yourusername/camping-gear-rental",
    },
    {
      title: "SmartSpendy – Personal Finance Tracker",
      desc: "Tracks expenses, budgets, and shows AI-powered insights.",
      link: "https://github.com/yourusername/smartspendy",
    },
    {
      title: "Belleza – Fashion Store Website",
      desc: "PHP-based e-commerce store with admin dashboard.",
      link: "https://github.com/yourusername/belleza",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-teal-400 mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-teal-500/40 transition">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <a href={p.link} target="_blank" className="text-teal-400 hover:underline">
                View Code →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
