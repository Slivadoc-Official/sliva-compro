import { Icon } from './Icons';

export function RibbonArt({ small = false }: { small?: boolean }) {
  return (
    <div className={`ribbon-art ${small ? 'ribbon-small' : ''}`} aria-hidden="true">
      <div className="ribbon-halo" />
      <svg className="ribbon-svg" viewBox="0 0 620 600" fill="none">
        <defs>
          <linearGradient
            id={small ? 'ribbon-a-small' : 'ribbon-a'}
            x1="170"
            y1="100"
            x2="450"
            y2="480"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#80E8FA" />
            <stop offset=".27" stopColor="#1BB4E6" />
            <stop offset=".6" stopColor="#1489D2" />
            <stop offset="1" stopColor="#03419B" />
          </linearGradient>
          <linearGradient
            id={small ? 'ribbon-b-small' : 'ribbon-b'}
            x1="290"
            y1="220"
            x2="360"
            y2="490"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#044EAC" />
            <stop offset=".48" stopColor="#0098DA" />
            <stop offset="1" stopColor="#7FE5F3" />
          </linearGradient>
          <linearGradient
            id={small ? 'ribbon-c-small' : 'ribbon-c'}
            x1="170"
            y1="100"
            x2="440"
            y2="230"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B8F8FF" />
            <stop offset=".45" stopColor="#3AC5ED" />
            <stop offset="1" stopColor="#1474CA" />
          </linearGradient>
          <filter
            id={small ? 'ribbon-shadow-small' : 'ribbon-shadow'}
            x="0"
            y="0"
            width="620"
            height="620"
            filterUnits="userSpaceOnUse"
          >
            <feDropShadow
              dx="10"
              dy="25"
              stdDeviation="19"
              floodColor="#1376B4"
              floodOpacity=".18"
            />
          </filter>
        </defs>
        <g filter={`url(#${small ? 'ribbon-shadow-small' : 'ribbon-shadow'})`}>
          <path
            d="M449 133C395 73 251 72 178 140C108 205 127 277 213 308L346 357C396 375 397 416 354 442C302 473 224 454 186 410"
            stroke={`url(#${small ? 'ribbon-a-small' : 'ribbon-a'})`}
            strokeWidth="92"
            strokeLinecap="round"
          />
          <path
            d="M185 410C233 474 345 487 405 438C467 387 442 314 364 285L242 240C195 224 184 188 216 164"
            stroke={`url(#${small ? 'ribbon-b-small' : 'ribbon-b'})`}
            strokeWidth="92"
            strokeLinecap="round"
          />
          <path
            d="M216 164C267 121 376 114 449 133"
            stroke={`url(#${small ? 'ribbon-c-small' : 'ribbon-c'})`}
            strokeWidth="91"
            strokeLinecap="round"
          />
          <path
            d="M217 137C267 104 351 99 409 111"
            stroke="#DAFCFF"
            strokeOpacity=".6"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M211 437C257 477 341 484 394 447"
            stroke="#B8F7FF"
            strokeOpacity=".5"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>
      {!small && (
        <>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="floating-tag tag-code">
            <span className="tag-icon">
              <Icon name="code" size={19} />
            </span>
            <div>
              <b>Built around your ideas.</b>
              <span>Dirancang untuk bertumbuh.</span>
            </div>
          </div>
          <div className="floating-tag tag-launch">
            <span className="success-dot" />
            <span>From possibility to reality</span>
            <Icon name="diagonal" size={16} />
          </div>
          <span className="art-coordinate">SLIVA / DIGITAL POSSIBILITIES</span>
          <div className="art-spark">✳</div>
        </>
      )}
    </div>
  );
}

export function ProductPreview({
  theme = 'business',
  compact = false,
}: {
  theme?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`product-preview preview-${theme} ${compact ? 'preview-compact' : ''}`}
      aria-hidden="true"
    >
      <div className="preview-orbit" />
      <div className="mock-window">
        <div className="mock-topbar">
          <span className="mock-dots">
            <i />
            <i />
            <i />
          </span>
          <span>
            {theme === 'public'
              ? 'Portal Layanan'
              : theme === 'ai'
                ? 'Sliva AI Workspace'
                : 'Business Overview'}
          </span>
          <span className="mock-avatar">S</span>
        </div>
        <div className="mock-body">
          <div className="mock-sidebar">
            <span className="mock-brand">
              s<span>↗</span>
            </span>
            {['monitor', 'layers', 'chart', 'shield'].map((x, i) => (
              <span className={i === 0 ? 'mock-active' : ''} key={x}>
                <Icon name={x} size={16} />
              </span>
            ))}
          </div>
          {theme === 'ai' ? (
            <div className="mock-content mock-chat">
              <span className="mock-eyebrow">YOUR KNOWLEDGE, CONNECTED.</span>
              <div className="mock-ai-icon">
                <Icon name="sparkles" size={30} />
              </div>
              <strong>Ada yang bisa dibantu?</strong>
              <p>Temukan jawaban. Lanjutkan ide Anda.</p>
              <div className="mock-chat-prompt">
                Ringkas panduan onboarding tim <Icon name="diagonal" size={13} />
              </div>
              <div className="mock-answer">
                <Icon name="sparkles" size={16} />
                <span>
                  Berikut ringkasan dari dokumen tim Anda...
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <span className="mock-reference">
                <Icon name="book" size={12} /> Sumber: Panduan internal
              </span>
            </div>
          ) : (
            <div className="mock-content">
              <span className="mock-eyebrow">
                {theme === 'public' ? 'LAYANAN DIGITAL TERPADU' : 'YOUR BUSINESS, AT A GLANCE.'}
              </span>
              <strong>
                {theme === 'public' ? 'Selamat datang, warga.' : 'Halo, selamat pagi 👋'}
              </strong>
              <p>
                {theme === 'public'
                  ? 'Akses layanan. Tanpa jarak.'
                  : 'Mari lihat aktivitas bisnis hari ini.'}
              </p>
              <div className="mock-stats">
                {(theme === 'public'
                  ? ['Pengajuan saya', 'Dalam proses', 'Selesai']
                  : ['Pendapatan', 'Pesanan', 'Pelanggan']
                ).map((x, i) => (
                  <div key={x}>
                    <span>{x}</span>
                    <b>
                      {theme === 'public' ? ['04', '02', '02'][i] : ['Rp 24,8 jt', '128', '842'][i]}
                    </b>
                    <small>{theme === 'public' ? 'Lihat status →' : '+12,8% ↗'}</small>
                  </div>
                ))}
              </div>
              {theme === 'public' ? (
                <div className="mock-services">
                  {['Administrasi', 'Perizinan', 'Informasi'].map((x, i) => (
                    <div key={x}>
                      <Icon name={['landmark', 'shield', 'book'][i]} size={20} />
                      <span>{x}</span>
                      <Icon name="diagonal" size={13} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mock-chart">
                  <div>
                    <b>Ringkasan penjualan</b>
                    <span>Minggu ini⌄</span>
                  </div>
                  <div className="chart-bars">
                    {[35, 55, 42, 75, 58, 92, 70, 85, 63, 97, 79, 100].map((x, i) => (
                      <i key={i} style={{ height: `${x}%` }} />
                    ))}
                  </div>
                  <div className="chart-labels">
                    <span>Sen</span>
                    <span>Sel</span>
                    <span>Rab</span>
                    <span>Kam</span>
                    <span>Jum</span>
                  </div>
                </div>
              )}
              <div className="mock-line">
                <i />
                <span />
                <span />
              </div>
              <div className="mock-line">
                <i />
                <span />
                <span />
              </div>
            </div>
          )}
        </div>
      </div>
      <span className="preview-badge">
        <span className="success-dot" />
        {theme === 'public'
          ? 'Terhubung. Lebih mudah.'
          : theme === 'ai'
            ? 'Less repetitive. More creative.'
            : 'Everything, in one place.'}
      </span>
    </div>
  );
}

export function ArticleArt({ theme, index }: { theme: string; index: number }) {
  return (
    <div className={`article-art article-${theme}`} aria-hidden="true">
      <span className="article-art-label">SLIVA INSIGHT / 0{index + 1}</span>
      <div className="article-shape shape-one" />
      <div className="article-shape shape-two" />
      <div className="article-art-icon">
        <Icon
          name={['code', 'globe', 'store', 'layers', 'sparkles', 'chart'][index % 6]}
          size={48}
        />
      </div>
      <span className="article-art-star">✳</span>
      <span className="article-art-bottom">Ideas worth building.</span>
    </div>
  );
}
