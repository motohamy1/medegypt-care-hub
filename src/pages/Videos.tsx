
import React from "react";
import Layout from "@/components/Layout";
import { Video } from "lucide-react";

const Videos = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Video className="h-8 w-8 text-purple-400 mr-3" />
          <h1 className="text-3xl font-bold text-gradient">Educational Videos</h1>
        </div>
        
        <div className="glass-morphism rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-purple-400 mb-6">Featured Videos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-purple-800/40 rounded-lg overflow-hidden">
              <div className="bg-purple-900/30 aspect-video flex items-center justify-center">
                <span className="text-purple-300">Video Preview</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-purple-300">What is Diabetes?</h3>
                <p className="text-gray-400 text-sm mt-1">An easy explanation of how diabetes affects your body</p>
              </div>
            </div>
            
            <div className="border border-purple-800/40 rounded-lg overflow-hidden">
              <div className="bg-purple-900/30 aspect-video flex items-center justify-center">
                <span className="text-purple-300">Video Preview</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-purple-300">Understanding Hypertension</h3>
                <p className="text-gray-400 text-sm mt-1">Learn about high blood pressure and its effects</p>
              </div>
            </div>
          </div>
          
          <h3 className="font-medium text-lg text-purple-400 mt-8 mb-4">Coming Soon</h3>
          <ul className="list-disc pl-5 text-gray-300">
            <li className="mb-2">Using a glucometer at home</li>
            <li className="mb-2">How to properly take your blood pressure</li>
            <li className="mb-2">Understanding your lab results</li>
            <li className="mb-2">Managing diabetes during Ramadan</li>
            <li className="mb-2">Exercise tips for hypertension patients</li>
          </ul>
        </div>
        
        <div className="bg-blue-950/30 border border-blue-800/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Have a Video Suggestion?</h2>
          <p className="text-gray-300 mb-4">
            Is there a topic you'd like us to cover in our educational videos? Let us know what 
            would be helpful for your health journey.
          </p>
          <button className="px-4 py-2 bg-blue-600/80 hover:bg-blue-700 text-white rounded-md transition-colors">
            Suggest a Topic
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Videos;
