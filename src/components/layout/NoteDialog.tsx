import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import '../../styles/note-dialog.css';

const LINES = [
  ['Bro,', 'I', 'did', 'this', 'for', 'you.'],
  ['Enjoy', 'the', 'learning'],
];

const GLYPHS = '01{}[]()<>/*+-=;:_$#&|!?→λΣ∇';
const COLUMNS = 16;
const GLYPHS_PER_COLUMN = 26;

/** Seeded so the rain is identical every open — no flicker from re-randomising on render. */
function seeded(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1103515245 + 12345) % 2147483648;
    return state / 2147483648;
  };
}

const rainColumns = Array.from({ length: COLUMNS }, (_, i) => {
  const next = seeded(i * 7919 + 13);
  return {
    id: i,
    left: (i + 0.5) * (100 / COLUMNS),
    duration: 5 + next() * 7,
    delay: -next() * 8,
    opacity: 0.3 + next() * 0.55,
    glyphs: Array.from({ length: GLYPHS_PER_COLUMN }, () =>
      GLYPHS[Math.floor(next() * GLYPHS.length)],
    ).join('\n'),
  };
});

type Props = {
  open: boolean;
  onClose: () => void;
};

export function NoteDialog({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  let wordIndex = 0;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="note-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
        >
          <motion.div
            className="note-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="note-dialog-message"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="note-rain" aria-hidden="true">
              {rainColumns.map((col) => (
                <div
                  key={col.id}
                  className="note-rain__col"
                  style={{
                    left: `${col.left}%`,
                    opacity: col.opacity,
                    animationDuration: `${col.duration}s`,
                    animationDelay: `${col.delay}s`,
                  }}
                >
                  <span className="note-rain__seg">{col.glyphs}</span>
                  <span className="note-rain__seg">{col.glyphs}</span>
                </div>
              ))}
            </div>

            <div className="note-panel__glow" aria-hidden="true" />

            <button
              type="button"
              ref={closeRef}
              className="note-close"
              onClick={onClose}
              aria-label="Close note"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>

            <div className="note-content">
              <motion.p
                className="note-kicker"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                
              </motion.p>

              <p className="note-message" id="note-dialog-message">
                {LINES.map((line, lineIndex) => (
                  <span className="note-message__line" key={lineIndex}>
                    {line.map((word) => {
                      const delay = 0.3 + wordIndex++ * 0.08;
                      return (
                        <motion.span
                          className="note-message__word"
                          key={word + delay}
                          initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                          transition={{ delay, duration: 0.42, ease: 'easeOut' }}
                        >
                          {word}
                        </motion.span>
                      );
                    })}
                    {lineIndex === LINES.length - 1 ? (
                      <motion.span
                        className="note-caret"
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + wordIndex * 0.08 }}
                      />
                    ) : null}
                  </span>
                ))}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

export function NoteButton() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        className="note-trigger"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="A note from the builder"
        title="A note from the builder"
      >
        <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 2.5h7.5L16.5 6.5V17a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z" />
          <path d="M12 2.5v4.5h4.5" />
          <path d="M7.5 11h5M7.5 14h3.5" />
        </svg>
      </button>
      <NoteDialog open={open} onClose={close} />
    </>
  );
}
