
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-sky-800 mb-4">{t('notFound.title')}</h1>
        <p className="text-xl text-gray-600 mb-6">
          {t('notFound.message')}
        </p>
        <Button asChild>
          <Link to="/">{t('notFound.goHome')}</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
