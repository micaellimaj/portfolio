"use client";
import { useState } from "react";
import Image from "next/image"
import { Github, FileText, Globe, ChevronDown, Rocket, Target, Wrench, Award, PlayCircle } from "lucide-react";

interface ProjectLink {
    label: string;
    url: string;
    icon: React.ReactNode;
}

interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    startYear: string;
    endYear: string;
    location: string;
    icon: string;
    roles: string[]; // Nova adição
    projectLinks?: ProjectLink[];
    shortSummary: string;
    fullDetails: {
        situacao: string;
        tarefa: string;
        acoes: string[];
        resultados: string;
    };
}

const Experience = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const experienceData: ExperienceItem[] = [
        {
            id: "cr-cursos",
            role: "Desenvolvedor Freelance Android/Full Stack",
            company: "CR Cursos",
            startYear: "Março de 2025",
            endYear: "Presente",
            location: "Toritama, PE (Remoto)",
            icon: "/images/experience/crcursos.svg",
            roles: ["Node.js", "React Native", "Expo", "Firebase", "Jest", "TypeScript"],
            shortSummary: "Desenvolvimento de ecossistema educacional modular com Node.js, React Native e suite robusta de testes (QA).",
            projectLinks: [
                { label: "GitHub", url: "https://github.com/micaellimaj/CR_Cursos_App", icon: <Github size={12} /> },
                { label: "Documentação", url: "https://docs.google.com/document/d/1Nd0ikyZJDA96FFro96SFDu_jHJm8G6StRQycPI-udqc/edit?tab=t.0", icon: <FileText size={12} /> }
            ],
            fullDetails: {
                situacao: "Atuação em projeto pontual para modernizar a comunicação institucional via app Android, centralizando cursos e aulas.",
                tarefa: "Responsável pelo Full Stack, arquitetura, back-end, mobile e estratégia de QA com foco em Clean Code.",
                acoes: [
                    "Back-end Modular: Node.js/Express seguindo padrão de domínios (Use-Cases, Services, Models).",
                    "Ecossistema Firebase: Firestore para dados, Auth para login e Storage para arquivos.",
                    "Cultura de QA: Implementação de Jest e Supertest para garantir integridade de regras complexas.",
                    "Mobile: App React Native (Expo) com Context API e validações em tempo real."
                ],
                resultados: "Entrega de plataforma estável com redução drástica no tempo de depuração devido aos testes automatizados."
            }
        },
        {
            id: "siapesq",
            role: "Estagiário de Desenvolvimento Full-Stack",
            company: "SIAPESQ",
            startYear: "Maio de 2025",
            endYear: "Dezembro de 2025",
            location: "Rio Grande, RS (Remoto)",
            icon: "/images/experience/siapesq.svg",
            roles: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "React", "Tailwind CSS", "Docker", "API"],
            shortSummary: "Construção de Marketplace B2B/B2C de pescados utilizando NestJS, TypeScript e modelagem complexa em PostgreSQL.",
            fullDetails: {
                situacao: "Desenvolvimento de Marketplace Digital e melhorias de segurança/UX na aplicação principal da SIAPESQ.",
                tarefa: "Estruturação técnica baseada em Clean Architecture e DDD para garantir manutenibilidade.",
                acoes: [
                    "Back-end: Duas versões (Express e NestJS) explorando arquitetura modular e RBAC.",
                    "DB: Modelagem PostgreSQL com Prisma gerenciando +20 modelos e fluxos de aprovação.",
                    "Segurança: Implementação de fluxos críticos como recuperação de senha e confirmação de e-mail.",
                    "Front-end: Painel Administrativo em React com total Type Safety."
                ],
                resultados: "Entrega de ecossistema robusto com base sólida para evolução contínua e maior segurança."
            }
        },
        {
            id: "cesar",
            role: "Tutor de Tecnologia",
            company: "CESAR School",
            startYear: "Abril de 2025",
            endYear: "Setembro de 2025",
            location: "Santa Cruz, PE",
            icon: "/images/experience/cesar.svg",
            roles: ["Python", "JavaScript", "HTML/CSS", "Git", "GitHub", "Metodologias Ágeis"],
            shortSummary: "Apoio pedagógico e técnico em trilhas de Desenvolvimento Web e Python para o programa Florescendo Talentos.",
            fullDetails: {
                situacao: "Programa focado em formação técnica para estudantes do Ensino Médio.",
                tarefa: "Tutor responsável pelo auxílio nas trilhas de aprendizagem e projetos práticos.",
                acoes: [
                    "Orientação: Trilhas de HTML, CSS, JS e Python com foco em lógica computacional.",
                    "Mentoria: Apoio na resolução de problemas e incentivo ao aprendizado colaborativo.",
                    "Metodologias: Estímulo ao uso de Git/GitHub e metodologias ágeis no processo."
                ],
                resultados: "Fortalecimento do vínculo teoria-prática para jovens talentos, preparando-os para o mercado."
            }
        },
        {
            id: "freelance-web",
            role: "Desenvolvedor Web Freelance",
            company: "Projetos Diversos",
            startYear: "Outubro de 2023",
            endYear: "Abril de 2024",
            location: "Caruaru, PE",
            icon: "/images/experience/frelar.svg",
            roles: ["Java", "Spring Boot", "MySQL", "Power BI", "Nextjs", "Tailwind CSS", "Thymeleaf"],
            shortSummary: "Desenvolvimento de sistemas de gestão (Java/Spring) e sites institucionais responsivos.",
            projectLinks: [
                { label: "Dinha Kids - Git", url: "https://github.com/micaellimaj/Sistema_Dinha_Kids", icon: <Github size={12} /> },
                { label: "Dinha Kids - Documentação", url: "https://docs.google.com/document/d/1Euuo8tCh54hrV0XyW2pHWVBSirZnhpLjRUxGRz9b5sI/edit?tab=t.0", icon: <FileText size={12} /> },
                { label: "Dinha Kids - Apresentação", url: "https://www.canva.com/design/DAGghIXAI9w/AellKNqh-d12lPLR3W48EA/view?utm_content=DAGghIXAI9w&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc99da75059", icon: <PlayCircle size={12} /> },
                { label: "Fundação Macedo - Git", url: "https://github.com/micaellimaj/Site_Fundacao_Macedo", icon: <Github size={12} /> },
                { label: "Fundação Macedo - Live Site", url: "https://fundacaomacedo.netlify.app/", icon: <Globe size={12} /> }
            ],
            fullDetails: {
                situacao: "Participação em projetos de indústria têxtil e setor social.",
                tarefa: "Planejamento e integração de sistemas completos (Back ao Front) e análise de dados.",
                acoes: [
                    "Projeto 1: Back-end Java/Spring Boot com dashboards Power BI conectados ao MySQL.",
                    "Projeto 2: Site institucional responsivo com foco em UI/UX e gestão via Trello/GitHub.",
                    "Integração: Uso de Thymeleaf e APIs REST para comunicação fluida entre camadas."
                ],
                resultados: "Melhoria na gestão de dados industriais e fortalecimento da presença digital de iniciativa social."
            }
        }
    ];

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="pb-16">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Experiência Profissional</p>
                    </div>
                    
                    <div className="border-t border-primary/10">
                        <div className="max-w-3xl mx-auto px-4 sm:px-7 py-6">
                            {experienceData.map((item) => (
                                <div key={item.id} className="group border-b border-primary/5 last:border-0 py-8 first:pt-4">
                                    <div className="flex flex-col gap-4">
                                        {/* Header: Cargo e Data */}
                                        <div className="flex flex-wrap items-start justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:scale-110 transition-transform">
                                                    <Image src={item.icon} alt={item.company} width={24} height={24} />
                                                </div>
                                                <div>
                                                    <h5 className="text-base font-bold text-primary leading-tight">{item.role}</h5>
                                                    <p className="text-xs text-secondary mt-1">{item.company} • {item.location}</p>
                                                </div>
                                            </div>
                                            <div className="bg-primary/[0.03] border border-primary/10 rounded-full px-3 py-1 text-[10px] font-bold text-primary uppercase tracking-wider">
                                                {item.startYear} — {item.endYear}
                                            </div>
                                        </div>

                                        {/* Resumo Curto */}
                                        <p className="text-sm text-secondary leading-relaxed pl-14">
                                            {item.shortSummary}
                                        </p>

                                        {/* Tags de Tecnologias (Roles) */}
                                        <div className="flex flex-wrap gap-1.5 pl-14 mt-1">
                                            {item.roles.map((tech, idx) => (
                                                <span key={idx} className="px-2 py-0.5 rounded-md bg-primary/[0.03] border border-primary/5 text-[9px] font-semibold text-primary/70 uppercase">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links Rápidos */}
                                        {item.projectLinks && (
                                            <div className="flex flex-wrap gap-2 pl-14 mt-1">
                                                {item.projectLinks.map((link, idx) => (
                                                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-tighter text-primary/60 hover:text-primary transition-colors border border-primary/10 rounded px-2 py-1">
                                                        {link.icon} {link.label}
                                                    </a>
                                                ))}
                                            </div>
                                        )}

                                        {/* Detalhes Expandidos (Padrão STAR) */}
                                        <div className={`pl-14 overflow-hidden transition-all duration-500 ease-in-out ${expandedId === item.id ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                            <div className="grid gap-6 border-l border-primary/10 pl-6 py-2">
                                                <div>
                                                    <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase mb-2 tracking-widest"><Rocket size={12}/> Situação</div>
                                                    <p className="text-sm text-secondary">{item.fullDetails.situacao}</p>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase mb-2 tracking-widest"><Target size={12}/> Tarefa</div>
                                                    <p className="text-sm text-secondary">{item.fullDetails.tarefa}</p>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase mb-2 tracking-widest"><Wrench size={12}/> Ações</div>
                                                    <ul className="space-y-2 mt-2">
                                                        {item.fullDetails.acoes.map((acao, idx) => (
                                                            <li key={idx} className="text-sm text-secondary flex items-start gap-2">
                                                                <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                                                                {acao}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase mb-2 tracking-widest"><Award size={12}/> Resultados</div>
                                                    <p className="text-sm text-secondary font-medium italic">{item.fullDetails.resultados}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Botão de Expansão */}
                                        <button 
                                            onClick={() => toggleExpand(item.id)}
                                            className="ml-14 w-fit flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:opacity-70 transition-opacity mt-2"
                                        >
                                            {expandedId === item.id ? "Recolher detalhes" : "Ver detalhes da experiência"}
                                            <ChevronDown size={14} className={`transition-transform duration-300 ${expandedId === item.id ? "rotate-180" : ""}`} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;