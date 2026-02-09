
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import rehypeRaw from 'rehype-raw';

import { useMarkdown } from '../hooks/useMarkdown';

interface MarkdownPageProps {
  slug: string;
  onNavigate: (slug: string) => void;
}

export function MarkdownPage({ slug, onNavigate }: MarkdownPageProps) {
  const { content, loading } = useMarkdown(`/contents/${slug}.md`);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={`markdown-content page-${slug}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({ node, ...props }) => {
            const href = props.href || '';
            const isInternal = href.startsWith('/') || (href.startsWith(window.location.origin) && !href.includes('.'));
            
            // If it's an internal link, use onNavigate
            if (isInternal && !href.startsWith('http')) {
              return (
                <a 
                  {...props} 
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(href);
                  }}
                />
              );
            }
            
            // External links or file downloads
            return <a {...props} target="_blank" rel="noopener noreferrer" />;
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
