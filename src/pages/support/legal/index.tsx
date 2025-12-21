import React from 'react';
import LegalHeader from './LegalHeader';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';

const Legal: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <LegalHeader />
        <div className="prose prose-slate lg:prose-lg">
          <TermsOfService />
          <PrivacyPolicy />
        </div>
      </div>
    </div>
  );
};

export default Legal;