"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';

const skillsData = [
  {
    title: 'Linguagens',
    items: ['JavaScript / TypeScript', 'Python', 'C / C++', 'Java', 'HTML5 / CSS3', 'SQL'],
  },
  {
    title: 'Tecnologias e Bancos',
    items: ['React & Next.js', 'Node.js', 'Django', 'Tailwind CSS', 'PostgreSQL & Supabase', 'MySQL', 'FreeRTOS & ESP-IDF', 'MQTT / IoT'],
  },
  {
    title: 'Ferramentas e APIs',
    items: ['Git & GitHub / GitLab', 'Vercel', 'Jest & Playwright', 'Mailjet', 'Gemini AI', 'Figma', 'Make', 'VSCode'],
  },
  {
    title: 'Eng. de Software',
    items: ['Sistemas Embarcados', 'Inteligência Artificial', 'Arquitetura de Software', 'Teste & Qualidade', 'Requisitos & Elicitação', 'Validação', 'Documentação'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn margin="-100px">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-spider-red">
            Habilidades e Ferramentas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-zinc-50 rounded-xl p-6 border border-zinc-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4 text-spider-blue">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-white border border-zinc-200 px-3 py-1.5 rounded-full text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
