import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          🍽️ Feisty
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Spar tid og penge på madplanlægning. Hver uge tilpasset DIN smag + de bedste tilbud.
        </p>
        <Link
          href="/api/meal-plan"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Prøv gratis
        </Link>
      </section>

      {/* Features */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Hvordan virker det?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Din profil</h3>
            <p className="text-gray-600">
              Fortæl os om dine præferencer, allergier og budget. Vi tilpasser alt til dig.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-3xl mb-3">🛒</div>
            <h3 className="text-xl font-semibold mb-2">Smarte tilbud</h3>
            <p className="text-gray-600">
              Vi finder ugens bedste tilbud fra Netto, Føtex, Bilka og andre.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-3xl mb-3">♻️</div>
            <h3 className="text-xl font-semibold mb-2">Restemad</h3>
            <p className="text-gray-600">
              Mandags ragout bliver til tirsdags lasagne. Smart udnyttelse af leftovers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-3xl mb-3">📄</div>
            <h3 className="text-xl font-semibold mb-2">Din liste</h3>
            <p className="text-gray-600">
              Automatisk indkøbsliste baseret på ugens madplan. Bare print og gå i gang.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 text-center bg-orange-50">
        <h2 className="text-3xl font-bold mb-4">Kun 74 DKK / måned</h2>
        <p className="text-gray-600 mb-8">
          Det er mindre end 2,50 DKK om dagen. Sparetid + billigere indkøb = pengene værd.
        </p>
        <Link
          href="/api/meal-plan"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Kom i gang
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500">
        <p>© 2026 Feisty. Smart madplanlægning i Danmark.</p>
      </footer>
    </div>
  );
}
