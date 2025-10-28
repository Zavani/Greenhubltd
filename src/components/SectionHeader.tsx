import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
