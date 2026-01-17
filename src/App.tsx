import { useState, useEffect } from 'react';
import './App.css';
import { SideMenu } from './components/SideMenu';
import { TopPage } from './components/TopPage';
import { MarkdownPage } from './components/MarkdownPage';

function App() {
  const [currentSlug, setCurrentSlug] = useState('/');

  useEffect(() => {
    // Initial state replacement to ensure we can go back to 'top' if we start here
    window.history.replaceState({ slug: '/' }, '', '');

    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.slug) {
        setCurrentSlug(event.state.slug);
      } else {
        // Fallback to top if state is missing (e.g. initial load or external nav)
        setCurrentSlug('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openUrl = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleNavigate = (slug: string) => {
    // Determine the actual slug value
    const targetSlug = slug === '/' ? '/' : (slug.startsWith('/') ? slug.slice(1) : slug);
    
    // Only push state if it's different to avoid cluttering history
    if (targetSlug !== currentSlug) {
        // use pushState with the same URL (null or empty string)
        window.history.pushState({ slug: targetSlug }, '', '');
        setCurrentSlug(targetSlug);
        window.scrollTo(0, 0);
    }
  };

  return (
    <div className="app-wrapper">
      <SideMenu onNavigate={handleNavigate} />

      <div className="container">
        {currentSlug === '/' ? (
          <TopPage openUrl={openUrl} onNavigate={handleNavigate} />
        ) : (
          <MarkdownPage slug={currentSlug} />
        )}
      </div>
    </div>
  );
}

export default App;
