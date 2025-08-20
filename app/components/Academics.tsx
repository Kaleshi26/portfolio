export default function Academics() {
  return (
    <section id="academics" className="py-20 text-center">
      <h2 className="text-3xl font-bold text-teal-400 mb-10">🎓 Academics</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-900">
          <h3 className="text-xl font-semibold">BSc. (Hons) in Information Technology</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Sri Lanka Institute of Information Technology (SLIIT)
          </p>
          <p className="text-sm text-teal-500">2022 – Present</p>
        </div>
        <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-900">
          <h3 className="text-xl font-semibold">Certifications</h3>
          <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
            <li>✅ FreeCodeCamp – Responsive Web Design</li>
            <li>✅ HackerRank – JavaScript, SQL</li>
            <li>✅ AWS Cloud Practitioner (in progress)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
