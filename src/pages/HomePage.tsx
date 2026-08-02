import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../data/generative-ai';

export function HomePage() {
  return (
    <>
      <section className="hero" aria-label="Visual AI Academy hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-content">
          <div>
            <motion.h1
              className="hero-brand"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              Visual AI Academy
            </motion.h1>
            <motion.p
              className="hero-headline"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.5 }}
            >
              See how Generative AI works—not just read about it.
            </motion.p>
            <motion.p
              className="hero-support"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.5 }}
            >
              A static learning lab for engineering students: animated mechanics, local interactive demos, and
              quizzes—no API keys required.
            </motion.p>
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.45 }}
            >
              <Link className="btn btn-primary" to="/generative-ai">
                Enter Generative AI track
              </Link>
              <Link className="btn btn-secondary" to="/generative-ai/ai-fundamentals/what-is-ai" style={{ color: '#13232c' }}>
                Start with What is AI?
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="orbit" />
            <div className="orbit orbit-2" />
            <motion.span
              className="node-chip"
              style={{ top: '18%', left: '18%' }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              Tokens
            </motion.span>
            <motion.span
              className="node-chip"
              style={{ top: '30%', right: '12%' }}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              Attention
            </motion.span>
            <motion.span
              className="node-chip"
              style={{ bottom: '22%', left: '28%' }}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.6 }}
            >
              RAG
            </motion.span>
            <motion.span
              className="node-chip"
              style={{ bottom: '18%', right: '22%' }}
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.4 }}
            >
              Agents
            </motion.span>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>One track for V1: Generative AI</h2>
            <p>
              Nine categories from fundamentals to production habits. Future tracks can appear later—Computer Vision is
              stubbed as coming soon in the nav.
            </p>
          </div>
          <div className="grid-3">
            {categories.map((c) => (
              <Link key={c.id} className="concept-card" to={`/generative-ai/${c.id}`}>
                <span className="pill">{c.conceptIds.length} concepts</span>
                <h3>{c.title}</h3>
                <p className="promise">{c.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
