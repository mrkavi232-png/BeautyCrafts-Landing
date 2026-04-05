import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { 
  Menu, X, Instagram, Facebook, Twitter, CheckCircle, Leaf, Sparkles, 
  Moon, Sun, Flower2, Sprout, Gem, Scissors, ShoppingBag 
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [state, handleSubmit] = useForm('xqeggvlw');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Countdown Logic
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Fade-in Animation on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const categories = [
    { name: 'Flower Bouquets', icon: <Flower2 size={32} />, desc: 'Vibrant, hand-tied arrangements for every occasion.' },
    { name: 'Artisan Pots', icon: <Sprout size={32} />, desc: 'Hand-painted ceramic pots that breathe life into your space.' },
    { name: 'Handcrafted Jewelry', icon: <Gem size={32} />, desc: 'Elegant earrings and necklaces inspired by nature.' },
    { name: 'Hair Accessories', icon: <Scissors size={32} />, desc: 'Delicate clips and pins to add a touch of sparkle.' },
  ];

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-brand-bg text-brand-primary">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-serif font-bold tracking-tight text-brand-primary">
                Malee<span className="text-brand-accent">Crafts</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium hover:text-brand-secondary transition-colors">About</a>
              <a href="#gallery" className="text-sm font-medium hover:text-brand-secondary transition-colors">Gallery</a>
              <a href="#contact" className="text-sm font-medium hover:text-brand-secondary transition-colors">Contact</a>
              
              <a 
                href="#newsletter" 
                className="bg-brand-primary text-brand-bg px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-secondary hover:text-brand-bg transition-all duration-300 shadow-sm"
              >
                Notify Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-brand-primary hover:text-brand-secondary transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-bg border-t border-brand-accent/10 py-4 px-4 space-y-4 shadow-lg">
            <a href="#about" className="block text-base font-medium hover:text-brand-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#gallery" className="block text-base font-medium hover:text-brand-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <a href="#contact" className="block text-base font-medium hover:text-brand-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a 
              href="#newsletter" 
              className="block w-full text-center bg-brand-primary text-brand-bg py-3 rounded-full font-semibold hover:bg-brand-secondary transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Notify Me
            </a>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden min-h-[90vh] flex items-center">
          {/* Background Image with Vibrant Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1920" 
              alt="Vibrant Flower Bouquet" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-bg/80 via-brand-bg/40 to-brand-bg/80" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="fade-in">
              <span className="inline-block px-6 py-2 mb-6 text-xs font-bold tracking-widest uppercase bg-brand-secondary text-brand-bg rounded-full shadow-lg shadow-brand-secondary/30">
                Launching Soon
              </span>
              <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight drop-shadow-sm">
                Handcrafted Beauty, <br />
                <span className="text-brand-secondary italic">From Our Heart to Yours.</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-2xl text-brand-primary mb-12 leading-relaxed font-semibold">
                From vibrant bouquets to artisan jewelry, we're curating a collection that celebrates the soul of craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="#newsletter" 
                  className="bg-brand-primary text-brand-bg px-12 py-5 rounded-full text-lg font-bold hover:bg-brand-secondary hover:text-brand-bg transition-all duration-300 shadow-2xl shadow-brand-primary/20 hover:scale-105"
                >
                  Join the Waitlist
                </a>
                <a 
                  href="#gallery" 
                  className="bg-white/40 backdrop-blur-md border-2 border-brand-primary/20 px-12 py-5 rounded-full text-lg font-bold hover:border-brand-secondary hover:text-brand-secondary transition-all duration-300 hover:scale-105"
                >
                  Explore Collection
                </a>
              </div>
            </div>
          </div>
          
          {/* Colorful Decorative Blobs - Pink and Green Mixture */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-secondary/40 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-brand-accent/40 rounded-full blur-[140px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-secondary/10 rounded-full blur-[180px] -z-20" />
        </section>

        {/* Categories Section */}
        <section id="gallery" className="py-24 relative overflow-hidden">
          {/* Background Image for Gallery */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&q=80&w=1920" 
              alt="Vibrant Floral Accessories" 
              className="w-full h-full object-cover opacity-15"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 via-brand-accent/5 to-brand-secondary/5" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Handcrafted Collection</h2>
              <div className="w-24 h-1.5 bg-brand-secondary mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((cat, idx) => (
                <div key={idx} className="fade-in group p-8 rounded-3xl bg-white/70 backdrop-blur-md hover:bg-white/90 hover:shadow-2xl transition-all duration-500 border border-brand-secondary/20 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-brand-secondary text-brand-bg rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-brand-secondary/20">
                    {cat.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{cat.name}</h3>
                  <p className="text-brand-primary/80 leading-relaxed font-medium">
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="about" className="py-24 relative overflow-hidden">
          {/* Background Gradient for About */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 via-transparent to-brand-accent/5 -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="fade-in group p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-500 border border-brand-secondary/10 hover:shadow-2xl hover:shadow-brand-secondary/10">
                <div className="w-20 h-20 bg-brand-accent text-brand-bg rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-brand-accent/20">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Uncompromising Quality</h3>
                <p className="text-brand-primary/80 leading-relaxed text-lg">
                  Every piece is hand-selected and inspected. We use only the finest materials that stand the test of time.
                </p>
              </div>

              <div className="fade-in group p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-500 border border-brand-secondary/10 hover:shadow-2xl hover:shadow-brand-secondary/10" style={{ transitionDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-brand-secondary text-brand-bg rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 shadow-lg shadow-brand-secondary/20">
                  <Sparkles size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Unique Design</h3>
                <p className="text-brand-primary/80 leading-relaxed text-lg">
                  No two items are exactly alike. Our artisans infuse their personal touch into every curve and stitch.
                </p>
              </div>

              <div className="fade-in group p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-500 border border-brand-secondary/10 hover:shadow-2xl hover:shadow-brand-accent/10" style={{ transitionDelay: '0.4s' }}>
                <div className="w-20 h-20 bg-brand-accent text-brand-bg rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-brand-accent/20">
                  <Leaf size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Eco-Friendly</h3>
                <p className="text-brand-primary/80 leading-relaxed text-lg">
                  We believe in sustainable beauty. Our processes are designed to minimize waste and respect our planet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="py-24 bg-brand-primary text-brand-bg relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">Launching In</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <div className="text-4xl md:text-6xl font-bold mb-2 font-mono">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-secondary">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-24 relative overflow-hidden">
          {/* Background Image for Newsletter */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1516195851888-6f1a981a862e?auto=format&fit=crop&q=80&w=1920" 
              alt="Floral Craftsmanship" 
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg" />
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="fade-in bg-white/70 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-brand-secondary/20 border border-brand-secondary/30">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-primary">Be the First to Know</h2>
              <p className="text-brand-primary/90 mb-10 text-xl font-medium">
                Sign up for early access, exclusive previews, and a special launch-day discount.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter your email address"
                    className={`w-full px-8 py-5 rounded-full border-2 transition-all outline-none text-lg bg-white/80 text-brand-primary shadow-inner ${
                      state.errors ? 'border-red-400 focus:border-red-500' : 'border-brand-secondary/20 focus:border-brand-secondary'
                    }`}
                  />
                  <button 
                    type="submit"
                    disabled={state.submitting}
                    className="mt-4 md:mt-0 md:absolute md:right-2 md:top-2 md:bottom-2 bg-brand-primary text-brand-bg px-12 py-3 md:py-0 rounded-full font-bold hover:bg-brand-secondary hover:text-brand-bg transition-all duration-300 disabled:opacity-50 shadow-lg"
                  >
                    {state.submitting ? 'Joining...' : 'Notify Me'}
                  </button>
                </div>
                
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 font-medium mt-2 block"
                />
                
                {state.succeeded && (
                  <p className="text-green-600 font-medium mt-4 flex items-center justify-center gap-2">
                    <CheckCircle size={20} /> You're on the list! We'll be in touch soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-brand-primary text-brand-bg/80 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-serif font-bold tracking-tight text-brand-bg mb-6 block">
                Malee<span className="text-brand-accent">Crafts</span>
              </span>
              <p className="max-w-sm mb-8 leading-relaxed">
                Celebrating the art of the handmade. We bring together tradition and modern aesthetics to create pieces that tell a story.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="hover:text-brand-accent transition-colors"><Instagram size={24} /></a>
                <a href="#" className="hover:text-brand-accent transition-colors"><Facebook size={24} /></a>
                <a href="#" className="hover:text-brand-accent transition-colors"><Twitter size={24} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-brand-bg font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-4 text-base">
                <li><a href="#about" className="hover:text-brand-accent transition-colors">About Us</a></li>
                <li><a href="#gallery" className="hover:text-brand-accent transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-brand-bg font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
              <ul className="space-y-4 text-base">
                <li>hello@maleecrafts.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Artisan Way, <br />Craft City, CA 90210</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center text-xs tracking-widest uppercase">
            <p>&copy; {new Date().getFullYear()} MaleeCrafts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
