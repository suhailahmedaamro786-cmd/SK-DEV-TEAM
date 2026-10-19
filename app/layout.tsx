import type { Metadata, Viewport } from "next";
import Link from "next/link";
import SiteHeader from "./site-header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sk-dev-team.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "SK DEV TEAM | Premium Web, Software & AI Solutions", template: "%s | SK DEV TEAM" },
  description: "SK DEV TEAM builds modern websites, custom web applications, and practical AI-powered business solutions in Dadu, Sindh, Pakistan and beyond.",
  keywords: ["software development", "web development", "AI solutions", "business websites", "web applications", "Dadu", "Sindh", "SK DEV TEAM"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: siteUrl, siteName: "SK DEV TEAM", title: "SK DEV TEAM | Premium Web, Software & AI Solutions", description: "Modern websites, custom software, and practical AI-powered solutions for growing businesses." },
  twitter: { card: "summary_large_image", title: "SK DEV TEAM | Web, Software & AI", description: "Modern websites, custom software, and practical AI-powered solutions." },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#08090c" }, { media: "(prefers-color-scheme: light)", color: "#f8fafc" }],
};

const themeInit = `try{var t=localStorage.getItem("sk-dev-team-theme");if(t!=="light"&&t!=="dark")t="dark";document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){document.documentElement.dataset.theme="dark";document.documentElement.style.colorScheme="dark"}`;
const footerLinks = [["About", "/about"], ["Services", "/services"], ["Portfolio", "/portfolio"], ["Pricing", "/pricing"], ["FAQ", "/faq"]];
function Footer() {
  return <footer className="footer"><div className="wrap footergrid"><div><Link className="brand" href="/"><span className="mark">SK<span>.</span></span><span>SK DEV TEAM<small>Software · Web · AI</small></span></Link><p>Thoughtful websites, custom software, and useful digital tools for businesses and growing teams.</p></div><div><b>Explore</b>{footerLinks.map(([n, h]) => <Link key={h} href={h}>{n}</Link>)}</div><div><b>Contact</b><span>Dadu, Sindh, Pakistan</span><a href="https://wa.me/923153558383" target="_blank" rel="noreferrer">WhatsApp · 0315 3558383 ↗</a><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms">Terms of use</Link></div></div><div className="wrap copyright">© {new Date().getFullYear()} SK DEV TEAM. All rights reserved.</div></footer>;
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-theme="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeInit }} /></head><body><a className="skip" href="#main">Skip to content</a><SiteHeader /><main id="main">{children}</main><Footer /><a className="whatsapp" href="https://wa.me/923153558383?text=Assalam-o-Alaikum%2C%20SK%20DEV%20TEAM" target="_blank" rel="noreferrer" aria-label="Chat with SK DEV TEAM on WhatsApp"><span aria-hidden="true">◉</span> Let’s chat</a></body></html>;
}
