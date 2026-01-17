import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import rehypeRaw from 'rehype-raw';

import { useMarkdown } from '../hooks/useMarkdown';

interface TopPageProps {
  onNavigate: (slug: string) => void;
  // openUrl no longer needed as we use native <a> tags
}

export function TopPage({ onNavigate }: TopPageProps) {
  const { content: newsContent } = useMarkdown('/contents/news.md');

  return (
    <>
      <h1 className="main-title">崎山 圭のホームページ</h1>
      
      <div className="content-grid">
        {/* Left Column */}
        <div className="column">
          <img src="/images/me.png" alt="Profile" className="profile-image" />
          
          <div className="profile-text">
            崎山 圭(さきやま けい)<br />
            Kei Sakiyama<br />
            生年月日: 1981年8月14日<br/>
            血液型: O型<br/>
            <a 
              href="/profile"
              className="link-text"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('profile');
              }}
            >
              プロフィール
            </a>
          </div>

          <div className="spacer"></div>

          <div className="info-text">
            if you have any enquiries<br/>
            regarding my development schedule,<br/>
            or would like to make an enquiry concerning future<br/>
            projects, please do not hesitate to contact me through<br/>
            the following X(SNS) account.
          </div>

          <div className="contact-row">
            X(SNS): <a 
              href="https://www.twitter.com/sakiyamaK"
              className="link-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              @sakiyamaK
            </a>
          </div>

          <div className="contact-row">
            Github: <a 
              href="https://github.com/sakiyamaK"
              className="link-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              @sakiyamaK
            </a>
          </div>

          <div className="spacer"></div>
          <div className="spacer"></div>

          <div className="info-text">
            所属: 働きたくない<br/>
            住所: 都内某所
          </div>
        </div>

        {/* Right Column */}
        <div className="column top-page-news">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {newsContent}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
