"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative spider-web like subtle background or blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-spider-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-spider-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6">
            Olá, eu sou <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spider-red to-spider-blue">
              João Pedro
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-10">
            Estudante de Engenharia de Software na UnB e Desenvolvedor Full-Stack.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="red" href="#projects">
            Ver Projetos
          </Button>
          <Button variant="blue" href="#contact">
            Entrar em Contato
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
