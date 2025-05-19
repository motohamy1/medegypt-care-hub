
import { useState } from "react";
import { Link } from "react-router-dom";
import { Book, Calendar, Medication, Video, Hospital, Clock, Emergency } from "lucide-react";

export function NavigationMenu() {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const menuItems = [
    {
      title: language === "en" ? "Learn" : "تعلم",
      icon: <Book className="h-5 w-5" />,
      path: "/learn",
    },
    {
      title: language === "en" ? "Book a Doctor" : "حجز طبيب",
      icon: <Calendar className="h-5 w-5" />,
      path: "/doctors",
    },
    {
      title: language === "en" ? "Medications" : "الأدوية",
      icon: <Medication className="h-5 w-5" />,
      path: "/medications",
    },
    {
      title: language === "en" ? "Videos" : "فيديوهات",
      icon: <Video className="h-5 w-5" />,
      path: "/videos",
    },
    {
      title: language === "en" ? "Lab Tests" : "التحاليل",
      icon: <Hospital className="h-5 w-5" />,
      path: "/lab-tests",
    },
    {
      title: language === "en" ? "Connect" : "تواصل",
      icon: <Clock className="h-5 w-5" />,
      path: "/connect",
    },
    {
      title: language === "en" ? "Emergency" : "الطوارئ",
      icon: <Emergency className="h-5 w-5" />,
      path: "/emergency",
    },
  ];

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-sky-600">
              {language === "en" ? "MedEgypt Care" : "ميد إيجيبت كير"}
            </span>
          </Link>
          
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-green-50 text-green-700 rounded-md hover:bg-green-100"
          >
            {language === "en" ? "العربية" : "English"}
          </button>
        </div>

        <nav className="flex justify-center py-3 overflow-x-auto">
          <div className="flex space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center px-3 py-2 text-sky-700 hover:bg-sky-50 rounded-md"
              >
                {item.icon}
                <span className="text-xs mt-1">{item.title}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
