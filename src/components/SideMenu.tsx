
import { useEffect, useState } from 'react';
import { useMarkdown, prefetchMarkdown } from '../hooks/useMarkdown';

interface MenuItem {
  label: string;
  slug: string;
  color: string;
  isExternal: boolean;
}

interface SideMenuProps {
  onNavigate: (slug: string) => void;
}

export function SideMenu({ onNavigate }: SideMenuProps) {
  const [items, setItems] = useState<MenuItem[]>([]);
  const { content: menuText } = useMarkdown('/menu.md');

  useEffect(() => {
    if (!menuText) return;

    const lines = menuText.split('\n');
    const newItems: MenuItem[] = [];
    const pathsToPrefetch: string[] = [];
    
    // Regex to match: - [Label](Slug) #Color
    // Example: - [Top](/) #ffb6c1
    const regex = /-\s*\[(.*?)\]\((.*?)\)\s*(#[\da-fA-F]{3,6})?/;

    lines.forEach(line => {
      const match = line.match(regex);
      if (match) {
        const label = match[1];
        const slug = match[2];
        const color = match[3] || '#000000';
        const isExternal = slug.startsWith('http');
        newItems.push({ label, slug, color, isExternal });

        // Queue content for prefetching if it's an internal link (and not root which is loaded separately)
        if (!isExternal && slug !== '/') {
            pathsToPrefetch.push(`/contents/${slug}.md`);
        }
      }
    });
    
    setItems(newItems);
    
    // Aggressively prefetch all markdown files linked in the menu
    prefetchMarkdown(pathsToPrefetch);
    
  }, [menuText]);

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="sidebar-item"
            onClick={() => {
              if (item.isExternal) {
                window.open(item.slug, '_blank', 'noopener,noreferrer');
              } else {
                onNavigate(item.slug);
              }
            }}
          >
            <div 
              className="sidebar-dot" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="sidebar-link">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
