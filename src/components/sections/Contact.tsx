"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-zinc-100">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-50 rounded-3xl p-12 mb-16 border border-zinc-100 shadow-sm"
        >
          <h2 className="text-3xl font-bold mb-4 text-spider-blue">Contato e Redes</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Gostou do meu trabalho? Entre em contato via email ou acompanhe meus códigos no GitHub!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="red" href="https://github.com/johnaopedro">
              GitHub
            </Button>
            <Button variant="blue" href="mailto:johnaopedro@gmail.com">
              Email
            </Button>
          </div>
        </motion.div>

        <p className="text-foreground/50 text-sm">
          &copy; {year} João Pedro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
