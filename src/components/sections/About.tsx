"use client";

import React from 'react';
import { FadeIn } from '../ui/FadeIn';

export function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn margin="-100px">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-spider-blue">
            Sobre Mim
          </h2>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-zinc-100 text-lg text-foreground/80 leading-relaxed space-y-6">
            <p>
              Sou um desenvolvedor em formação pela Universidade de Brasília (UnB), especializado em Engenharia de Software com foco em qualidade, arquitetura de sistemas e desenvolvimento full-stack.
            </p>
            <p>
              Com mais de 900 commits registrados e experiência comprovada em trabalho colaborativo, busco criar soluções eficientes utilizando as melhores práticas como versionamento, testes automatizados e CI/CD. Minhas principais competências envolvem <strong className="text-spider-red">JavaScript, Python, Java e C</strong>.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
