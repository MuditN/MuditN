import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projectsData } from '../data/mock';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Technical Projects
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Deep technical projects showcasing systems programming, performance optimization, and full-stack development
        </p>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projectsData.map((project) => (
            <Card key={project.id} className="hover:shadow-xl transition-shadow duration-300 border-2">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 font-medium">
                      {project.tagline}
                    </CardDescription>
                  </div>
                  {project.github && project.github !== '#' && (
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      View Code
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                {/* Problem */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-blue-600">■</span> Problem
                  </h4>
                  <p className="text-gray-700 leading-relaxed pl-6">{project.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-blue-600">■</span> Solution
                  </h4>
                  <p className="text-gray-700 leading-relaxed pl-6">{project.solution}</p>
                </div>

                {/* Engineering Challenges */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-blue-600">■</span> Engineering Challenges
                  </h4>
                  <ul className="space-y-2 pl-6">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 mt-1.5">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What it Demonstrates */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-blue-600">■</span> What This Demonstrates
                  </h4>
                  <ul className="space-y-2 pl-6">
                    {project.demonstrates.map((demo, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 mt-1.5">•</span>
                        <span>{demo}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;