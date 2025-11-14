
import { Link } from "react-router-dom";
import { Book, Calendar, Pill, Video, Hospital, Clock, Bell } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function NavigationMenu() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
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

        <nav className="py-3 overflow-x-auto scrollbar-thin">
          <div className="flex items-center justify-between min-w-max border-2 border-cyan-400 rounded-full px-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-purple-400">
                {t('nav.brandName')}
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex flex-col items-center px-2 py-2 text-purple-300
                           hover:bg-purple-700/40 rounded-lg transition-colors min-w-0 flex-shrink-0"
                >
                  {item.icon}
                  <span className="text-xs mt-1 whitespace-nowrap">{item.title}</span>
                </Link>
              ))}
            </div>

            <button
              onClick={toggleLanguage}
              className="px-4 py-1 bg-purple-900/50 text-purple-300 rounded-full hover:bg-purple-800/40"
            >
              {t('nav.languageSwitch')}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
