"use client";
import Image from "next/image"
import { Github, ExternalLink, FileText, Video, Globe } from "lucide-react";

const Experience = () => {
    const experienceData = [
        {
            role: "Desenvolvedor Freelance Android/Full Stack — CR Cursos",
            startYear: "Março de 2025",
            endYear: "Presente",
            location: "Toritama, PE (Remoto)",
            icon: "/images/experience/crcursos.svg",
            projectLinks: [
                { label: "GitHub", url: "https://github.com/micaellimaj/CR_Cursos_App", icon: <Github size={14} /> },
                { label: "Documentação", url: "https://docs.google.com/document/d/1Nd0ikyZJDA96FFro96SFDu_jHJm8G6StRQycPI-udqc/edit?tab=t.0", icon: <FileText size={14} /> }
            ],
            bulletPoints: [
                "Desenvolvimento Full Stack (Node.js/React Native): Construção de ecossistema educacional modular seguindo Clean Architecture.",
                "Garantia de Qualidade (QA): Implementação de suíte robusta de testes unitários e de integração (Jest/Supertest).",
                "Infraestrutura e DevOps: Gestão de serviços Firebase e conteinerização com Docker."
            ]
        },
        {
            role: "Estagiário de Desenvolvimento Full-Stack — SIAPESQ",
            startYear: "Maio de 2025",
            endYear: "Dezembro de 2025",
            location: "Rio Grande, RS (Remoto)",
            icon: "/images/experience/siapesq.svg",
            bulletPoints: [
                "Desenvolvimento de APIs RESTful e lógica de negócio em TypeScript (NestJS/Express.js).",
                "Modelagem de banco PostgreSQL com Prisma ORM e deploys em NeonDB.",
                "Front-end em React para painel administrativo com dashboards interativos."
            ]
        },
        {
            role: "Tutor de Tecnologia — CESAR School",
            startYear: "Abril de 2025",
            endYear: "Dezembro de 2025",
            location: "Santa Cruz, PE",
            icon: "/images/experience/cesar.svg",
            bulletPoints: [
                "Suporte pedagógico e técnico aos alunos no aprendizado de tecnologias web."
            ]
        },
        {
            role: "Desenvolvedor Web Freelance",
            startYear: "2023",
            endYear: "2024",
            location: "Caruaru, PE (Remoto)",
            icon: "/images/experience/frelar.svg",
            projectLinks: [
                { label: "Dinha Kids (GitHub)", url: "https://github.com/micaellimaj/Sistema_Dinha_Kids", icon: <Github size={14} /> },
                { label: "Dinha Kids (Doc)", url: "https://docs.google.com/document/d/1Euuo8tCh54hrV0XyW2pHWVBSirZnhpLjRUxGRz9b5sI/edit?tab=t.0", icon: <FileText size={14} /> },
                { label: "Dinha Kids (Vídeo)", url: "https://www.canva.com/design/DAGghIXAI9w/AellKNqh-d12lPLR3W48EA/view?utm_content=DAGghIXAI9w&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc99da75059", icon: <Video size={14} /> },
                { label: "Fundação Macedo (GitHub)", url: "https://github.com/micaellimaj/Site_Fundacao_Macedo", icon: <Github size={14} /> },
                { label: "Fundação Macedo (Deploy)", url: "https://fundacaomacedo.netlify.app/", icon: <Globe size={14} /> }
            ],
            bulletPoints: [
                "Projeto 1 (Dinha Kids): Sistema de gerenciamento de confecção infantil com Java/Spring Boot.",
                "Projeto 2 (Fundação Macedo): Criação de site responsivo com JS e boas práticas de design."
            ]
        }
    ];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Experiência Profissional</p>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
                            {experienceData.map((value, index) => (
                                <div key={index} className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0">
                                    <div className="flex flex-wrap gap-5 items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <Image src={value.icon} alt="icon" width={32} height={32} />
                                            <h5 className="text-lg font-semibold">{value.role}</h5>
                                        </div>
                                        <div className="flex items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3">
                                            <div className={`w-4 h-2 rounded-sm ${value.endYear === "Presente" ? 'bg-primary' : 'bg-primary/20'} `} />
                                            <p className="text-sm text-primary font-medium">{value.startYear} – {value.endYear}</p>
                                        </div>
                                    </div>

                                    <ul className="flex flex-col gap-3">
                                        {value.bulletPoints.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-base text-secondary leading-relaxed text-justify">
                                                <span className="text-primary mt-1">•</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Renderização de Links de Projetos */}
                                    {value.projectLinks && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {value.projectLinks.map((link, lIdx) => (
                                                <a 
                                                    key={lIdx} 
                                                    href={link.url} 
                                                    target="_blank" 
                                                    className="flex items-center gap-2 text-xs font-medium text-primary hover:bg-primary/5 border border-primary/10 rounded-md px-3 py-1.5 transition-colors"
                                                >
                                                    {link.icon} {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
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