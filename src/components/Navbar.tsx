import { useState, useEffect } from "react";
import { Home, Briefcase, Package, MessageSquare, Share2, User, HelpCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import notchLogo from "@/assets/logo-nobackground.png";

const navItems = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "Projetos", icon: Briefcase, href: "#projetos" },
  { name: "Planos", icon: Package, href: "#planos" },
  { name: "Depoimentos", icon: MessageSquare, href: "#depoimentos" },
  { name: "Redes Sociais", icon: Share2, href: "#redes" },
  { name: "Sobre Mim", icon: User, href: "#sobre" },
  { name: "FAQ", icon: HelpCircle, href: "#faq" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 glass-strong"
          : "py-6 glass"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Left side: Logo and Mobile Hamburger */}
          <div className="flex items-center gap-4">
            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px]">
                  <div className="flex flex-col gap-4 py-6">
                    <div className="flex items-center space-x-2 px-4 mb-4">
                      <img
                        src={notchLogo}
                        alt="Logo Notch"
                        loading="lazy"
                        decoding="async"
                        className="w-10 h-10 rounded-lg object-contain"
                      />
                      <span className="text-xl font-bold text-gradient">Navegação</span>
                    </div>
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <a
                          href={item.href}
                          className="flex items-center px-4 py-3 rounded-lg text-base font-medium text-muted-foreground hover:bg-muted"
                        >
                          <item.icon className="w-5 h-5 mr-3" />
                          {item.name}
                        </a>
                      </SheetClose>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>


          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-1 transition-all duration-500 ${
            isScrolled ? "gap-1" : "gap-3"
          }`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <item.icon className={`transition-all duration-500 ${
                    isScrolled ? "w-4 h-4" : "w-5 h-5"
                  }`} />
                  <span className={isScrolled ? "text-xs" : "text-sm"}>{item.name}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* Logo grande à direita (substitui botão WhatsApp) */}
          <img
            src={notchLogo}
            alt="Logo Notch"
            loading="lazy"
            decoding="async"
            className={`${isScrolled ? "w-10 h-10" : "w-12 h-22"} rounded-lg object-contain`}
          />
        </div>
      </div>
    </nav>
  );
};