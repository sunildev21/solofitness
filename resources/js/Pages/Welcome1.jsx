import { Head, Link } from '@inertiajs/react';
import { User, Award, Zap, TrendingUp } from 'lucide-react';
import TextPressure from './TextPressure';

export default function Welcome({ auth }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative w-full h-screen flex flex-col">
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center opacity-20 h-full w-full animate-pulse-slow"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        </div>

        <nav className="relative z-10 flex items-center justify-between p-6 animate-fade-in-down">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-green-400">Solo Fitness System</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
              How It Works
            </a>
            <a href="#ranks" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
              Ranks
            </a>
            <a href="#about" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
              About
            </a>
          </div>
          <Link href={route('register')}>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded animate-pulse">
              Join the Hunt
            </button>
          </Link>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 animate-fade-in-up">
          <span className="mb-4 inline-block bg-green-900/60 text-green-300 px-2 py-1 rounded animate-bounce">
            RISE TO POWER
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight animate-glitch">
            <span className="block">AWAKEN YOUR</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-red-500">
              INNER HUNTER
            </span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8 animate-fade-in">
            Transform your fitness journey into a quest for greatness. Rank up, conquer challenges, and become a legend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={route('register')}>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold animate-pulse hover:animate-none">
                Register Now <span className="ml-2">→</span>
              </button>
            </Link>
            <Link href={route('login')}>
              <button className="border-green-600 text-green-400 hover:bg-green-950/50 px-6 py-3 rounded font-bold border animate-pulse hover:animate-none">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <span className="mb-4 inline-block bg-green-900/60 text-green-300 px-2 py-1 rounded animate-bounce">
              FEATURES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-4 animate-slide-up">Forge Your Destiny</h2>
            <p className="max-w-2xl mx-auto text-gray-300 animate-fade-in-delay">
              The Solo Fitness System turns every workout into a step toward greatness with these powerful features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 border border-green-800/50 p-6 rounded-lg flex flex-col items-center text-center animate-slide-up-delay-1">
              <h3 className="text-xl font-bold text-green-400 mb-2">Rank System</h3>
              <p className="text-gray-300">
                Start as an E-Rank Hunter and ascend to S-Rank based on your physique and progress.
              </p>
            </div>

            <div className="bg-gray-800 border border-green-800/50 p-6 rounded-lg flex flex-col items-center text-center animate-slide-up-delay-2">
              <h3 className="text-xl font-bold text-green-400 mb-2">Daily Quests</h3>
              <p className="text-gray-300">
                Receive tailored fitness challenges daily—complete them to earn XP and grow stronger.
              </p>
            </div>

            <div className="bg-gray-800 border border-green-800/50 p-6 rounded-lg flex flex-col items-center text-center animate-slide-up-delay-3">
              <h3 className="text-xl font-bold text-green-400 mb-2">Level Progression</h3>
              <p className="text-gray-300">
                Gain XP to level up, unlocking tougher quests and higher ranks as you evolve.
              </p>
            </div>
          </div>
        </div>

        <div style={{position: 'relative', height: '300px'}}>
        <TextPressure
            text="Hello!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
        />
        </div>
      </section>

      {/* How It Works (Rules) */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <span className="mb-4 inline-block bg-green-900/60 text-green-300 px-2 py-1 rounded animate-bounce">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-4 animate-slide-up">Rules of the System</h2>
            <p className="max-w-2xl mx-auto text-gray-300 animate-fade-in-delay">
              Follow these steps to rise through the ranks and master your fitness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4 animate-slide-up-delay-1">
                <div className="h-10 w-10 rounded-full bg-green-900/60 flex items-center justify-center flex-shrink-0 animate-pulse">
                  <span className="font-bold text-green-400">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2 flex items-center gap-2">
                    <User className="h-5 w-5 text-green-500 animate-spin" /> Join the System
                  </h3>
                  <p className="text-gray-300">
                    Register with your age, weight, and physique to awaken your Hunter profile.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 animate-slide-up-delay-2">
                <div className="h-10 w-10 rounded-full bg-green-900/60 flex items-center justify-center flex-shrink-0 animate-pulse">
                  <span className="font-bold text-green-400">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2 flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-500 animate-bounce" /> Get Ranked
                  </h3>
                  <p className="text-gray-300">
                    The System assigns you a rank (E to B) based on your initial stats.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 animate-slide-up-delay-3">
                <div className="h-10 w-10 rounded-full bg-green-900/60 flex items-center justify-center flex-shrink-0 animate-pulse">
                  <span className="font-bold text-green-400">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-500 animate-spin" /> Complete Quests
                  </h3>
                  <p className="text-gray-300">
                    Tackle daily fitness quests tailored to your rank to earn XP and level up.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 animate-slide-up-delay-4">
                <div className="h-10 w-10 rounded-full bg-green-900/60 flex items-center justify-center flex-shrink-0 animate-pulse">
                  <span className="font-bold text-green-400">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-red-500 animate-bounce" /> Ascend or Fall
                  </h3>
                  <p className="text-gray-300">
                    Rise through ranks with XP, but beware—skipping quests triggers penalty zones.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] w-full animate-fade-in">
              <div
                className="bg-cover bg-center opacity-50 h-full w-full rounded-lg shadow-lg shadow-green-500/50 animate-pulse-slow"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Rank System */}
      <section id="ranks" className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <span className="mb-4 inline-block bg-green-900/60 text-green-300 px-2 py-1 rounded animate-bounce">
              RANK SYSTEM
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-4 animate-slide-up">Hunter Ranks</h2>
            <p className="max-w-2xl mx-auto text-gray-300 animate-fade-in-delay">
              Your rank defines your power. Climb from E to S and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-gray-800 border border-gray-700 hover:border-green-500 transition-colors p-6 rounded-lg flex flex-col items-center text-center animate-slide-up-delay-1">
              <span className="mb-4 inline-block bg-gray-700 text-gray-300 px-2 py-1 rounded animate-pulse">E RANK</span>
              <h3 className="text-xl font-bold text-green-400 mb-2">Weakling</h3>
              <p className="text-gray-300 text-sm">
                The starting point. Basic tasks to build your foundation.
              </p>
            </div>

            <div className="bg-gray-800 border border-green-900/50 hover:border-green-700/50 transition-colors p-6 rounded-lg flex flex-col items-center text-center animate-slide-up-delay-2">
              <span className="mb-4 inline-block bg-green-900/60 text-green-300 px-2 py-1 rounded animate-pulse">D RANK</span>
              <h3 className="text-xl font-bold text-green-400 mb-2">Novice</h3>
              <p className="text-gray-300 text-sm">
                Growing stronger with moderate challenges and consistency.
              </p>
            </div>

            <div className="bg-gray-800 border border-blue-900/50 hover:border-blue-700/50 transition-colors p-6 rounded-lg flex flex-col items-center text-center animate-slide-up-delay-3">
              <span className="mb-4 inline-block bg-blue-900/60 text-blue-300 px-2 py-1 rounded animate-pulse">C RANK</span>
              <h3 className="text-xl font-bold text-green-400 mb-2">Warrior</h3>
              <p className="text-gray-300 text-sm">
                Balanced strength and endurance with tougher quests.
              </p>
            </div>

            <div className="bg-gray-800 border border-red-900/50 hover:border-red-700/50 transition-colors p-6 rounded-lg flex flex-col items-center text-center animate-slide-up-delay-4">
              <span className="mb-4 inline-block bg-red-900/60 text-red-300 px-2 py-1 rounded animate-pulse">B RANK</span>
              <h3 className="text-xl font-bold text-green-400 mb-2">Elite</h3>
              <p className="text-gray-300 text-sm">
                High-intensity training for the dedicated hunter.
              </p>
            </div>

            <div className="bg-gray-800 border border-yellow-900/50 hover:border-yellow-700/50 transition-colors p-6 rounded-lg flex flex-col items-center text-center animate-slide-up-delay-5">
              <span className="mb-4 inline-block bg-yellow-900/60 text-yellow-300 px-2 py-1 rounded animate-pulse">S RANK</span>
              <h3 className="text-xl font-bold text-green-400 mb-2">Monarch</h3>
              <p className="text-gray-300 text-sm">
                Peak performance—only the strongest reach this rank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <span className="mb-4 inline-block bg-green-900/60 text-green-300 px-2 py-1 rounded animate-bounce">
              ABOUT
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-4 animate-slide-up">The Solo Fitness System</h2>
            <p className="max-w-2xl mx-auto text-gray-300 animate-fade-in-delay">
              Discover the power behind the system that turns fitness into a legendary quest.
            </p>
          </div>

          <div className="bg-gray-800 border border-green-800/50 p-6 rounded-lg text-gray-100 animate-fade-in-up">
            <p className="leading-relaxed">
              Inspired by the epic tale of "Solo Leveling," the Solo Fitness System is more than a fitness app—it’s a 
              call to action. Built for those who dare to rise from weakness, it combines gamification with real-world 
              fitness goals. Whether you’re lifting your first weight or chasing S-Rank glory, the System adapts, 
              challenges, and rewards you. Join a community of hunters, conquer your limits, and etch your name in 
              the annals of strength.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-green-900/40 to-red-900/40 rounded-2xl p-8 md:p-12 border border-green-800/50 animate-fade-in-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4 animate-slide-up">Ready to Awaken?</h2>
              <p className="max-w-2xl mx-auto text-gray-300 mb-8 animate-fade-in-delay">
                Step into the System and start your journey from E-Rank to Monarch. Your first quest awaits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {auth.user ? (
                  <Link href={route('dashboard')}>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold animate-pulse hover:animate-none">
                      Enter the Dungeon
                    </button>
                  </Link>
                ) : (
                  <>
                    <Link href={route('register')}>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-bold animate-pulse hover:animate-none">
                        Register Now
                      </button>
                    </Link>
                    <Link href={route('login')}>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold animate-pulse hover:animate-none">
                        Log In
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 border-t border-gray-800 animate-fade-in">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-green-400">Solo Fitness System</span>
              </div>
              <p className="text-gray-400">
                Rise through the ranks with our "Solo Leveling"-inspired fitness tracker.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-green-400 mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-green-400">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-green-400">How It Works</a></li>
                <li><a href="#ranks" className="text-gray-400 hover:text-green-400">Ranks</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-green-400">About</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-green-400 mb-4">Community</h3>
              <ul className="space-y-2">
                <li><Link href={route('login')} className="text-gray-400 hover:text-green-400">Log In</Link></li>
                <li><Link href={route('register')} className="text-gray-400 hover:text-green-400">Register</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Solo Fitness System. Inspired by "Solo Leveling."
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in;
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-in;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-in;
        }
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-slide-up-delay-1 { animation: slide-up 0.8s ease-out 0.2s backwards; }
        .animate-slide-up-delay-2 { animation: slide-up 0.8s ease-out 0.4s backwards; }
        .animate-slide-up-delay-3 { animation: slide-up 0.8s ease-out 0.6s backwards; }
        .animate-slide-up-delay-4 { animation: slide-up 0.8s ease-out 0.8s backwards; }
        .animate-slide-up-delay-5 { animation: slide-up 0.8s ease-out 1s backwards; }
        @keyframes fade-in-delay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-in 0.5s backwards;
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-2px, 0); }
          80% { transform: translate(2px, 0); }
          100% { transform: translate(0); }
        }
        .animate-glitch {
          animation: glitch 0.3s infinite alternate;
        }
      `}</style>
    </div>
  );
}