export default function GitHubStats() {
  const username = "yourusername"; // replace with your GitHub username

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold text-teal-400 mb-8">GitHub Stats</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Stats Card */}
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
          alt="GitHub Stats"
          className="rounded-xl shadow-lg"
        />
        {/* Top Languages Card */}
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical`}
          alt="Top Languages"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
