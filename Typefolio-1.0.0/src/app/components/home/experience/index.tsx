"use client";
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"; // Importe os ícones para os links

const Experience = () => {
    const experienceData = [
        {
            role: "Desenvolvedor Freelance Android/Full Stack — CR Cursos",
            startYear: "2025",
            endYear: "Present",
            location: "Toritama, PE (Remoto)",
            icon: "/images/icon/spark-icon.svg",
            githubUrl: "https://github.com/micaellimaj", // Adicione seu link aqui
            bulletPoints: [
                "Desenvolvimento Full Stack (Node.js/React Native): Construção de ecossistema educacional modular seguindo Clean Architecture, com front-end segmentado por perfis e separação rigorosa entre UI e lógica de negócio.",
                "Garantia de Qualidade (QA): Implementação de suíte robusta de testes unitários e de integração (Jest/Supertest) em 12+ módulos.",
                "Infraestrutura e DevOps: Gestão de serviços Firebase, documentação via Swagger/OpenAPI e conteinerização com Docker/Docker Compose."
            ]
        },
        {
            role: "Estagiário de Desenvolvimento Full-Stack — SIAPESQ",
            startYear: "2025",
            endYear: "2025",
            location: "Rio Grande, RS (Remoto)",
            icon: "/images/icon/asana-icon.svg",
            bulletPoints: [
                "Desenvolvimento de APIs RESTful e lógica de negócio em TypeScript (NestJS/Express.js) com foco em segurança (JWT, Guards e permissões por papéis).",
                "Modelagem de banco PostgreSQL com Prisma ORM e deploys em NeonDB e Render.",
                "Front-end em React para painel administrativo com dashboards interativos e gestão de arquivos em Cloudflare R2/AWS S3."
            ]
        },
        {
            role: "Tutor de Tecnologia — CESAR School",
            startYear: "2025",
            endYear: "2025",
            location: "Santa Cruz, PE",
            icon: "/images/icon/behance-icon.svg",
            bulletPoints: [
                "Suporte pedagógico e técnico aos alunos no aprendizado de tecnologias web."
            ]
        },
        {
            role: "Desenvolvedor Web Freelance",
            startYear: "2023",
            endYear: "2024",
            location: "Caruaru, PE (Remoto)",
            icon: "/images/icon/twitter-icon.svg",
            // Links específicos para os dois projetos
            projectLinks: [
                { label: "GitHub - Dinha Kids", url: "https://github.com/micaellimaj" },
                { label: "GitHub - Site Institucional", url: "https://github.com/micaellimaj" }
            ],
            bulletPoints: [
                "Projeto 1 (Dinha Kids): Sistema de gerenciamento de confecção infantil com Java/Spring Boot e Dashboard no Power BI.",
                "Projeto 2 (Site Institucional): Criação de site responsivo com JS e boas práticas de design."
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
                        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16 ">
                            {experienceData.map((value, index) => (
                                <div key={index} className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0">
                                    <div className="flex flex-wrap gap-5 items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <Image src={value.icon} alt="icon" width={32} height={32} />
                                            <h5 className="text-lg font-semibold">{value.role}</h5>
                                        </div>
                                        <div className="flex items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3">
                                            <div className={`w-4 h-2 rounded-sm ${value.endYear === "Present" ? 'bg-primary' : 'bg-primary/20'} `} />
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

                                    {/* Links do GitHub / Projetos */}
                                    <div className="flex flex-wrap gap-3 mt-2">
                                        {value.githubUrl && (
                                            <a href={value.githubUrl} target="_blank" className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                                                <Github size={16} /> Ver no GitHub
                                            </a>
                                        )}
                                        {value.projectLinks?.map((link, lIdx) => (
                                            <a key={lIdx} href={link.url} target="_blank" className="flex items-center gap-2 text-sm font-medium text-primary hover:underline border border-primary/10 rounded-md px-2 py-1">
                                                <ExternalLink size={14} /> {link.label}
                                            </a>
                                        ))}
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