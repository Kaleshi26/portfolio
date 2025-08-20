export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-4">Let’s connect! You can reach me via:</p>
      <div className="space-y-2">
        <a href="mailto:youremail@example.com" className="text-teal-400 hover:underline">
          📧 youremail@example.com
        </a>
        <br />
        <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-teal-400 hover:underline">
          🔗 LinkedIn
        </a>
        <br />
        <a href="https://github.com/yourusername" target="_blank" className="text-teal-400 hover:underline">
          💻 GitHub
        </a>
      </div>
    </section>
  );
}
