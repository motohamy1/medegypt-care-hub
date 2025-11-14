
import React from "react";
import { Link } from "react-router-dom";
import { Book, Calendar, Pill, Video, Hospital, Clock, Bell } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Book className="h-12 w-12 text-purple-400" />,
      title: <h2 className="text-gradient">{t('feature.learn.title')}</h2>,
      description: t('feature.learn.desc'),
      path: "/learn",
    },
    {
      icon: <Calendar className="h-12 w-12 text-purple-400" />,
      title: <h2 className="text-gradient">{t('feature.doctors.title')}</h2>,
      description: t('feature.doctors.desc'),
      path: "/doctors",
    },
    {
      icon: <Video className="h-12 w-12 text-purple-400" />,
      title: <h2 className="text-gradient">{t('feature.videos.title')}</h2>,
      description: t('feature.videos.desc'),
      path: "/videos",
    },
    {
      icon: <Pill className="h-12 w-12 text-purple-400" />,
      title: <h2 className="text-gradient">{t('feature.medications.title')}</h2>,
      description: t('feature.medications.desc'),
      path: "/medications",
    },
    {
      icon: <Hospital className="h-12 w-12 text-purple-400" />,
      title: <h2 className="text-gradient">{t('feature.labTests.title')}</h2>,
      description: t('feature.labTests.desc'),
      path: "/lab-tests",
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-400" />,
      title: <h2 className="text-gradient">{t('feature.connect.title')}</h2>,
      description: t('feature.connect.desc'),
      path: "/connect",
    },
    {
      icon: <Bell className="h-12 w-12 text-purple-400" />,
      title: <h2 className="text-gradient">{t('feature.emergency.title')}</h2>,
      description: t('feature.emergency.desc'),
      path: "/emergency",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="text-3xl font-bold text-gradient rounded-3xl p-8 mb-10">
        <div className="max-w-3xl mx-auto text-center glass-morphism rounded-3xl p-6"
             style={{boxShadow: '0 20px 50px rgba(139, 92, 246, 0.5)'}}>
          <h1 className="text-3xl md:text-4xl font-bold text-purple-400  mb-4">
            {t('home.title')}
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            {t('home.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-cyan-400 text-purple-500 hover:bg-cyan-100">
              <Link to="/learn">{t('home.exploreResources')}</Link>
            </Button>
            <Button asChild variant="outline" className="border-cyan-400 text-sky-300 hover:bg-purple-900/30">
              <Link to="/doctors">{t('home.findDoctor')}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <Link 
            key={index} 
            to={feature.path} 
            className="glass-morphism rounded-3xl p-6 hover:bg-purple-900/30 transition-colors"
            style={{boxShadow: '0 10px 25px rgba(0, 200, 250, 0.8)'}}
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Success Stories Section */}
      <div className="glass-morphism rounded-xl p-8 mb-10">
        <h2 className="text-2xl font-semibold text-center text-purple-400 mb-6">{t('home.successStories')}</h2>
        <div className="border border-purple-800/40 p-6 rounded-lg hover:bg-purple-900/30 transition-colors">
          <blockquote className="italic text-gray-600">
            {t('home.testimonial')}
          </blockquote>
          <p className="mt-4 font-medium">{t('home.testimonialAuthor')}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
