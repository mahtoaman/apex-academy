import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Pratik",
    company: "Atos Syntel",
    review: "Apex IT Academy played a pivotal role in securing my position at a reputable IT firm such as Atos Syntel. I'm deeply grateful to the entire Apex team for their instrumental support in shaping my career. Their standout feature lies in offering free placement assistance, setting them apart from others.",
  },
  {
    name: "Ruchika",
    company: "Top MNC",
    review: "Apex IT Academy offers fantastic opportunities for freshers to kickstart their careers. I'm delighted to have been a part of this institution. If you're seeking top-notch mentorship and excellent placements, this is the perfect destination for you.",
  },
  {
    name: "Akansha Singh",
    company: "Leading IT Firm",
    review: "My experience with Apex IT Academy was excellent. It offered me an exceptional platform to learn and acquire extensive knowledge in my course. The trainer was highly knowledgeable and experienced in the IT field, providing valuable insights throughout the program.",
  },
  {
    name: "Pawan",
    company: "Tech Company",
    review: "My experience at Apex IT Academy was truly enriching. The platform provided an excellent learning environment, allowing me to acquire comprehensive knowledge in my course. The trainer's expertise and experience in the IT field were commendable.",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-card">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-4">
            What Our Students <span className="gradient-text">Have to Say</span>
          </h2>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-2xl p-6 border card-hover"
            >
              <Quote className="text-accent/30 mb-4" size={32} />
              <p className="text-foreground/80 font-body leading-relaxed mb-6 text-sm">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">{t.name[0]}</span>
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Placed at {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="bg-background rounded-2xl p-6 border">
            <Quote className="text-accent/30 mb-4" size={28} />
            <p className="text-foreground/80 font-body leading-relaxed mb-6 text-sm">
              "{testimonials[current].review}"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">{testimonials[current].name[0]}</span>
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">{testimonials[current].name}</div>
                  <div className="text-xs text-muted-foreground">Placed at {testimonials[current].company}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-muted">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={next} className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-muted">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
