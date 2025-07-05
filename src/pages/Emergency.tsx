
import React from "react";
import Layout from "@/components/Layout";
import { Bell, AlertTriangle, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";

const Emergency = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-6">
          <Bell className="h-8 w-8 text-purple-400 mr-3" />
          <h1 className="text-3xl font-bold text-gradient">{t('emergency.title')}</h1>
        </div>
        
        <div className="bg-red-950/30 border-l-4 border-red-500 p-4 mb-8">
          <div className="flex">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
            <div>
              <h2 className="text-lg font-bold text-red-700">{t('emergency.importantNotice')}</h2>
              <p className="text-gray-300">
                {t('emergency.disclaimer')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="glass-morphism rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-purple-400 mb-6">{t('emergency.contactsTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border border-purple-800/40 rounded-lg p-4 bg-purple-900/30 hover:bg-purple-900/40 transition-colors">
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 text-red-600 mr-2" />
                <h3 className="font-medium text-gray-300">{t('emergency.ambulance')}</h3>
              </div>
              <p className="text-xl font-bold text-gray-200">123</p>
            </div>
            
            <div className="border border-purple-800/40 rounded-lg p-4 bg-purple-900/30 hover:bg-purple-900/40 transition-colors">
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 text-red-600 mr-2" />
                <h3 className="font-medium text-gray-300">{t('emergency.police')}</h3>
              </div>
              <p className="text-xl font-bold text-gray-200">122</p>
            </div>
          </div>
          
          <Button className="flex items-center" variant="outline">
            <Download className="h-4 w-4 mr-2" />
            {t('emergency.downloadCard')}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-morphism rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-400 border-b border-purple-800/40 pb-3 mb-4">Diabetes Emergencies</h2>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-300 mb-2">Signs of Hypoglycemia (Low Blood Sugar)</h3>
              <ul className="list-disc pl-5 text-gray-400 space-y-1">
                <li>Shaking or trembling</li>
                <li>Sweating</li>
                <li>Rapid heartbeat</li>
                <li>Feeling anxious or irritable</li>
                <li>Hunger</li>
                <li>Confusion</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-300 mb-2">Signs of Hyperglycemia (High Blood Sugar)</h3>
              <ul className="list-disc pl-5 text-gray-400 space-y-1">
                <li>Excessive thirst</li>
                <li>Frequent urination</li>
                <li>Blurred vision</li>
                <li>Fatigue</li>
                <li>Nausea or vomiting</li>
                <li>Fruity breath odor (sign of DKA)</li>
              </ul>
            </div>
          </div>
          
          <div className="glass-morphism rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-400 border-b border-purple-800/40 pb-3 mb-4">Hypertension Emergencies</h2>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-300 mb-2">Signs of Hypertensive Crisis</h3>
              <ul className="list-disc pl-5 text-gray-400 space-y-1">
                <li>Severe headache</li>
                <li>Shortness of breath</li>
                <li>Nosebleeds</li>
                <li>Severe anxiety</li>
                <li>Chest pain</li>
                <li>Vision problems</li>
                <li>Blood pressure above 180/120 mmHg</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-300 mb-2">Signs of Stroke (Call 123 Immediately)</h3>
              <ul className="list-disc pl-5 text-gray-400 space-y-1">
                <li>Sudden numbness in face, arm, or leg</li>
                <li>Sudden confusion or trouble speaking</li>
                <li>Sudden trouble seeing</li>
                <li>Sudden trouble walking or dizziness</li>
                <li>Sudden severe headache</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="glass-morphism rounded-lg p-6">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Emergency Action Plans</h2>
          <p className="text-gray-300 mb-6">
            Download these step-by-step guides to know exactly what to do in common emergency situations.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Button variant="outline" className="flex items-center justify-center">
              <Download className="h-4 w-4 mr-2" />
              Hypoglycemia Guide
            </Button>
            <Button variant="outline" className="flex items-center justify-center">
              <Download className="h-4 w-4 mr-2" />
              DKA Action Plan
            </Button>
            <Button variant="outline" className="flex items-center justify-center">
              <Download className="h-4 w-4 mr-2" />
              Stroke Action Plan
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Emergency;
