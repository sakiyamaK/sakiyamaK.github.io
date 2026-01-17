
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
  visitedSlugs: Set<string>;
}

export function SideMenu({ onNavigate, visitedSlugs }: SideMenuProps) {
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
          >
            <a 
              href={item.isExternal ? item.slug : `/${item.slug === '/' ? '' : item.slug}`}
              className={!item.isExternal && visitedSlugs.has(item.slug) ? 'visited' : ''}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              onClick={(e) => {
                if (item.isExternal) return;
                e.preventDefault();
                onNavigate(item.slug);
              }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                width: '100%', 
                padding: '12px 0',
                textDecoration: 'none', /* Prevent underline on the dot area */
              }}
            >
              <div 
                className="sidebar-dot" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="sidebar-link" style={{ textDecoration: 'underline' }}>
                {/* Text decoration underline to mimic link, but color comes from parent anchor which may be blue/visited-purple? 
                    If anchor color is blue, and we set color:inherit on anchor, it inherits black?
                    Wait, CSS 'a' selector has specificity. 
                    If we put style={{color: inherit}} on anchor, it overrides CSS 'a'. 
                    We should NOT put color: inherit on anchor if we want standard link colors.
                    But we don't want the DOT to be blue? Dot has no text so it has no color?
                    Dot is a div. It won't show blue text color.
                    So remove color: inherit from anchor style.
                */}
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
