
import React from "react";
import Layout from "@/components/Layout";
import { Book } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Learn = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Book className="h-8 w-8 text-purple-400 mr-3" />
          <h1 className="text-3xl font-bold text-gradient">{t('learn.title')}</h1>
        </div>
        
        <div className="glass-morphism rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">{t('learn.personalizedTips')}</h2>
          <p className="text-gray-300 mb-4">
            {t('learn.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border border-purple-800/40 rounded-lg p-4 hover:bg-purple-900/30 transition-colors">
              <h3 className="font-medium text-lg text-purple-300">{t('learn.nutritionGuides')}</h3>
              <p className="text-gray-400">{t('learn.nutritionDesc')}</p>
            </div>
            <div className="border border-purple-800/40 rounded-lg p-4 hover:bg-purple-900/30 transition-colors">
              <h3 className="font-medium text-lg text-purple-300">{t('learn.exercisePrograms')}</h3>
              <p className="text-gray-400">{t('learn.exerciseDesc')}</p>
            </div>
            <div className="border border-purple-800/40 rounded-lg p-4 hover:bg-purple-900/30 transition-colors">
              <h3 className="font-medium text-lg text-purple-300">{t('learn.stressManagement')}</h3>
              <p className="text-gray-400">{t('learn.stressDesc')}</p>
            </div>
            <div className="border border-purple-800/40 rounded-lg p-4 hover:bg-purple-900/30 transition-colors">
              <h3 className="font-medium text-lg text-purple-300">{t('learn.successStories')}</h3>
              <p className="text-gray-400">{t('learn.successDesc')}</p>
            </div>
          </div>
        </div>

        <div className="bg-green-950/30 border border-green-800/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-400 mb-4">{t('learn.comingSoonTitle')}</h2>
          <p className="text-gray-300">
            {t('learn.comingSoonDesc')}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Learn;
