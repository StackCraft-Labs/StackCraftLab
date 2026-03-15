export default function CTA() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-black py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600 opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-500 opacity-5 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Want to work <span className="text-orange-500">together?</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
          We love working with everyone, from start-ups and challenger brands to global leaders.
          <br />
          Give us a buzz and start the conversation.
        </p>

        {/* CTA Button */}
        <button
          data-cal-namespace="30min"
          data-cal-link="stackcraft-lab/30min"
          data-cal-config='{"layout":"month_view"}'
          className="inline-block mt-8 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
        >
          Let's Schedule a call
        </button>
      </div>
    </section>
  );
}
