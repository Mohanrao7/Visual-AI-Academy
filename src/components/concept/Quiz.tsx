import { useEffect, useMemo, useState } from 'react';
import type { QuizQuestion } from '../../types/content';

type Props = {
  conceptId: string;
  questions: QuizQuestion[];
  onComplete: (score: number, total: number) => void;
};

export function Quiz({ conceptId, questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Reset when navigating to another concept (component instance can be reused).
  useEffect(() => {
    setAnswers({});
    setSubmitted(false);
  }, [conceptId]);

  const answeredCount = questions.filter((q) => Boolean(answers[q.id])).length;
  const allAnswered = answeredCount >= questions.length && questions.length > 0;

  const score = useMemo(() => {
    return questions.reduce((acc, q) => acc + (answers[q.id] === q.correctOptionId ? 1 : 0), 0);
  }, [answers, questions]);

  if (questions.length === 0) {
    return (
      <section className="panel stack" id="quiz">
        <h2>Quick check quiz</h2>
        <p className="muted">No quiz questions for this concept yet.</p>
      </section>
    );
  }

  return (
    <section className="panel stack" id="quiz">
      <h2>Quick check quiz</h2>
      <p className="muted">Answer all questions, then submit for immediate feedback.</p>
      {questions.map((q, qi) => {
        const chosen = answers[q.id];
        return (
          <div key={q.id}>
            <p>
              <strong>
                {qi + 1}. {q.prompt}
              </strong>
            </p>
            {q.options.map((opt) => {
              let cls = 'quiz-option';
              if (submitted) {
                if (opt.id === q.correctOptionId) cls += ' correct';
                else if (chosen === opt.id) cls += ' wrong';
              } else if (chosen === opt.id) {
                cls += ' selected';
              }
              return (
                <button
                  key={opt.id}
                  type="button"
                  className={cls}
                  disabled={submitted}
                  aria-pressed={chosen === opt.id}
                  onClick={() => setAnswers((a) => ({ ...a, [q.id]: opt.id }))}
                >
                  {opt.text}
                </button>
              );
            })}
            {submitted ? <p className="muted">{q.explanation}</p> : null}
          </div>
        );
      })}
      {!submitted ? (
        <button
          type="button"
          className="btn btn-primary"
          disabled={!allAnswered}
          onClick={() => {
            const finalScore = questions.reduce(
              (acc, q) => acc + (answers[q.id] === q.correctOptionId ? 1 : 0),
              0,
            );
            setSubmitted(true);
            onComplete(finalScore, questions.length);
          }}
        >
          Submit answers{allAnswered ? '' : ` (${answeredCount}/${questions.length})`}
        </button>
      ) : (
        <div className="stack" style={{ gap: '0.75rem' }}>
          <p>
            Score: <strong>{score}/{questions.length}</strong>
            {score / questions.length >= 0.67
              ? ' — Nice work. This concept can count as complete.'
              : ' — Review the explanations, then try again.'}
          </p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
            }}
          >
            Try again
          </button>
        </div>
      )}
    </section>
  );
}
