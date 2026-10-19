"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./theme-toggle";

const links = [["About", "/about"], ["Services", "/services"], ["Portfolio", "/portfolio"], ["Pricing", "/pricing"], ["FAQ", "/faq"], ["Contact", "/contact"]];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="header">
      <div className="wrap nav">
        <Link className="brand" href="/" aria-label="SK DEV TEAM home">
          <span className="mark">SK<span>.</span></span>
          <span>SK DEV TEAM<small>Software · Web · AI</small></span>
        </Link>
        <nav id="primary-navigation" className={menuOpen ? "primary-nav is-open" : "primary-nav"} aria-label="Main navigation">
          {links.map(([name, href]) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return <Link key={href} href={href} aria-current={active ? "page" : undefined} className={active ? "nav-active" : undefined}>{name}</Link>;
          })}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="btn btn-small header-cta" href="https://wa.me/923153558383?text=Assalam-o-Alaikum%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer">Let’s talk <span aria-hidden="true">↗</span></a>
          <button className="menu-toggle" type="button" aria-controls="primary-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen(open => !open)}>
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
