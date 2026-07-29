import { useEffect, useState } from 'react';
import './ViewerCounter.css';

const NAMESPACE = 'nupam-coins'; // change to something unique to you
const KEY = 'home-page-views';
const DIGIT_COUNT = 6;

export default function ViewerCounter() {
  const [count, setCount] = useState(null);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function bumpCounter() {
      try {
        const res = await fetch(
          `https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`
        );
        if (!res.ok) throw new Error('bad response');
        const data = await res.json();
        if (!cancelled) setCount(data.value);
      } catch (err) {
        const local = Number(localStorage.getItem(KEY) || 0) + 1;
        localStorage.setItem(KEY, local);
        if (!cancelled) setCount(local);
      }
    }

    bumpCounter();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (count === null) return;
    // trigger the roll-in animation a beat after mount
    const t = setTimeout(() => setSettled(true), 50);
    return () => clearTimeout(t);
  }, [count]);

  const digits = String(count ?? 0).padStart(DIGIT_COUNT, '0').split('');

  return (
    <div className="viewer-counter" aria-label={`Visitor count: ${count ?? '...'}`}>
      <span className="viewer-counter__label">Visitors Since Site relaunched in 2026: </span>
      <div className="viewer-counter__odometer">
        {count === null ? (
          <span className="viewer-counter__loading">· · ·</span>
        ) : (
          digits.map((d, i) => (
            <span className="viewer-counter__cell" key={i}>
              <span
                className={`viewer-counter__reel${settled ? ' is-settled' : ''}`}
                style={{
                  '--digit': d,
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {Array.from({ length: 10 }, (_, n) => (
                  <span className="viewer-counter__num" key={n}>{n}</span>
                ))}
              </span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}