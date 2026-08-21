"use client";
import { useState } from "react";
import Image from "next/image";
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
    roles: string[];
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
            id: "portal-stricto",
            role: "Desenvolvedor Backend (MVP) - Voluntário",
            company: "Portal Stricto",
            startYear: "Maio de 2026",
            endYear: "Em Andamento",
            location: "Caruaru, PE (Remoto)",
            icon: "/images/experience/portalstricto.svg", 
            roles: ["Desenvolvimento Backend", "Web Scraping", "Pipelines de ETL", "Arquitetura de Dados", "MVP"],
            shortSummary: "Responsável pela arquitetura do backend e desenvolvimento de pipelines de web scraping e ETL para agregação e tratamento de dados públicos. Implementação de API assíncrona com Python (FastAPI) estruturada para futuras integrações com IA.",
            fullDetails: {
                situacao: "Desenvolvimento do MVP de uma plataforma centralizada para agregação, estruturação e processamento automatizado de dados públicos.",
                tarefa: "Responsável pelo desenho da arquitetura técnica do ecossistema, modelagem do banco de dados e engenharia de dados para coleta automatizada de informações.",
                acoes: [
                    "Desenvolvimento Backend: Construção de uma API assíncrona, leve e de alto desempenho utilizando Python com o framework FastAPI.",
                    "Engenharia de Dados (ETL): Criação de pipelines automatizados de web scraping para extração, limpeza (Pandas) e padronização de dados brutos vindos de múltiplas fontes.",
                    "Modelagem de Dados: Estruturação e gerenciamento da base de dados relacional utilizando PostgreSQL e SQLModel.",
                    "Arquitetura Escalável: Planejamento técnico focado em extensibilidade, deixando o ecossistema pronto para receber futuras integrações com modelos de Inteligência Artificial e sistemas de automação."
                ],
                resultados: "Infraestrutura inicial do MVP e pipelines de ingestão de dados consolidados com sucesso."
            }
        },
        {
            id: "marketplace-equipistas - Freelance",
            role: "Desenvolvedor Full Stack",
            company: "Marketplace Entre Equipistas",
            startYear: "Maio de 2026",
            endYear: "Julho de 2026",
            location: "Caruaru, PE (Remoto)",
            icon: "/images/experience/equipistas.svg", 
            roles: ["Desenvolvimento Full Stack", "Clean Architecture", "Next.js", "Node.js", "Modelagem de Dados"],
            shortSummary: "Desenvolvimento ponta a ponta de um marketplace privado e seguro para uma comunidade em Caruaru. Arquitetura robusta com Node.js, TypeScript e Clean Architecture no backend, integrada a uma interface web moderna em Next.js 14.",
            projectLinks: [
                { label: "Apresentação", url: "https://market-place-entre-equipistas-visua.vercel.app/", icon: <Globe size={12} /> },
            ],
            fullDetails: {
                situacao: "Necessidade de um ecossistema digital exclusivo e seguro para a comunidade de equipistas de um grupo religioso gerenciar, anunciar e comercializar produtos com painéis de controle restritos por perfil.",
                tarefa: "Responsável pelo design da arquitetura técnica backend, modelagem do banco de dados relacional, desenvolvimento da interface web responsiva e integração desacoplada dos serviços.",
                acoes: [
                    "Arquitetura Backend & SOLID: Construção de uma API REST modular em Node.js e TypeScript utilizando os princípios de Clean Architecture e Use Cases para o isolamento completo das regras de negócio.",
                    "Persistência & Infraestrutura Cloud: Modelagem e gerenciamento do banco de dados relacional PostgreSQL via Prisma ORM com controle de histórico por Migrations e hospedagem no ecossistema Supabase.",
                    "Segurança & Moderação: Implementação de middlewares para validação de tokens JWT, proteção de endpoints sensíveis e criação de um módulo administrativo para controle e moderação de contas de usuários.",
                    "Interface Web Moderna: Desenvolvimento do front-end em Next.js 14 utilizando App Router para navegação otimizada, Tailwind CSS e Shadcn UI para componentes de interface fluidos e reutilizáveis.",
                    "Gerenciamento de Estado & Consumo de API: Centralização das chamadas HTTP em uma camada dedicada de Services com Axios e controle de estados globais via Context API para autenticação e feedbacks visuais."
                ],
                resultados: "Plataforma estável, segura e escalável entregue com sucesso, contando com tipagem estática de ponta a ponta e uma arquitetura resiliente preparada para futuras expansões sem acoplamento."
            }
        },
        {
            id: "cr-cursos",
            role: "Desenvolvedor Freelance Android/Full Stack",
            company: "CR Cursos",
            startYear: "Março de 2025",
            endYear: "Abril de 2026",
            location: "Toritama, PE (Remoto)",
            icon: "/images/experience/crcursos.svg",
            roles: ["Node.js", "React Native", "Expo", "Firebase", "Jest", "TypeScript"],
            shortSummary: "Desenvolvimento de ecossistema educacional modular com Node.js, React Native e suite robusta de testes (QA).",
            projectLinks: [
                { label: "Apresentação", url: "https://crcursos-app-apresentacao.netlify.app/", icon: <Globe size={12} /> },
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
                { label: "Dinha Kids - Doc", url: "https://docs.google.com/document/d/1Euuo8tCh54hrV0XyW2pHWVBSirZnhpLjRUxGRz9b5sI/edit?tab=t.0", icon: <FileText size={12} /> },
                { label: "Dinha Kids - Apresentação", url: "https://www.canva.com/design/DAGghIXAI9w/AellKNqh-d12lPLR3W48EA/view", icon: <PlayCircle size={12} /> },
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
                                <div key={item.id} className="group border-b border-primary/10 last:border-0 py-8 first:pt-4">
                                    <div className="flex flex-col gap-4">
                                        
                                        {/* Header: Cargo e Data */}
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                                                    <Image src={item.icon} alt={item.company} width={22} height={22} className="object-contain" />
                                                </div>
                                                <div>
                                                    <h4 className="text-base font-bold text-foreground leading-tight">{item.role}</h4>
                                                    <p className="text-xs text-muted-foreground font-medium mt-1">{item.company} • {item.location}</p>
                                                </div>
                                            </div>
                                            
                                            {/* Badge de Data com gradiente da página de certificados */}
                                            <div className="self-start sm:self-auto p-[1px] rounded-full transition-all duration-300 hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] hover:scale-[1.02]">
                                                <div className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-card border border-primary/10 text-primary group-hover:border-transparent transition-colors">
                                                    {item.startYear} — {item.endYear}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Resumo Curto */}
                                        <p className="text-sm text-muted-foreground leading-relaxed sm:pl-14">
                                            {item.shortSummary}
                                        </p>

                                        {/* Tags de Habilidades com gradiente da página de certificados */}
                                        <div className="flex flex-wrap gap-1.5 sm:pl-14">
                                            {item.roles.map((tech, idx) => (
                                                <div 
                                                    key={idx}
                                                    className="p-[1px] rounded-md transition-all duration-300 hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] hover:scale-[1.05]"
                                                >
                                                    <span className="block px-2 py-0.5 rounded-[5px] text-[10px] font-semibold uppercase tracking-wide bg-card border border-primary/10 text-primary group-hover:border-transparent transition-colors">
                                                        {tech}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Links Rápidos */}
                                        {item.projectLinks && (
                                            <div className="flex flex-wrap gap-2 sm:pl-14">
                                                {item.projectLinks.map((link, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="p-[1px] rounded transition-all duration-300 hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] hover:scale-[1.02]"
                                                    >
                                                        <a 
                                                            href={link.url} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer" 
                                                            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-tight text-foreground/80 bg-card border border-primary/10 rounded px-2.5 py-1 hover:border-transparent transition-colors"
                                                        >
                                                            {link.icon} {link.label}
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Detalhes Expandidos (Padrão STAR) */}
                                        <div className={`sm:pl-14 overflow-hidden transition-all duration-500 ease-in-out ${expandedId === item.id ? 'max-h-[1200px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                            <div className="grid gap-5 border-l-2 border-primary/20 pl-4 sm:pl-6 py-2 bg-primary/[0.02] dark:bg-primary/[0.05] rounded-r-xl">
                                                <div>
                                                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase mb-1 tracking-wider">
                                                        <Rocket size={14} /> Situação
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">{item.fullDetails.situacao}</p>
                                                </div>

                                                <div>
                                                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase mb-1 tracking-wider">
                                                        <Target size={14} /> Tarefa
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">{item.fullDetails.tarefa}</p>
                                                </div>

                                                <div>
                                                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase mb-1 tracking-wider">
                                                        <Wrench size={14} /> Ações
                                                    </div>
                                                    <ul className="space-y-2 mt-1.5">
                                                        {item.fullDetails.acoes.map((acao, idx) => (
                                                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2.5">
                                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                                <span>{acao}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase mb-1 tracking-wider">
                                                        <Award size={14} /> Resultados
                                                    </div>
                                                    <p className="text-sm text-foreground font-medium italic">{item.fullDetails.resultados}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Botão de Expansão */}
                                        <button 
                                            onClick={() => toggleExpand(item.id)}
                                            className="sm:ml-14 w-fit flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:opacity-80 transition-opacity mt-1 cursor-pointer"
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