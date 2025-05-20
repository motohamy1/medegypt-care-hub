
import React from "react";
import Layout from "@/components/Layout";
import { Book } from "lucide-react";

const Learn = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Book className="h-8 w-8 text-sky-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Lifestyle Modification Hub</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-sky-700 mb-4">Personalized Tips for Diabetes & Hypertension</h2>
          <p className="text-gray-700 mb-4">
            Managing diabetes and hypertension requires lifestyle adjustments tailored to your specific needs. 
            Our resources are designed specifically for patients in Egypt, taking into account local culture, 
            food options, and climate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-sky-50 transition-colors">
              <h3 className="font-medium text-lg text-gray-800">Nutrition Guides</h3>
              <p className="text-gray-600">Healthy eating plans tailored for Egyptian cuisine</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-sky-50 transition-colors">
              <h3 className="font-medium text-lg text-gray-800">Exercise Programs</h3>
              <p className="text-gray-600">Suitable physical activities for all fitness levels</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-sky-50 transition-colors">
              <h3 className="font-medium text-lg text-gray-800">Stress Management</h3>
              <p className="text-gray-600">Techniques to reduce stress and improve well-being</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-sky-50 transition-colors">
              <h3 className="font-medium text-lg text-gray-800">Success Stories</h3>
              <p className="text-gray-600">Inspiring stories from Egyptian patients</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-700 mb-4">Coming Soon</h2>
          <p className="text-gray-700">
            We're working on downloadable resources in both Arabic and English, 
            including meal planners, exercise trackers, and more. Check back soon!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Learn;
