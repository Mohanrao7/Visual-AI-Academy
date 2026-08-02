import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { BackBar } from './BackBar';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

/** Scroll to top on route change — works with BrowserRouter (ScrollRestoration needs a data router). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function AppShell() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <main>
        <BackBar />
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}
