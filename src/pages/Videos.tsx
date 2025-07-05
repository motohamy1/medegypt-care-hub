
import React from "react";
import Layout from "@/components/Layout";
import { Video } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Videos = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Video className="h-8 w-8 text-purple-400 mr-3" />
          <h1 className="text-3xl font-bold text-gradient">{t('videos.title')}</h1>
        </div>
        
        <div className="glass-morphism rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-purple-400 mb-6">{t('videos.featuredVideos')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-purple-800/40 rounded-lg overflow-hidden">
              <div className="bg-purple-900/30 aspect-video flex items-center justify-center">
                <span className="text-purple-300">Video Preview</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-purple-300">{t('videos.whatIsDiabetes')}</h3>
                <p className="text-gray-400 text-sm mt-1">{t('videos.diabetesDesc')}</p>
              </div>
            </div>
            
            <div className="border border-purple-800/40 rounded-lg overflow-hidden">
              <div className="bg-purple-900/30 aspect-video flex items-center justify-center">
                <span className="text-purple-300">Video Preview</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-purple-300">{t('videos.understandingHypertension')}</h3>
                <p className="text-gray-400 text-sm mt-1">{t('videos.hypertensionDesc')}</p>
              </div>
            </div>
          </div>
          
          <h3 className="font-medium text-lg text-purple-400 mt-8 mb-4">{t('videos.comingSoonTitle')}</h3>
          <ul className="list-disc pl-5 text-gray-300">
            <li className="mb-2">Using a glucometer at home</li>
            <li className="mb-2">How to properly take your blood pressure</li>
            <li className="mb-2">Understanding your lab results</li>
            <li className="mb-2">Managing diabetes during Ramadan</li>
            <li className="mb-2">Exercise tips for hypertension patients</li>
          </ul>
        </div>
        
        <div className="bg-blue-950/30 border border-blue-800/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">{t('videos.videoSuggestion')}</h2>
          <p className="text-gray-300 mb-4">
            {t('videos.suggestionDesc')}
          </p>
          <button className="px-4 py-2 bg-blue-600/80 hover:bg-blue-700 text-white rounded-md transition-colors">
            {t('videos.suggestTopic')}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Videos;
