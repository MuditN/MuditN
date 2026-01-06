import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Database, Cloud, Settings, Layout } from 'lucide-react';
import { skillsData } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: skillsData.languages,
      color: 'text-blue-600'
    },
    {
      title: 'Backend & APIs',
      icon: Settings,
      skills: skillsData.backend,
      color: 'text-blue-600'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: skillsData.databases,
      color: 'text-blue-600'
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      skills: skillsData.cloud,
      color: 'text-blue-600'
    },
    {
      title: 'DevOps & Tools',
      icon: Layout,
      skills: skillsData.devops,
      color: 'text-blue-600'
    },
    {
      title: 'System Design',
      icon: Layout,
      skills: skillsData.systemDesign,
      color: 'text-blue-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">
          Skills & Technologies
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                    <span className="text-gray-900">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;