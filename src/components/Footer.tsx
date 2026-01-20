import { SiInstagram, SiBehance, SiLinkedin } from "react-icons/si";
import { Separator } from "@/components/ui/separator";

/**
 * Elegant footer component with contact information and social links.
 * Features a minimal luxury editorial aesthetic with proper typography and spacing.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/bengisugokalpp",
      icon: SiInstagram,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bengisu-gökalp-baaa30278",
      icon: SiLinkedin,
    },
  ];

  return (
    <footer id="contact" className="w-full bg-background pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-24">
          {/* Contact and Social Section */}
          <div className="flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-medium">
                Get in touch
              </h3>
              <a
                href="mailto:icmimar@bengisugokalp@gmail.com"
                className="text-2xl md:text-3xl font-serif text-primary hover:opacity-60 transition-opacity duration-300 block"
              >
                icmimar@bengisugokalp@gmail.com <br />
                +90 541 780 32 92
              </a>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Brand and Description Section */}
          <div className="flex flex-col md:items-end justify-between space-y-8 md:space-y-0">
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter text-primary leading-[0.9] mb-4">
              Bengisu<br />Gokalp
            </h2>
            <div className="md:text-right">
              <p className="text-sm tracking-widest uppercase text-muted-foreground leading-relaxed">
                Interior Designer &<br />
                3D Visual Artist
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/50 font-medium ">
            © {currentYear} Bengisu Gokalp. All rights reserved.
          </div>
          
          <div className="flex items-center gap-12 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/50 font-medium">
            <span className="hidden sm:inline">Interior</span>
            <span className="hidden sm:inline">Architecture</span>
            <span className="hidden sm:inline">Concept</span>
            <div className="h-1 w-1 bg-primary/20 rounded-full" />
            <span className="text-primary/70">Portfolio 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
