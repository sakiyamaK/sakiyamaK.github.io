import './App.css';

function App() {
  const openUrl = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app-wrapper">
      <div className="sidebar">
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <div className="sidebar-dot" style={{ backgroundColor: '#ffb6c1' }}></div>
            <span className="sidebar-link" onClick={() => window.scrollTo(0, 0)}>トップ</span>
          </li>
          <li className="sidebar-item">
            <div className="sidebar-dot" style={{ backgroundColor: '#00ff00' }}></div>
            <span className="sidebar-link" onClick={() => openUrl('https://twitter.com/sakiyamaK')}>Twitter</span>
          </li>
          <li className="sidebar-item">
            <div className="sidebar-dot" style={{ backgroundColor: '#00ffff' }}></div>
            <span className="sidebar-link" onClick={() => openUrl('https://github.com/sakiyamaK')}>GitHub</span>
          </li>
          <li className="sidebar-item">
            <div className="sidebar-dot" style={{ backgroundColor: '#0000ff' }}></div>
            <span className="sidebar-link">アプリ</span>
          </li>

        </ul>
      </div>

      <div className="container">
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
                onClick={() => openUrl('https://www.twitter.com/sakiyamaK')}
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
          <div className="column">
            <div className="latest-info-title">
              ★★★　最新情報　★★★
            </div>
            <div className="divider"></div>

            <div className="section-title">・Flutter</div>
            <ul>
              <li>
                &nbsp;&nbsp;- Flutter Webで「崎山圭のホームページ」を公開しました
              </li>
            </ul>
            <div className="divider"></div>

            <div className="section-title">・iOS</div>
            <ul>
              <li>
                &nbsp;&nbsp;- UIKitのままレイアウトのみ宣言的に書けるライブラリ「
                <span 
                  className="link-text"
                  onClick={() => openUrl('https://github.com/sakiyamaK/DeclarativeUIKit')}
                >
                  DeclarativeUIKit
                </span>
                」を公開しました
              </li>
            </ul>
            <div className="divider"></div>

            <div className="section-title">・プログラミング講師</div>
            <ul>
              <li>
                &nbsp;&nbsp;- 都内某所のプログラミング専門学校でiOSプログラミング講師を9ヶ月やりました
              </li>
              <li>
                &nbsp;&nbsp;- 主に土日の個人指導により３年で
                <span 
                  className="link-text"
                  onClick={() => openUrl('https://note.com/sakiyamak/n/nfa1354fc624b')}
                >
                  {' '}プログラミング未経験の文系7人をiOSエンジニアとして内定が出る
                </span>
                まで指導しました
              </li>
            </ul>
            <div className="divider"></div>

            <div className="section-title">・コンピュータサイエンス</div>
            <ul>
              <li>
                &nbsp;&nbsp;- 画像処理分野で
                <span 
                  className="link-text"
                  onClick={() => openUrl('https://www.osakafu-u.ac.jp/research/active/thesis/h21/')}
                >
                  コンピュータサイエンスの博士号
                </span>
                取得しました
              </li>
            </ul>
            <div className="divider"></div>

            <div className="info-text" style={{ marginTop: '32px' }}>
              当サイトの内容、テキスト、画像等の無断転載・無断使用を固く禁じます。<br/>
              また、まとめサイト等への引用を厳禁致します。<br/>
              お問い合わせはTwitterのDMでご連絡をお願い致します。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
