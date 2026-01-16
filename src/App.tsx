import { useState } from 'react';
import './App.css';
import { SideMenu } from './components/SideMenu';
import { TopPage } from './components/TopPage';
import { MarkdownPage } from './components/MarkdownPage';

function App() {
  const [currentSlug, setCurrentSlug] = useState('/');

  const openUrl = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleNavigate = (slug: string) => {
    setCurrentSlug(slug);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-wrapper">
      <SideMenu onNavigate={handleNavigate} />

      <div className="container">
        {currentSlug === '/' ? (
          <TopPage openUrl={openUrl} />
        ) : (
          <MarkdownPage slug={currentSlug} />
        )}
      </div>
    </div>
  );
}

export default App;
