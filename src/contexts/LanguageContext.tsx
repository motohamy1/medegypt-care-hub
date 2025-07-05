import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    'nav.learn': 'Learn',
    'nav.doctors': 'Book a Doctor',
    'nav.medications': 'Medications',
    'nav.videos': 'Videos',
    'nav.labTests': 'Lab Tests',
    'nav.connect': 'Connect',
    'nav.emergency': 'Emergency',
    'nav.brandName': 'MedEgypt Care',
    'nav.languageSwitch': 'العربية',
    'home.title': 'Live Better with Diabetes & Hypertension',
    'home.subtitle': 'Education, support, and resources for managing your health in Egypt',
    'home.exploreResources': 'Explore Resources',
    'home.findDoctor': 'Find a Doctor',
    'home.successStories': 'Success Stories',
    'home.testimonial': '"With the help of MedEgypt Care, I\'ve been able to better manage my diabetes through proper diet and regular check-ups. The doctor directory helped me find a specialist close to my home in Cairo."',
    'home.testimonialAuthor': '- Ahmed, 56, Cairo',
    'feature.learn.title': 'Lifestyle Modification Hub',
    'feature.learn.desc': 'Personalized tips for nutrition, exercise, and stress management tailored for diabetes and hypertension',
    'feature.doctors.title': 'Book an Appointment',
    'feature.doctors.desc': 'Find and book appointments with qualified doctors in Egypt',
    'feature.videos.title': 'Educational Videos',
    'feature.videos.desc': 'Easy-to-understand videos about diabetes and hypertension management',
    'feature.medications.title': 'Medications Guide',
    'feature.medications.desc': 'Information about diabetes and hypertension medications available in Egypt',
    'feature.labTests.title': 'Lab Investigation Guide',
    'feature.labTests.desc': 'Interactive checklist of recommended lab tests and nearby lab locator',
    'feature.connect.title': 'Connect with Doctors',
    'feature.connect.desc': 'Securely communicate with your healthcare providers',
    'feature.emergency.title': 'Emergency Guide',
    'feature.emergency.desc': 'Learn to recognize warning signs and what to do in emergency situations',
    'emergency.title': 'Emergency Guide',
    'emergency.importantNotice': 'Important Notice',
    'emergency.disclaimer': 'This guide is for educational purposes only. In case of an emergency, call emergency services immediately or go to the nearest hospital.',
    'emergency.contactsTitle': 'Emergency Contacts in Egypt',
    'emergency.ambulance': 'Ambulance',
    'emergency.police': 'Emergency Police',
    'emergency.downloadCard': 'Download Emergency Contacts Card',
    'labTests.title': 'Lab Investigation Guide',
    'labTests.recommendedTitle': 'Recommended Lab Tests',
    'labTests.diabetesMonitoring': 'For Diabetes Monitoring',
    'labTests.hypertensionMonitoring': 'For Hypertension Monitoring',
    'labTests.downloadChecklist': 'Download Checklist (PDF)',
    'labTests.findLabTitle': 'Find a Lab Near You',
    'labTests.locationPlaceholder': 'Enter your location in Egypt',
    'labTests.comingSoon': 'Lab locator feature coming soon!',
    'labTests.comingSoonDesc': 'We\'re working to connect you with reliable laboratories across Egypt.',

    // Connect Page
    'connect.title': 'Connect with Doctors',
    'connect.sendMessage': 'Send a Message',
    'connect.sendMessageDesc': 'Securely message your doctor with non-urgent questions',
    'connect.message': 'Message',
    'connect.videoConsultation': 'Video Consultation',
    'connect.videoConsultationDesc': 'Schedule a virtual appointment with your healthcare provider',
    'connect.comingSoon': 'Coming Soon',
    'connect.bookFollowup': 'Book Follow-up',
    'connect.bookFollowupDesc': 'Schedule your next in-person visit',
    'connect.bookNow': 'Book Now',
    'connect.quickQuestion': 'Quick Question',
    'connect.doctor': 'Doctor',
    'connect.selectDoctor': 'Select your doctor',
    'connect.subject': 'Subject',
    'connect.subjectPlaceholder': 'Brief subject of your question',
    'connect.messagePlaceholder': 'Type your health question here...',
    'connect.sendQuestion': 'Send Question',
    'connect.pleaseNote': 'Please Note',
    'connect.emergencyNote': 'This messaging system is not for emergencies. If you have an urgent medical need, please call emergency services or visit your nearest hospital immediately.',

    // Doctors Page
    'doctors.title': 'Book an Appointment',
    'doctors.findDoctor': 'Find a Doctor',
    'doctors.specialization': 'Specialization',
    'doctors.allSpecializations': 'All Specializations',
    'doctors.diabetologist': 'Diabetologist',
    'doctors.cardiologist': 'Cardiologist',
    'doctors.internalMedicine': 'Internal Medicine',
    'doctors.location': 'Location',
    'doctors.cairo': 'Cairo',
    'doctors.alexandria': 'Alexandria',
    'doctors.giza': 'Giza',
    'doctors.otherGovernorates': 'Other Governorates',
    'doctors.searchByName': 'Search by Name',
    'doctors.doctorNamePlaceholder': 'Doctor\'s name',
    'doctors.searchDoctors': 'Search Doctors',
    'doctors.featuredDoctors': 'Featured Doctors',
    'doctors.listingsComingSoon': 'Doctor listings coming soon. Our team is verifying qualified doctors across Egypt.',
    'doctors.wantToBeListedTitle': 'Want to be listed as a doctor?',
    'doctors.wantToBeListedDesc': 'If you are a qualified healthcare provider specializing in diabetes or hypertension care, contact us to be featured in our directory.',
    'doctors.contactUs': 'Contact Us',

    // Learn Page
    'learn.title': 'Lifestyle Modification Hub',
    'learn.personalizedTips': 'Personalized Tips for Diabetes & Hypertension',
    'learn.description': 'Managing diabetes and hypertension requires lifestyle adjustments tailored to your specific needs. Our resources are designed specifically for patients in Egypt, taking into account local culture, food options, and climate.',
    'learn.nutritionGuides': 'Nutrition Guides',
    'learn.nutritionDesc': 'Healthy eating plans tailored for Egyptian cuisine',
    'learn.exercisePrograms': 'Exercise Programs',
    'learn.exerciseDesc': 'Suitable physical activities for all fitness levels',
    'learn.stressManagement': 'Stress Management',
    'learn.stressDesc': 'Techniques to reduce stress and improve well-being',
    'learn.successStories': 'Success Stories',
    'learn.successDesc': 'Inspiring stories from Egyptian patients',
    'learn.comingSoonTitle': 'Coming Soon',
    'learn.comingSoonDesc': 'We\'re working on downloadable resources in both Arabic and English, including meal planners, exercise trackers, and more. Check back soon!',

    // Videos Page
    'videos.title': 'Educational Videos',
    'videos.featuredVideos': 'Featured Videos',
    'videos.whatIsDiabetes': 'What is Diabetes?',
    'videos.diabetesDesc': 'An easy explanation of how diabetes affects your body',
    'videos.understandingHypertension': 'Understanding Hypertension',
    'videos.hypertensionDesc': 'Learn about high blood pressure and its effects',
    'videos.comingSoonTitle': 'Coming Soon',
    'videos.videoSuggestion': 'Have a Video Suggestion?',
    'videos.suggestionDesc': 'Is there a topic you\'d like us to cover in our educational videos? Let us know what would be helpful for your health journey.',
    'videos.suggestTopic': 'Suggest a Topic',

    // Medications Page
    'medications.title': 'Medications Guide',
    'medications.medicationsInEgypt': 'Medications in Egypt',
    'medications.results': 'results',
    'medications.searchPlaceholder': 'Search medications or brands',
    'medications.filterMedications': 'Filter Medications',
    'medications.drugClass': 'Drug Class',
    'medications.searchDrugClasses': 'Search drug classes...',
    'medications.noResults': 'No results found.',
    'medications.allClasses': 'All Classes',
    'medications.resetFilters': 'Reset Filters',
    'medications.all': 'All',
    'medications.filteredBy': 'Filtered by:',
    'medications.noMedicationsFound': 'No medications found matching your search criteria.',
    'medications.clearFilters': 'Clear filters',
    'medications.medicationsCategory': 'Medications',
    'medications.brandsInEgypt': 'Brands in Egypt:',
    'medications.mechanism': 'Mechanism:',
    'medications.typicalDosage': 'Typical Dosage:',
    'medications.available': 'Available',
    'medications.limited': 'Limited',
    'medications.unavailable': 'Unavailable',
    'medications.importantNotes': 'Important Notes',
    'medications.disclaimer1': 'This information is provided for educational purposes only. Always consult with your healthcare provider before starting, changing, or stopping any medication.',
    'medications.disclaimer2': 'Medication availability and pricing may vary by location in Egypt. The availability status shown is approximate and subject to change.',

    // NotFound Page
    'notFound.title': '404',
    'notFound.message': 'The page you\'re looking for doesn\'t exist.',
    'notFound.goHome': 'Go Home',
  },
  ar: {
    'nav.learn': 'تعلم',
    'nav.doctors': 'حجز طبيب',
    'nav.medications': 'الأدوية',
    'nav.videos': 'فيديوهات',
    'nav.labTests': 'التحاليل',
    'nav.connect': 'تواصل',
    'nav.emergency': 'الطوارئ',
    'nav.brandName': 'ميد إيجيبت كير',
    'nav.languageSwitch': 'English',
    'home.title': 'عيش حياة أفضل مع السكري وضغط الدم',
    'home.subtitle': 'التعليم والدعم والموارد لإدارة صحتك في مصر',
    'home.exploreResources': 'استكشف الموارد',
    'home.findDoctor': 'ابحث عن طبيب',
    'home.successStories': 'قصص النجاح',
    'home.testimonial': '"بمساعدة ميد إيجيبت كير، تمكنت من إدارة مرض السكري بشكل أفضل من خلال النظام الغذائي المناسب والفحوصات المنتظمة. دليل الأطباء ساعدني في العثور على أخصائي قريب من منزلي في القاهرة."',
    'home.testimonialAuthor': '- أحمد، 56 سنة، القاهرة',
    'feature.learn.title': 'مركز تعديل نمط الحياة',
    'feature.learn.desc': 'نصائح شخصية للتغذية والتمارين وإدارة التوتر مصممة خصيصاً لمرضى السكري وضغط الدم',
    'feature.doctors.title': 'حجز موعد',
    'feature.doctors.desc': 'ابحث واحجز مواعيد مع أطباء مؤهلين في مصر',
    'feature.videos.title': 'فيديوهات تعليمية',
    'feature.videos.desc': 'فيديوهات سهلة الفهم حول إدارة السكري وضغط الدم',
    'feature.medications.title': 'دليل الأدوية',
    'feature.medications.desc': 'معلومات حول أدوية السكري وضغط الدم المتوفرة في مصر',
    'feature.labTests.title': 'دليل الفحوصات المعملية',
    'feature.labTests.desc': 'قائمة تفاعلية بالفحوصات المعملية الموصى بها وموقع المختبرات القريبة',
    'feature.connect.title': 'تواصل مع الأطباء',
    'feature.connect.desc': 'تواصل بأمان مع مقدمي الرعاية الصحية',
    'feature.emergency.title': 'دليل الطوارئ',
    'feature.emergency.desc': 'تعلم كيفية التعرف على علامات الإنذار وما يجب فعله في حالات الطوارئ',
    'emergency.title': 'دليل الطوارئ',
    'emergency.importantNotice': 'إشعار مهم',
    'emergency.disclaimer': 'هذا الدليل لأغراض تعليمية فقط. في حالة الطوارئ، اتصل بخدمات الطوارئ فوراً أو اذهب إلى أقرب مستشفى.',
    'emergency.contactsTitle': 'أرقام الطوارئ في مصر',
    'emergency.ambulance': 'الإسعاف',
    'emergency.police': 'شرطة الطوارئ',
    'emergency.downloadCard': 'تحميل بطاقة أرقام الطوارئ',
    'labTests.title': 'دليل الفحوصات المعملية',
    'labTests.recommendedTitle': 'الفحوصات المعملية الموصى بها',
    'labTests.diabetesMonitoring': 'لمتابعة السكري',
    'labTests.hypertensionMonitoring': 'لمتابعة ضغط الدم',
    'labTests.downloadChecklist': 'تحميل القائمة (PDF)',
    'labTests.findLabTitle': 'ابحث عن معمل قريب منك',
    'labTests.locationPlaceholder': 'أدخل موقعك في مصر',
    'labTests.comingSoon': 'خاصية البحث عن المعامل قريباً!',
    'labTests.comingSoonDesc': 'نحن نعمل على ربطك بمختبرات موثوقة في جميع أنحاء مصر.',

    // Connect Page
    'connect.title': 'تواصل مع الأطباء',
    'connect.sendMessage': 'إرسال رسالة',
    'connect.sendMessageDesc': 'راسل طبيبك بأمان للأسئلة غير العاجلة',
    'connect.message': 'رسالة',
    'connect.videoConsultation': 'استشارة فيديو',
    'connect.videoConsultationDesc': 'احجز موعد افتراضي مع مقدم الرعاية الصحية',
    'connect.comingSoon': 'قريباً',
    'connect.bookFollowup': 'حجز متابعة',
    'connect.bookFollowupDesc': 'احجز زيارتك الشخصية القادمة',
    'connect.bookNow': 'احجز الآن',
    'connect.quickQuestion': 'سؤال سريع',
    'connect.doctor': 'الطبيب',
    'connect.selectDoctor': 'اختر طبيبك',
    'connect.subject': 'الموضوع',
    'connect.subjectPlaceholder': 'موضوع مختصر لسؤالك',
    'connect.messagePlaceholder': 'اكتب سؤالك الصحي هنا...',
    'connect.sendQuestion': 'إرسال السؤال',
    'connect.pleaseNote': 'يرجى الملاحظة',
    'connect.emergencyNote': 'نظام المراسلة هذا ليس للطوارئ. إذا كان لديك حاجة طبية عاجلة، يرجى الاتصال بخدمات الطوارئ أو زيارة أقرب مستشفى فوراً.',

    // Doctors Page
    'doctors.title': 'حجز موعد',
    'doctors.findDoctor': 'ابحث عن طبيب',
    'doctors.specialization': 'التخصص',
    'doctors.allSpecializations': 'جميع التخصصات',
    'doctors.diabetologist': 'أخصائي سكري',
    'doctors.cardiologist': 'أخصائي قلب',
    'doctors.internalMedicine': 'باطنة',
    'doctors.location': 'الموقع',
    'doctors.cairo': 'القاهرة',
    'doctors.alexandria': 'الإسكندرية',
    'doctors.giza': 'الجيزة',
    'doctors.otherGovernorates': 'محافظات أخرى',
    'doctors.searchByName': 'البحث بالاسم',
    'doctors.doctorNamePlaceholder': 'اسم الطبيب',
    'doctors.searchDoctors': 'البحث عن الأطباء',
    'doctors.featuredDoctors': 'الأطباء المميزون',
    'doctors.listingsComingSoon': 'قوائم الأطباء قريباً. فريقنا يتحقق من الأطباء المؤهلين في جميع أنحاء مصر.',
    'doctors.wantToBeListedTitle': 'تريد أن تكون مدرجاً كطبيب؟',
    'doctors.wantToBeListedDesc': 'إذا كنت مقدم رعاية صحية مؤهل متخصص في رعاية السكري أو ضغط الدم، اتصل بنا لتكون مميزاً في دليلنا.',
    'doctors.contactUs': 'اتصل بنا',

    // Learn Page
    'learn.title': 'مركز تعديل نمط الحياة',
    'learn.personalizedTips': 'نصائح شخصية للسكري وضغط الدم',
    'learn.description': 'إدارة السكري وضغط الدم تتطلب تعديلات في نمط الحياة مصممة خصيصاً لاحتياجاتك. مواردنا مصممة خصيصاً للمرضى في مصر، مع مراعاة الثقافة المحلية وخيارات الطعام والمناخ.',
    'learn.nutritionGuides': 'أدلة التغذية',
    'learn.nutritionDesc': 'خطط أكل صحية مصممة للمطبخ المصري',
    'learn.exercisePrograms': 'برامج التمارين',
    'learn.exerciseDesc': 'أنشطة بدنية مناسبة لجميع مستويات اللياقة',
    'learn.stressManagement': 'إدارة التوتر',
    'learn.stressDesc': 'تقنيات لتقليل التوتر وتحسين الرفاهية',
    'learn.successStories': 'قصص النجاح',
    'learn.successDesc': 'قصص ملهمة من المرضى المصريين',
    'learn.comingSoonTitle': 'قريباً',
    'learn.comingSoonDesc': 'نحن نعمل على موارد قابلة للتحميل باللغتين العربية والإنجليزية، بما في ذلك مخططات الوجبات ومتتبعات التمارين والمزيد. تابعونا قريباً!',

    // Videos Page
    'videos.title': 'فيديوهات تعليمية',
    'videos.featuredVideos': 'فيديوهات مميزة',
    'videos.whatIsDiabetes': 'ما هو السكري؟',
    'videos.diabetesDesc': 'شرح سهل لكيفية تأثير السكري على جسمك',
    'videos.understandingHypertension': 'فهم ضغط الدم المرتفع',
    'videos.hypertensionDesc': 'تعلم عن ضغط الدم المرتفع وتأثيراته',
    'videos.comingSoonTitle': 'قريباً',
    'videos.videoSuggestion': 'لديك اقتراح فيديو؟',
    'videos.suggestionDesc': 'هل هناك موضوع تود أن نغطيه في فيديوهاتنا التعليمية؟ أخبرنا بما سيكون مفيداً لرحلتك الصحية.',
    'videos.suggestTopic': 'اقترح موضوعاً',

    // Medications Page
    'medications.title': 'دليل الأدوية',
    'medications.medicationsInEgypt': 'الأدوية في مصر',
    'medications.results': 'نتيجة',
    'medications.searchPlaceholder': 'البحث عن الأدوية أو العلامات التجارية',
    'medications.filterMedications': 'تصفية الأدوية',
    'medications.drugClass': 'فئة الدواء',
    'medications.searchDrugClasses': 'البحث عن فئات الأدوية...',
    'medications.noResults': 'لم يتم العثور على نتائج.',
    'medications.allClasses': 'جميع الفئات',
    'medications.resetFilters': 'إعادة تعيين المرشحات',
    'medications.all': 'الكل',
    'medications.filteredBy': 'مرشح بواسطة:',
    'medications.noMedicationsFound': 'لم يتم العثور على أدوية تطابق معايير البحث.',
    'medications.clearFilters': 'مسح المرشحات',
    'medications.medicationsCategory': 'أدوية',
    'medications.brandsInEgypt': 'العلامات التجارية في مصر:',
    'medications.mechanism': 'الآلية:',
    'medications.typicalDosage': 'الجرعة المعتادة:',
    'medications.available': 'متوفر',
    'medications.limited': 'محدود',
    'medications.unavailable': 'غير متوفر',
    'medications.importantNotes': 'ملاحظات مهمة',
    'medications.disclaimer1': 'هذه المعلومات مقدمة لأغراض تعليمية فقط. استشر دائماً مقدم الرعاية الصحية قبل بدء أو تغيير أو إيقاف أي دواء.',
    'medications.disclaimer2': 'توفر الأدوية والأسعار قد تختلف حسب الموقع في مصر. حالة التوفر المعروضة تقريبية وقابلة للتغيير.',

    // NotFound Page
    'notFound.title': '404',
    'notFound.message': 'الصفحة التي تبحث عنها غير موجودة.',
    'notFound.goHome': 'العودة للرئيسية'
  }
};