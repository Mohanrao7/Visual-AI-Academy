import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { HomePage } from './pages/HomePage';

const GenerativeAIPage = lazy(() =>
  import('./pages/GenerativeAIPage').then((m) => ({ default: m.GenerativeAIPage })),
);
const CategoryPage = lazy(() =>
  import('./pages/CategoryPage').then((m) => ({ default: m.CategoryPage })),
);
const ConceptPage = lazy(() =>
  import('./pages/ConceptPage').then((m) => ({ default: m.ConceptPage })),
);

function RouteFallback() {
  return (
    <div className="section container">
      <p className="muted" role="status">
        Loading…
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route
            path="generative-ai"
            element={
              <Suspense fallback={<RouteFallback />}>
                <GenerativeAIPage />
              </Suspense>
            }
          />
          <Route
            path="generative-ai/:categoryId"
            element={
              <Suspense fallback={<RouteFallback />}>
                <CategoryPage />
              </Suspense>
            }
          />
          <Route
            path="generative-ai/:categoryId/:conceptId"
            element={
              <Suspense fallback={<RouteFallback />}>
                <ConceptPage />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
