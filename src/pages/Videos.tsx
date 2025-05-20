
import React from "react";
import Layout from "@/components/Layout";
import { Video } from "lucide-react";

const Videos = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Video className="h-8 w-8 text-sky-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Educational Videos</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-sky-700 mb-6">Featured Videos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-200 aspect-video flex items-center justify-center">
                <span className="text-gray-500">Video Preview</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">What is Diabetes?</h3>
                <p className="text-gray-600 text-sm mt-1">An easy explanation of how diabetes affects your body</p>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-200 aspect-video flex items-center justify-center">
                <span className="text-gray-500">Video Preview</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">Understanding Hypertension</h3>
                <p className="text-gray-600 text-sm mt-1">Learn about high blood pressure and its effects</p>
              </div>
            </div>
          </div>
          
          <h3 className="font-medium text-lg text-sky-700 mt-8 mb-4">Coming Soon</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">Using a glucometer at home</li>
            <li className="mb-2">How to properly take your blood pressure</li>
            <li className="mb-2">Understanding your lab results</li>
            <li className="mb-2">Managing diabetes during Ramadan</li>
            <li className="mb-2">Exercise tips for hypertension patients</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Have a Video Suggestion?</h2>
          <p className="text-gray-700 mb-4">
            Is there a topic you'd like us to cover in our educational videos? Let us know what 
            would be helpful for your health journey.
          </p>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
            Suggest a Topic
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Videos;
