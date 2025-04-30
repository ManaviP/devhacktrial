import { useState } from 'react';
import { motion } from 'framer-motion';
import './TimelineSection.css';

interface TimelineEvent {
  step: string;
  title: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

export const TimelineSection = () => {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  const timelineEvents: TimelineEvent[] = [
    {
      step: "WEEK ONE",
      title: "UNDERSTAND",
      date: "February 12",
      description: "Gather existing knowledge, expose assumptions and unknowns.",
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 10C15 10 12 14 12 18H16.5C16.5 16 17.5 14 20 14C22.5 14 23.5 15.5 23.5 17C23.5 20 20 19.5 20 24H24C24 21 27.5 20.5 27.5 17C27.5 13 24 10 20 10ZM18 26V30H22V26H18Z" fill="#2D3748"/></svg>
    },
    {
      step: "WEEK TWO",
      title: "DIVERGE",
      date: "April 1",
      description: "Eliminate all paths. Our goal is to explore as many possibilities as possible, regardless of how realistic, feasible or viable they may or may not be.",
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 12L24 16M24 16L20 20M24 16L20 12M24 16L28 20M12 20L16 24M16 24L20 28M16 24L12 28M16 24L20 20" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    {
      step: "WEEK THREE",
      title: "CONVERGE",
      date: "May 23-24",
      description: "Our goal is to take all of the possibilities that we have exposed over the past two weeks and hone in on a single version of the prototype that we will build tomorrow.",
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 32L16 16M16 16L8 24M16 16L24 8" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    {
      step: "WEEK FOUR",
      title: "PROTOTYPING",
      date: "End of May",
      description: "During this phase you will build a quick and dirty prototype. You should have at most a week to build the prototype it should be as lo-fi as you can get away with during Testing.",
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 25.5L10 30M10 30L14.5 34.5M10 30H22M25.5 9.5L30 5M30 5L25.5 0.5M30 5H18" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    {
      step: "WEEK FIVE",
      title: "TESTING",
      date: "Final Week",
      description: "Going into each test you should have a plan of what you are testing and how you know if that is successful or not.",
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 8L19 4H29L31 8H36V30H4V8H17ZM20 25C24.4183 25 28 21.4183 28 17C28 12.5817 24.4183 9 20 9C15.5817 9 12 12.5817 12 17C12 21.4183 15.5817 25 20 25ZM20 23C16.6863 23 14 20.3137 14 17C14 13.6863 16.6863 11 20 11C23.3137 11 26 13.6863 26 17C26 20.3137 23.3137 23 20 23ZM18 14H22V17H25V19H18V14Z" fill="#2D3748"/></svg>
    },
  ];

  return (
    <section id="timeline" className="timeline-section">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="timeline-title">
          Event Timeline
        </h2>

        <div className="py-12 max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className="relative mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                onMouseEnter={() => setActiveEvent(index)}
                onMouseLeave={() => setActiveEvent(null)}
              >
                {/* Timeline circle with label */}
                <div className="flex flex-col items-center mb-4 relative z-10">
                  <motion.div
                    className={`w-24 h-24 rounded-full border-4 bg-white flex items-center justify-center
                    ${activeEvent === index ? 'border-blue-500 shadow-lg' : 'border-gray-300'} transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-center">
                      <div className="text-xs font-semibold text-gray-600">{event.step.split(' ')[0]}</div>
                      <div className="text-lg font-bold text-gray-700">{event.step.split(' ')[1]}</div>
                    </div>

                    {/* Quarter filled border accent */}
                    <div className="absolute top-0 right-0 w-1/4 h-1/4 border-t-4 border-r-4 border-blue-800 rounded-tr-full"></div>
                  </motion.div>
                </div>

                {/* Content sections - alternate left and right */}
                <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-center`}>
                  {/* Icon section */}
                  <motion.div
                    className={`w-1/3 flex ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-100 p-4 rounded-full">
                      {event.icon}
                    </div>
                  </motion.div>

                  {/* Grey dotted line */}
                  <div className={`flex-grow h-px border-t-2 border-dotted border-gray-300 ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}></div>

                  {/* Content section */}
                  <motion.div
                    className="w-1/2"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className={`p-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
