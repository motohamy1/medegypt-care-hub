
import React from "react";
import Layout from "@/components/Layout";
import { Hospital, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const LabTests = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Hospital className="h-8 w-8 text-purple-400 mr-3" />
          <h1 className="text-3xl font-bold text-purple-300">Lab Investigation Guide</h1>
        </div>
        
        <Card className="mb-8 glass-morphism border-purple-800/30 shadow-purple-900/20">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-purple-300">Recommended Lab Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h3 className="font-medium text-med-green-300 mb-4">For Diabetes Monitoring</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-purple-900/20 border border-purple-800/40 rounded-lg">
                  <Checkbox id="hba1c" className="text-purple-400 border-purple-400 mr-3" />
                  <div>
                    <label htmlFor="hba1c" className="font-medium text-purple-200 cursor-pointer">HbA1c (Glycated Hemoglobin)</label>
                    <p className="text-sm text-purple-400">Frequency: Every 3-6 months</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-purple-900/20 border border-purple-800/40 rounded-lg">
                  <Checkbox id="fbs" className="text-purple-400 border-purple-400 mr-3" />
                  <div>
                    <label htmlFor="fbs" className="font-medium text-purple-200 cursor-pointer">Fasting Blood Glucose</label>
                    <p className="text-sm text-purple-400">Frequency: Monthly or as advised by your doctor</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-purple-900/20 border border-purple-800/40 rounded-lg">
                  <Checkbox id="lipid" className="text-purple-400 border-purple-400 mr-3" />
                  <div>
                    <label htmlFor="lipid" className="font-medium text-purple-200 cursor-pointer">Lipid Profile</label>
                    <p className="text-sm text-purple-400">Frequency: Annually</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-purple-900/20 border border-purple-800/40 rounded-lg">
                  <Checkbox id="kidney" className="text-purple-400 border-purple-400 mr-3" />
                  <div>
                    <label htmlFor="kidney" className="font-medium text-purple-200 cursor-pointer">Kidney Function Tests</label>
                    <p className="text-sm text-purple-400">Frequency: Annually</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-purple-300 mb-4">For Hypertension Monitoring</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-purple-900/20 border border-purple-800/40 rounded-lg">
                  <Checkbox id="electrolytes" className="text-purple-400 border-purple-400 mr-3" />
                  <div>
                    <label htmlFor="electrolytes" className="font-medium text-purple-200 cursor-pointer">Electrolytes (Sodium, Potassium)</label>
                    <p className="text-sm text-purple-400">Frequency: Every 6-12 months</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-purple-900/20 border border-purple-800/40 rounded-lg">
                  <Checkbox id="kidney-function" className="text-purple-400 border-purple-400 mr-3" />
                  <div>
                    <label htmlFor="kidney-function" className="font-medium text-purple-200 cursor-pointer">Kidney Function</label>
                    <p className="text-sm text-purple-400">Frequency: Annually</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-purple-900/20 border border-purple-800/40 rounded-lg">
                  <Checkbox id="lipid-profile" className="text-purple-400 border-purple-400 mr-3" />
                  <div>
                    <label htmlFor="lipid-profile" className="font-medium text-purple-200 cursor-pointer">Lipid Profile</label>
                    <p className="text-sm text-purple-400">Frequency: Annually</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button className="flex items-center bg-purple-700 hover:bg-purple-600 text-white">
                <Download className="h-4 w-4 mr-2" />
                Download Checklist (PDF)
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-purple-800/30 shadow-purple-900/20">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-purple-300">Find a Lab Near You</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative mb-6">
              <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-purple-400" />
              <Input 
                type="text" 
                placeholder="Enter your location in Egypt" 
                className="w-full pl-10 pr-4 py-2 bg-purple-900/20 border-purple-800/40 text-purple-200 placeholder:text-purple-500"
              />
            </div>
            
            <div className="bg-purple-950/30 p-6 rounded-lg text-center border border-purple-800/30">
              <p className="text-purple-300">Lab locator feature coming soon!</p>
              <p className="text-sm text-purple-400 mt-2">We're working to connect you with reliable laboratories across Egypt.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default LabTests;
