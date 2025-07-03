
import React from "react";
import Layout from "@/components/Layout";
import { Hospital, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const LabTests = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Hospital className="h-8 w-8 text-purple-400 mr-3" />
          <h1 className="text-3xl font-bold text-gradient">Lab Investigation Guide</h1>
        </div>
        
        <div className="glass-morphism rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-purple-400 mb-6">Recommended Lab Tests</h2>
          
          <div className="mb-8">
            <h3 className="font-medium text-purple-300 mb-3">For Diabetes Monitoring</h3>
            <div className="space-y-3">
              <div className="flex items-center p-3 border border-purple-800/40 rounded-lg hover:bg-purple-900/30 transition-colors">
                <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-sky-600 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-300">HbA1c (Glycated Hemoglobin)</h4>
                  <p className="text-sm text-gray-400">Frequency: Every 3-6 months</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 border border-purple-800/40 rounded-lg hover:bg-purple-900/30 transition-colors">
                <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-sky-600 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-300">Fasting Blood Glucose</h4>
                  <p className="text-sm text-gray-400">Frequency: Monthly or as advised by your doctor</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 border border-purple-800/40 rounded-lg hover:bg-purple-900/30 transition-colors">
                <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-sky-600 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-300">Lipid Profile</h4>
                  <p className="text-sm text-gray-400">Frequency: Annually</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 border border-purple-800/40 rounded-lg hover:bg-purple-900/30 transition-colors">
                <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-sky-600 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-300">Kidney Function Tests</h4>
                  <p className="text-sm text-gray-400">Frequency: Annually</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-purple-300 mb-3">For Hypertension Monitoring</h3>
            <div className="space-y-3">
              <div className="flex items-center p-3 border border-purple-800/40 rounded-lg hover:bg-purple-900/30 transition-colors">
                <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-sky-600 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-300">Electrolytes (Sodium, Potassium)</h4>
                  <p className="text-sm text-gray-400">Frequency: Every 6-12 months</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 border border-purple-800/40 rounded-lg hover:bg-purple-900/30 transition-colors">
                <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-sky-600 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-300">Kidney Function</h4>
                  <p className="text-sm text-gray-400">Frequency: Annually</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 border border-purple-800/40 rounded-lg hover:bg-purple-900/30 transition-colors">
                <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-sky-600 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-300">Lipid Profile</h4>
                  <p className="text-sm text-gray-400">Frequency: Annually</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button className="flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Download Checklist (PDF)
            </Button>
          </div>
        </div>
        
        <div className="glass-morphism rounded-lg p-6">
          <h2 className="text-xl font-semibold text-purple-400 mb-6">Find a Lab Near You</h2>
          <div className="relative mb-6">
            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Enter your location in Egypt" 
              className="w-full pl-10 pr-4 py-2 bg-purple-900/30 border border-purple-800/40 rounded-md text-gray-300"
            />
          </div>
          
          <div className="bg-purple-950/30 border border-purple-800/30 p-6 rounded-lg text-center">
            <p className="text-gray-300">Lab locator feature coming soon!</p>
            <p className="text-sm text-gray-400 mt-2">We're working to connect you with reliable laboratories across Egypt.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LabTests;
