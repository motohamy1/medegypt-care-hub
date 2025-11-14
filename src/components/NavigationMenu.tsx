
import { Link } from "react-router-dom";
import { Book, Calendar, Pill, Video, Hospital, Clock, Bell, Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

export function NavigationMenu() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {
      title: t('nav.learn'),
      icon: <Book className="h-5 w-5" />,
      path: "/learn",
    },
    {
      title: t('nav.doctors'),
      icon: <Calendar className="h-5 w-5" />,
      path: "/doctors",
    },
    {
      title: t('nav.medications'),
      icon: <Pill className="h-5 w-5" />,
      path: "/medications",
    },
    {
      title: t('nav.videos'),
      icon: <Video className="h-5 w-5" />,
      path: "/videos",
    },
    {
      title: t('nav.labTests'),
      icon: <Hospital className="h-5 w-5" />,
      path: "/lab-tests",
    },
    {
      title: t('nav.connect'),
      icon: <Clock className="h-5 w-5" />,
      path: "/connect",
    },
    {
      title: t('nav.emergency'),
      icon: <Bell className="h-5 w-5" />,
      path: "/emergency",
    },
  ];

  return (
    <header className="bg-background border-b border-purple-800 shadow-lg shadow-cyan-400">
      <div className="container mx-auto px-4">

        <nav className="py-2 md:py-3">
          <div className="flex items-center justify-between border-2 border-cyan-400 rounded-full px-4 py-2">
            <Link to="/" className="flex items-center">
              <span className="text-lg md:text-xl font-bold text-purple-400 whitespace-nowrap">
                {t('nav.brandName')}
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex flex-col items-center px-2 py-2 text-purple-300
                           hover:bg-purple-700/40 rounded-lg transition-colors"
                >
                  {item.icon}
                  <span className="text-xs mt-1 whitespace-nowrap">{item.title}</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="px-3 md:px-4 py-1 bg-purple-900/50 text-purple-300 rounded-full hover:bg-purple-800/40 text-xs md:text-sm whitespace-nowrap"
              >
                {t('nav.languageSwitch')}
              </button>
              
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 text-purple-300 hover:bg-purple-700/40 rounded-lg"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 border-2 border-cyan-400 rounded-2xl p-4 bg-background">
              <div className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-purple-300
                             hover:bg-purple-700/40 rounded-lg transition-colors"
                  >
                    {item.icon}
                    <span className="text-sm">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
