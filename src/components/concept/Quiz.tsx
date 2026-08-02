import { useMemo, useState } from 'react';
import type { QuizQuestion } from '../../types/content';

type Props = {
  questions: QuizQuestion[];
  onComplete: (score: number, total: number) => void;
};

export function Quiz({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce((acc, q) => acc + (answers[q.id] === q.correctOptionId ? 1 : 0), 0);
  }, [answers, questions]);

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
          disabled={Object.keys(answers).length < questions.length}
          onClick={() => {
            const finalScore = questions.reduce(
              (acc, q) => acc + (answers[q.id] === q.correctOptionId ? 1 : 0),
              0,
            );
            setSubmitted(true);
            onComplete(finalScore, questions.length);
          }}
        >
          Submit answers
        </button>
      ) : (
        <p>
          Score: <strong>{score}/{questions.length}</strong>
          {score / questions.length >= 0.67
            ? ' — Nice work. This concept can count as complete.'
            : ' — Review the explanations and try again after revisiting the lab.'}
        </p>
      )}
    </section>
  );
}
