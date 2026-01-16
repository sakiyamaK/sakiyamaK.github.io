import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface TopPageProps {
  openUrl: (url: string) => void;
  onNavigate: (slug: string) => void;
}

export function TopPage({ openUrl, onNavigate }: TopPageProps) {
  const [newsContent, setNewsContent] = useState('');

  useEffect(() => {
    fetch('/content/news.md')
      .then(res => res.text())
      .then(text => setNewsContent(text))
      .catch(err => console.error('Failed to load news', err));
  }, []);

  return (
    <>
      <h1 className="main-title">崎山圭のホームページ</h1>
      
      <div className="content-grid">
        {/* Left Column */}
        <div className="column">
          <img src="/images/me.png" alt="Profile" className="profile-image" />
          
          <div className="profile-text">
            崎山 圭(さきやま けい)<br/>
            生年月日: 1981年8月14日<br/>
            血液型: O型<br/>
            <span 
              className="link-text"
              onClick={() => onNavigate('profile')}
            >
              プロフィール
            </span>
          </div>

          <div className="spacer"></div>

          <div className="info-text">
            if you have any enquiries<br/>
            regarding my development schedule,<br/>
            or would like to make an enquiry concerning future<br/>
            projects, please do not hesitate to contact me through<br/>
            the following twitter account.
          </div>

          <div className="contact-row">
            twitter: <span 
              className="link-text"
              onClick={() => openUrl('https://www.twitter.com/sakiyamaK')}
            >
              @sakiyamaK
            </span>
          </div>

          <div className="contact-row">
            github: <span 
              className="link-text"
              onClick={() => openUrl('https://github.com/sakiyamaK')}
            >
              @sakiyamaK
            </span>
          </div>

          <div className="spacer"></div>
          <div className="spacer"></div>

          <div className="info-text">
            所属:<br/>
            働きたくない<br/>
            都内某所
          </div>
        </div>

        {/* Right Column */}
        <div className="column top-page-news">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {newsContent}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
