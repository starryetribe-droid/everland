import React, { useEffect, useState } from 'react';

export const Navbar: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('');

  const menuItems = [
    { href: '#interim-bg', label: 'Chapter 1. Trend' },
    { href: '#interim-obj', label: 'Chapter 2. Objective' },
    { href: '#interim-mkt', label: 'Chapter 3. Market Insight' },
    { href: '#interim-global', label: 'Chapter 4. Strategy' },
    { href: '#interim-concept', label: 'Chapter 5. Concept' },
    { href: '#interim-plan', label: 'Chapter 6. Plan' },
    { href: '#expected-effects', label: 'Chapter 7. 기대효과' },
    { href: '#from-etribe', label: 'Chapter 8. Why ETRIBE?' },
    { href: '#pilot-app-architecture', label: 'Chapter 9. 기술 구현 전략' },
    { href: '#technical-requirements', label: 'Chapter 10. 상세 기술 요구사항' },
    { href: '#pilot-budget', label: 'Chapter 11. 파일럿 예산' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: document.querySelector('main'), // Observer root is the scroll container
        threshold: 0.5, // Trigger when 50% visible
      }
    );

    menuItems.forEach((item) => {
      const element = document.getElementById(item.href.replace('#', ''));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-10 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-8 select-none pointer-events-none">
      {menuItems.map((item, index) => {
        const isActive = activeId === item.href.replace('#', '');
        return (
          <a
            key={index}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="pointer-events-auto flex items-center gap-4 group transition-all duration-500"
          >
            {/* Minimal Line Indicator */}
            <div
              className={`h-[1px] transition-all duration-500 
                ${isActive ? 'w-10 bg-monimo-blue' : 'w-6 bg-gray-200 group-hover:w-10 group-hover:bg-monimo-blue'}
              `}
            ></div>

            {/* Label: Minimal Presence */}
            <span
              className={`text-[11px] font-bold transition-colors duration-500 tracking-tighter whitespace-nowrap
                ${isActive ? 'text-monimo-blue' : 'text-gray-300 group-hover:text-monimo-blue'}
              `}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
};