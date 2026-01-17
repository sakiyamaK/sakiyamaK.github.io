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



  const [visitedSlugs, setVisitedSlugs] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('visitedSlugs');
    return saved ? new Set(JSON.parse(saved)) : new Set(['/']);
  });

  const handleNavigate = (slug: string) => {
    // Determine the actual slug value
    const targetSlug = slug === '/' ? '/' : (slug.startsWith('/') ? slug.slice(1) : slug);
    
    // Update visited slugs
    const newVisited = new Set(visitedSlugs);
    newVisited.add(targetSlug);
    setVisitedSlugs(newVisited);
    localStorage.setItem('visitedSlugs', JSON.stringify(Array.from(newVisited)));

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
      <SideMenu onNavigate={handleNavigate} visitedSlugs={visitedSlugs} />

      <div className="container">
        {currentSlug === '/' ? (
          <TopPage onNavigate={handleNavigate} />
        ) : (
          <MarkdownPage slug={currentSlug} />
        )}
      </div>
    </div>
  );
}

export default App;
