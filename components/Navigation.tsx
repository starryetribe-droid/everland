import React, { useEffect, useState } from 'react';

export const Navbar: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('');

  const menuItems = [
    { href: "#overview", label: "Overview" },
    { href: "#interim-bg", label: "Chapter 1. Trend" },
    { href: "#proposal-background", label: "Background" },
    { href: "#interim-obj", label: "Chapter 2. Objective" },
    { href: "#proposal-objective", label: "Objective" },
    { href: "#interim-mkt", label: "Chapter 3. Concept" },
    { href: "#market-environment", label: "Market Env" },
    { href: "#interim-global", label: "Chapter 4. Strategy" },
    { href: "#global-cases", label: "Global Cases" },
    { href: "#digital-layering", label: "Digital Layering" },
    { href: "#service-model-comparison", label: "Service Model" },
    { href: "#season-rotation", label: "Season Rotation" },
    { href: "#hunters-journey", label: "Chapter 5. Journey" }, // Combined interim-journey and component since interim-journey was deleted? Wait, no, interim was deleted.
    // Wait, check App.tsx again. Interim section for Page 13 was deleted. So HuntersJourney follows SeasonRotation directly?
    // Let's re-verify App.tsx structure. 
    // <ServiceModelComparison /> -> <SeasonRotation /> -> <HuntersJourney />
    // So "Hunter's Journey" is the section.

    { href: "#hunters-journey", label: "Hunter's Journey" },
    { href: "#geofence-system", label: "Geofence System" },
    { href: "#rhythm-training", label: "Rhythm Training" },
    { href: "#social-challenge", label: "Social Challenge" },
    { href: "#nfc-keyring", label: "NFC Keyring" },
    { href: "#sing-along-attack", label: "Sing Along" },
    { href: "#finale-performance", label: "Finale" },
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