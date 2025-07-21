'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import careerData from '../../data/career.json';
import techStackData from '../../data/techstack.json';
import toolData from '../../data/tools.json';
import CareerCard from '../../components/CareerCard';
import TechStackCard from '../../components/TechStackCard';
import ExperienceMenuButton from '../../components/ExperienceMenuButton';

const Experience = () => {
  const [active, setActive] = useState('Career');

  const handleSetActive = (menuItem: string) => {
    setActive(menuItem);
  };

  const links = [
    { name: 'Career', path: './experience' },
    { name: 'Tech Stacks', path: './experience' },
    { name: 'Tools', path: './experience' },
  ];

  return (
    <>
      <div className="mt-20 flex flex-col items-center">
        <div className="mx-[15%] flex justify-center gap-12">
          <div className="flex flex-col gap-2 pt-16">
            <h1 className="bg-grid-pattern mx-auto mb-4 text-3xl font-bold">
              Experience
            </h1>
            {links.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
              >
                <ExperienceMenuButton
                  key={item.name}
                  name={item.name}
                  path={item.path}
                  active={active === item.name}
                  onClick={handleSetActive}
                />
              </motion.div>
            ))}
          </div>
          <div className="w-[600px]">
            <AnimatePresence mode="wait">
              {active === 'Career' && (
                <motion.div
                  key="Career"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
                >
                  {careerData.map((data, index) => (
                    <CareerCard key={index} {...data} />
                  ))}
                </motion.div>
              )}
              {active === 'Tech Stacks' && (
                <motion.div
                  key="Tech Stacks"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
                >
                  <TechStackCard techData={techStackData} />
                </motion.div>
              )}
              {active === 'Tools' && (
                <motion.div
                  key="Tools"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
                >
                  <TechStackCard techData={toolData} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
