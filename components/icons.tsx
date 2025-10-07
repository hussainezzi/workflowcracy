import React from 'react';

interface IconProps {
  className?: string;
}

const defaultIconClass = "h-8 w-8";

export const LogoIcon: React.FC<IconProps> = ({ className = 'h-12 w-auto' }) => (
    <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' className={className} aria-label="WorkflowCracy Logo">
      <defs>
        <linearGradient id='logoGradient' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stopColor='#00BCD4'/>
          <stop offset='1' stopColor='#007B8A'/>
        </linearGradient>
      </defs>
      <path d='M18 20L35 80L52 40L69 80L86 20' stroke='url(#logoGradient)' strokeWidth='12' fill='none' strokeLinecap='round' strokeLinejoin='round'/>
      <circle cx='52' cy='38' r='8' fill='#FF8C00'/>
    </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.62 1.62 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.96 3.36 4.66z"></path>
    </svg>
);

export const GitHubIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

export const YouTubeIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
);

export const StreamlitIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.23 10.64L3.37 16.19l-1.3-1.92L11.5 8.08c.5-.35 1.16-.35 1.66 0l9.43 6.19-1.3 1.92-8.06-5.63zM12.23 15.77l-5.63 3.57-1.3-1.92 6.28-4.22c.4-.27.9-.27 1.3 0l6.28 4.22-1.3 1.92-5.63-3.57z"/>
    </svg>
);

export const WebsiteIcon: React.FC<IconProps> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 01-.3-17.983A9 9 0 0112 3c4.97 0 9 4.03 9 9s-4.03 9-9 9zM9 8.25a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6A.75.75 0 019 8.25zm4.5 0a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
);

export const CogIcon: React.FC<IconProps> = ({ className = defaultIconClass }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l-1.41-.513M5.106 17.25l1.41-.513m14.095-5.13l-1.41-.513M12 21a9 9 0 100-18 9 9 0 000 18z" />
  </svg>
);

export const ChartBarIcon: React.FC<IconProps> = ({ className = defaultIconClass }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

export const ChatBubbleLeftRightIcon: React.FC<IconProps> = ({ className = defaultIconClass }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72 3.72a1.05 1.05 0 01-1.485 0l-3.72-3.72a1.05 1.05 0 01-1.485 0l-3.72 3.72a1.05 1.05 0 01-1.485 0l-3.72-3.72A1.05 1.05 0 013 16.981V12.7c0-.97.616-1.813 1.5-2.097m6.5-1.043c.43-.251.96-.251 1.39 0l3.72 2.16 3.72-2.16a1.05 1.05 0 000-1.822l-3.72-2.16a1.05 1.05 0 00-1.39 0l-3.72 2.16-3.72-2.16a1.05 1.05 0 00-1.39 0l-3.72 2.16a1.05 1.05 0 000 1.822l3.72 2.16 3.72-2.16z" />
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className = defaultIconClass }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const BoltIcon: React.FC<IconProps> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );

export const DocumentChartBarIcon: React.FC<IconProps> = ({ className = defaultIconClass }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.023.57-2.206 0-3.228m-5.541 9.491a9.095 9.095 0 01-3.741-.479 3 3 0 014.682-2.72m-7.5-2.962c-.57 1.023-.57 2.206 0 3.228m12.454-9.491c.572-.446 1.283-.446 1.855 0a3 3 0 014.682 2.72m-7.5 2.962c.57 1.023.57 2.206 0 3.228m0 0a3 3 0 10-5.542 2.087m5.542-2.087a3 3 0 115.542 2.087m0 0a9.094 9.094 0 01-9.558 2.14m-2.25-2.14a9.094 9.094 0 00-9.558 2.14m0 0a3 3 0 01-4.682-2.72m7.5 2.962c-.57-1.023-.57-2.206 0-3.228m0 0a3 3 0 10-5.542-2.087m5.542-2.087a3 3 0 115.542 2.087" />
    </svg>
  );
  
export const ChatBubbleOvalLeftEllipsisIcon: React.FC<IconProps> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.53-.388m-5.383-.948a.863.863 0 01.44-1.283A4.373 4.373 0 0014.25 6.75c-2.451 0-4.556 1.003-5.962 2.536a4.373 4.373 0 01-4.42 1.283.863.863 0 00-1.283.44A4.373 4.373 0 003 12.75c0 2.451 1.003 4.556 2.536 5.962a4.373 4.373 0 011.283 4.42.863.863 0 00.44 1.283 4.373 4.373 0 005.962-2.536A9.76 9.76 0 0112 20.25c4.97 0 9-3.694 9-8.25z" />
    </svg>
);

export const CpuChipIcon: React.FC<IconProps> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5M12 4.5v-1.5m0 18v-1.5M15.75 21v-1.5M18 15.75h1.5M18 12h1.5m-15 0H6m12 0h1.5m-15 3.75H6M12 18v1.5m-3.75-18v1.5M12 9a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v.01M6.343 6.343l.01.01M3 12h.01M6.343 17.657l.01.01M12 21v-.01M17.657 17.657l.01.01M21 12h-.01M17.657 6.343l.01.01M12 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const XIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);