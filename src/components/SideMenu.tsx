
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    fetch('/menu.md')
      .then(res => res.text())
      .then(text => {
        const lines = text.split('\n');
        const newItems: MenuItem[] = [];
        
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
          }
        });
        setItems(newItems);
      })
      .catch(err => console.error('Failed to load menu', err));
  }, []);

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        {items.map((item, index) => (
          <li key={index} className="sidebar-item">
            <div 
              className="sidebar-dot" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span 
              className="sidebar-link" 
              onClick={() => {
                if (item.isExternal) {
                  window.open(item.slug, '_blank', 'noopener,noreferrer');
                } else {
                  onNavigate(item.slug);
                }
              }}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
