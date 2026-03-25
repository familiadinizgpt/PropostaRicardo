/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Coffee, 
  TrendingUp, 
  FileText, 
  Globe, 
  CheckCircle2, 
  Calendar, 
  DollarSign, 
  ShieldCheck, 
  ChevronRight,
  ArrowRight,
  BarChart3,
  Settings,
  Users,
  Award,
  QrCode,
  MessageCircle
} from "lucide-react";
import { cn } from "@/src/lib/utils";

// Custom font import in index.css would be better, but we can use standard serif/sans
// for this demo and assume Cormorant Garamond is available or fallback to Georgia.

const GOLD = "#D4AF37";
const DARK = "#0A0A0A";

const Section = ({ title, children, icon: Icon, id }: { title: string, children: React.ReactNode, icon?: any, id?: string }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="py-20 border-b border-white/10"
  >
    <div className="flex items-center gap-4 mb-12">
      {Icon && <Icon className="w-8 h-8 text-[#D4AF37]" />}
      <h2 className="text-3xl md:text-4xl font-serif italic text-white tracking-tight">
        {title}
      </h2>
    </div>
    {children}
  </motion.section>
);

const Card = ({ title, description, icon: Icon, items }: { title: string, description?: string, icon: any, items?: string[] }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
    <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-[#D4AF37]" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    {description && <p className="text-white/60 text-sm leading-relaxed mb-4">{description}</p>}
    {items && (
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-white/70">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const whatsappLink = "https://wa.me/5561985134992?text=Olá%20Marcio,%20gostaria%20de%20falar%20sobre%20a%20proposta%20do%20café.";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 flex justify-between items-center",
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent"
      )}>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center font-serif text-2xl font-bold text-black">
            D
          </div>
          <div className="hidden sm:block">
            <span className="block text-sm font-bold tracking-widest uppercase">Diniz</span>
            <span className="block text-[10px] tracking-[0.3em] uppercase opacity-60">Contabilidade</span>
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-medium text-white/60">
          <a href="#apresentacao" className="hover:text-[#D4AF37] transition-colors">Apresentação</a>
          <a href="#escopo" className="hover:text-[#D4AF37] transition-colors">Escopo</a>
          <a href="#investimento" className="hover:text-[#D4AF37] transition-colors">Investimento</a>
          <a href="#contato" className="hover:text-[#D4AF37] transition-colors">Contato</a>
        </div>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-[#D4AF37] text-black text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all flex items-center gap-2"
        >
          <MessageCircle className="w-3 h-3" /> Falar com Marcio
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
            alt="Coffee Plantation" 
            className="w-full h-full object-cover opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0A0A]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-4 py-1 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] mb-6">
              Proposta Comercial Exclusiva
            </span>
            <h1 className="text-5xl md:text-8xl font-serif italic mb-6 leading-tight">
              A Excelência do seu Café,<br />
              <span className="text-[#D4AF37]">Elevada ao Mercado Global.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/60 text-lg md:text-xl mb-10 font-light leading-relaxed">
              Estruturação de Gestão Financeira, Fiscal e Preparação para Exportação de Café Especial.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#apresentacao" className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-[#D4AF37] transition-all group">
                Ver Proposta <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-white/40 text-sm italic">Para: Ricardo</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent mx-auto" />
        </motion.div>
      </header>

      <main className="container mx-auto px-6 max-w-6xl">
        {/* Apresentação */}
        <Section title="Apresentação" icon={FileText} id="apresentacao">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
              <p>
                Prezado <span className="text-white font-medium">Ricardo</span>,
              </p>
              <p>
                Conforme nossa conversa, apresento a proposta para estruturação completa da gestão financeira, fiscal e operacional da sua fazenda, com foco na organização do negócio e na viabilização da exportação direta de café especial.
              </p>
              <p>
                O trabalho proposto tem como objetivo transformar a operação atual — hoje sem controles estruturados — em um modelo profissional, com governança, controle de custos, segurança fiscal e capacidade de acessar mercados internacionais com maior rentabilidade.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D4AF37]/10 blur-2xl rounded-full" />
              <div className="relative bg-white/5 border border-white/10 p-10 rounded-3xl">
                <h3 className="text-[#D4AF37] font-serif italic text-2xl mb-6">Nosso Objetivo</h3>
                <ul className="space-y-4">
                  {[
                    "Controle financeiro completo da operação",
                    "Organização fiscal e contábil adequada",
                    "Visão clara de custos e rentabilidade por safra",
                    "Emissão correta de documentos fiscais",
                    "Preparação para comercialização e exportação direta"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Escopo */}
        <Section title="Escopo dos Serviços" icon={Settings} id="escopo">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
              icon={TrendingUp}
              title="Estruturação Inicial"
              items={[
                "Diagnóstico da situação atual",
                "Organização de gastos realizados",
                "Definição do modelo operacional",
                "Estruturação do fluxo financeiro"
              ]}
            />
            <Card 
              icon={BarChart3}
              title="Gestão (Conta Azul)"
              items={[
                "Implantação completa do sistema",
                "Plano de contas para agronegócio",
                "Centros de custo por atividade/safra",
                "Integração bancária e notas fiscais"
              ]}
            />
            <Card 
              icon={ShieldCheck}
              title="Estruturação Fiscal"
              items={[
                "Organização da atividade rural",
                "Parametrização de notas fiscais",
                "Orientação sobre obrigações",
                "Conformidade com legislação"
              ]}
            />
            <Card 
              icon={Globe}
              title="Preparação Exportação"
              items={[
                "Estrutura para exportação direta",
                "Fluxo operacional de exportação",
                "Apoio na formação de preço",
                "Documentação e processos"
              ]}
            />
            <Card 
              icon={Users}
              title="Treinamento"
              items={[
                "Treinamento dos responsáveis",
                "Rotinas administrativas",
                "Padronização de processos",
                "Acompanhamento assistido"
              ]}
            />
            <div className="bg-[#D4AF37] p-8 rounded-2xl flex flex-col justify-center text-black">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Diferencial</h3>
              <p className="text-black/80 text-sm font-medium">
                Não é apenas contabilidade. É a estruturação completa do seu negócio para o mundo.
              </p>
            </div>
          </div>
        </Section>

        {/* Modelo de Execução */}
        <Section title="Modelo de Execução" icon={Calendar}>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
                  A implantação será realizada de forma <span className="text-[#D4AF37] font-medium">100% remota</span>, por meio de metodologia estruturada, garantindo eficiência e agilidade.
                </p>
                <div className="space-y-4">
                  {[
                    "Reuniões periódicas online",
                    "Acompanhamento contínuo",
                    "Implantação assistida dos controles",
                    "Treinamento operacional"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      <span className="text-white/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop" alt="Coffee" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 mt-8">
                  <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2061&auto=format&fit=crop" alt="Coffee beans" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Investimento */}
        <Section title="Investimento" icon={DollarSign} id="investimento">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Projeto */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/50 to-transparent blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 h-full">
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4 block">Projeto de Estruturação</span>
                <h3 className="text-3xl font-serif italic mb-6">Implantação</h3>
                <div className="text-5xl font-bold mb-8">
                  <span className="text-lg font-normal text-white/40 align-top mr-1">R$</span>
                  20.000
                </div>
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-white/40 font-medium">Entrada (Assinatura)</span>
                    <span className="font-bold">R$ 10.000 (50%)</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-white/40 font-medium">30 Dias</span>
                    <span className="font-bold">R$ 5.000 (25%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 font-medium">Conclusão Conta Azul</span>
                    <span className="font-bold">R$ 5.000 (25%)</span>
                  </div>
                </div>
                <div className="p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-xl mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <QrCode className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-xs font-bold uppercase tracking-widest">Pagamento via PIX</span>
                  </div>
                  <p className="text-[10px] text-white/60 mb-1">Chave CNPJ do Escritório:</p>
                  <p className="text-sm font-mono font-bold text-[#D4AF37]">29.936.241/0001-29</p>
                </div>
                <p className="text-xs text-white/30 italic">Prazo estimado: 30 a 45 dias</p>
              </div>
            </div>

            {/* Mensal */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-[#D4AF37] rounded-3xl p-10 h-full text-black">
                <span className="text-black/60 text-xs font-bold uppercase tracking-widest mb-4 block">Suporte Contínuo</span>
                <h3 className="text-3xl font-serif italic mb-6">Acompanhamento Mensal</h3>
                <div className="text-5xl font-bold mb-2">
                  <span className="text-lg font-normal text-black/40 align-top mr-1">R$</span>
                  4.050
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-8 opacity-60">(Equivalente a 2,5 salários mínimos)</p>
                <div className="space-y-3 mb-10">
                  {[
                    "Contabilidade Completa",
                    "Gestão Fiscal",
                    "Gestão Financeira Assistida",
                    "Suporte à Operação"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      {item}
                    </div>
                  ))}
                </div>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-black text-white text-center font-bold rounded-xl hover:bg-white hover:text-black transition-colors"
                >
                  Aceitar Proposta
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl text-sm text-white/40 leading-relaxed">
            <p className="mb-2 font-bold text-white/60">Condições e Limitações:</p>
            <p>Esta proposta considera a operação na condição de produtor rural pessoa física (CPF). Caso haja decisão futura de migração para pessoa jurídica (CNPJ), será necessária nova proposta comercial. Não contempla: DP (folha), jurídico, abertura societária, certificações específicas ou despacho aduaneiro.</p>
          </div>
        </Section>

        {/* Finalização */}
        <section className="py-32 text-center" id="contato">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif italic mb-8">Pronto para o próximo nível?</h2>
            <p className="max-w-xl mx-auto text-white/50 mb-12">
              O sucesso do projeto depende da colaboração mútua. Por se tratar de um projeto com dedicação direta, nossa agenda é limitada.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-[#D4AF37]/30">
                  <div className="text-[#D4AF37] font-serif text-3xl font-bold">D</div>
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-white/40">Atenciosamente,</p>
                  <p className="text-xl font-serif italic">Marcio Diniz</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#D4AF37]">Diniz Contabilidade</p>
                </div>
              </div>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-[#D4AF37] text-black font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-2xl shadow-[#D4AF37]/20 flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" /> Aceitar Proposta
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.3em] text-white/20">
        &copy; 2026 Diniz Contabilidade & Gestão. Todos os direitos reservados.
      </footer>
    </div>
  );
}
