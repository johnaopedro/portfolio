"use client";

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Letrix',
    description: 'Plataforma web que utiliza Inteligência Artificial (Visão Computacional) para ler a escrita manuscrita e avaliar automaticamente o nível de letramento de crianças.',
    stack: ['Next.js', 'Supabase', 'Gemini AI', 'Mailjet'],
    links: [
      { name: 'Acessar App', url: 'https://letrix-beryl.vercel.app' }
    ]
  },
  {
    title: 'Computador de Bordo TrackIt',
    description: 'Rastreador telemétrico IoT reproduzindo o produto da Aiko Digital. Desenvolvido com ESP32 (FreeRTOS) e MQTT, para monitoramento em tempo real e detecção de acidentes.',
    stack: ['C/C++ (ESP-IDF)', 'FreeRTOS', 'MQTT / IoT'],
    links: [
      { name: 'Ver no GitHub', url: 'https://github.com/johnaopedro/Trabalho-Final-TrackIt' }
    ]
  },
  {
    title: 'Gastos Públicos DF',
    description: 'Plataforma de transparência dos gastos públicos do Distrito Federal, com visualizações interativas de dados.',
    stack: ['JavaScript', 'Trabalho Colaborativo'],
    links: [
      { name: 'Ver no GitHub', url: 'https://github.com/unb-mds/Gastos-DF-2024-02' }
    ]
  },
  {
    title: 'PyToC',
    description: 'Desenvolvimento de um compilador em C. Atuei ativamente na refatoração, implementação de testes automatizados e resolução de conflitos.',
    stack: ['C', 'Make', 'Testes'],
    links: [
      { name: 'Ver no GitHub', url: 'https://github.com/Tiago1604/compiladores_14' }
    ]
  },
  {
    title: 'Correio Digital',
    description: 'Design, documentação e iteração de arquitetura de sistemas para a disciplina de Arquitetura e Desenho de Software da UnB.',
    stack: ['Arquitetura de Software', 'MkDocs'],
    links: [
      { name: 'Entrega 1', url: 'https://github.com/johnaopedro/2025.2-T01-G2_CorreioDigital_Entrega_01' },
      { name: 'Entrega 2', url: 'https://github.com/johnaopedro/2025.2-T01-G2_CorreioDigital_Entrega_02' },
      { name: 'Entrega 3', url: 'https://github.com/johnaopedro/2025.2-T01-G2_CorreioDigital_Entrega_03' }
    ]
  },
  {
    title: 'Projetos de Algoritmos',
    description: 'Resoluções de problemas clássicos envolvendo Algoritmos Ambiciosos, Dividir e Conquistar, Grafos e Programação Dinâmica.',
    stack: ['Python', 'Grafos'],
    links: [
      { name: 'Grafos 1', url: 'https://github.com/projeto-de-algoritmos-2024/Grafos1_Leet_code' },
      { name: 'Grafos 2', url: 'https://github.com/projeto-de-algoritmos-2024/Grafos2_Leet_code' },
      { name: 'Ambiciosos', url: 'https://github.com/projeto-de-algoritmos-2024/AlgoritmosAmbiciosos_Leet_code' },
      { name: 'D&C', url: 'https://github.com/projeto-de-algoritmos-2024/DividirEConquistar_Leet_Code' },
      { name: 'Dinâmica', url: 'https://github.com/projeto-de-algoritmos-2024/ProgramacaoDinamica_Leet_code' }
    ]
  },
  {
    title: 'MEPA Energia API',
    description: 'Desenvolvimento e testes para a API do MEC Energia. Implementação rigorosa de testes baseados em MC/DC para os processos de recomendação.',
    stack: ['Python', 'Pytest', 'GitLab'],
    links: [
      { name: 'Ver no GitLab', url: 'https://gitlab.com/lappis-unb/projetos-energia/mec-energia/mec-energia-api' }
    ]
  },
  {
    title: 'Cortador de Grama Autônomo',
    description: 'Sistemas embarcados e controle via software. Implementação de comunicação Bluetooth na ESP32 (ESP-IDF) e integração Web Bluetooth em React.',
    stack: ['C/C++', 'ESP32', 'React'],
    links: [
      { name: 'Software', url: 'https://gitlab.com/unb-esw/fga-pi2/semestre-2025-1/cortador-de-grama/software' },
      { name: 'Embarcados', url: 'https://gitlab.com/johnaopedro' }
    ]
  },
  {
    title: 'Cadastro Único (Requisitos)',
    description: 'Focado em Engenharia de Requisitos de Software. Engloba processos de elicitação, modelagem, análise e validação de requisitos para sistemas complexos.',
    stack: ['Eng. de Requisitos', 'Validação', 'Documentação'],
    links: [
      { name: 'Ver GitHub', url: 'https://github.com/johnaopedro/2025.1-Cadastro-Unico' },
      { name: 'Documentação', url: 'https://requisitos-de-software.github.io/2025.1-Cadastro-Unico/' }
    ]
  },
  {
    title: 'Qualidade de Software',
    description: 'Aplicação de conceitos e práticas de Qualidade de Software na avaliação técnica do aplicativo Guardiões da Saúde (Ministério da Saúde).',
    stack: ['Testes e Qualidade', 'Documentação'],
    links: [
      { name: 'Ver GitHub', url: 'https://github.com/johnaopedro/2025-2_T01_MARLYN-WESCOFF' },
      { name: 'Página Web', url: 'https://fcte-qualidade-de-software-1.github.io/2025-2_T01_MARLYN-WESCOFF/' }
    ]
  },
  {
    title: 'Controle de Cruzamentos (Embarcados)',
    description: 'Sistema distribuído com TCP/IP, GPIO, UART e MODBUS RTU. Integração de sensores, semáforos e câmeras LPR na Raspberry Pi e ESP32.',
    stack: ['Sist. Distribuídos', 'MODBUS / UART', 'GPIO / RPi'],
    links: [
      { name: 'Ver no GitHub', url: 'https://github.com/johnaopedro/Trabalho-1-Sistema-Distribuido' }
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-spider-blue">
          Projetos em Destaque
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
            >
              <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
              <p className="text-foreground/70 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map(tech => (
                  <span key={tech} className="text-xs font-semibold bg-spider-red/10 text-spider-red px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.links.map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold border border-zinc-200 bg-white hover:bg-zinc-50 text-foreground px-3 py-1.5 rounded transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
