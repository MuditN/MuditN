import React from 'react';
import { Card, CardContent } from './ui/card';
import { Trophy, Calendar } from 'lucide-react';
import { achievementsData } from '../data/mock';

const Achievements = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">
          Achievements
        </h2>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((achievement) => (
            <Card key={achievement.id} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-600">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Trophy className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {achievement.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{achievement.year}</span>
                    </div>
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

export default Achievements;