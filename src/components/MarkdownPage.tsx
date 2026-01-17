
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import rehypeRaw from 'rehype-raw';

import { useMarkdown } from '../hooks/useMarkdown';

interface MarkdownPageProps {
  slug: string;
}

export function MarkdownPage({ slug }: MarkdownPageProps) {
  const { content, loading } = useMarkdown(`/contents/${slug}.md`);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={`markdown-content page-${slug}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
