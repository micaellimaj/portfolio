"use client";
import Image from "next/image";
import { GraduationCap, Award, Calendar, CheckCircle2, FileText } from "lucide-react";

interface AcademicItem {
    date: string;
    title: string;
    institution: string;
    academicHighlight?: string;
    logo: string;
    description: string;
    skills: string[];
}

interface CertificateItem {
    platform: string;
    course: string;
    date: string;
}

const Education = () => {
    const academicData: AcademicItem[] = [
        {
            date: "Março de 2026 — Agosto de 2027",
            title: "Pós-graduação em Engenharia de Dados e IA",
            institution: "XP Educação",
            academicHighlight: "Bolsista de Mérito: Conquistada via concurso de bolsas (80% de gratuidade)",
            logo: "/images/education/xperiun.png",
            description: "Especialização focada no ciclo de vida completo do dado, desde a ingestão até a implementação de modelos de IA.",
            skills: [
                "Data Engineering: Construção de arquiteturas modernas de Data Lakes, Lakehouses e Data Warehouses.",
                "Processamento em Escala: Desenvolvimento de pipelines utilizando Spark, Databricks e Airflow.",
                "Cloud Computing: Estruturação de soluções escaláveis em ambientes AWS, Azure e GCP.",
                "AI & DevOps: Integração de LLMs, automação via APIs e versionamento rigoroso."
            ]
        },
        {
            date: "Fevereiro de 2023 — Dezembro de 2025",
            title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
            institution: "Unifavip Wyden",
            academicHighlight: "Bolsista Integral (100% ProUni) por desempenho acadêmico",
            logo: "/images/education/wyden.png",
            description: "Graduação com foco prático no desenvolvimento de soluções escaláveis e arquitetura de sistemas.",
            skills: [
                "Desenvolvimento de Software: POO em Java/Python, Estrutura de Dados e Web/Mobile.",
                "Dados e Backend: Modelagem SQL, Engenharia de Software e Integração de Sistemas.",
                "Infraestrutura e Nuvem: Fundamentos de Cloud, Redes e Segurança da Informação.",
                "Metodologias e Gestão: Métodos Ágeis (Scrum), UML e Engenharia de Requisitos."
            ]
        }
    ];

    const certificateData: CertificateItem[] = [
        { platform: "Xperiun", course: "APIs e Integração de dados", date: "Julho 2026" },
        { platform: "Xperiun", course: "Engenharia de Dados em Cloud", date: "Junho 2026" },
        { platform: "Xperiun", course: "Pandas para Análise Avançadas com Python", date: "Maio 2026" },
        { platform: "Xperiun", course: "IA Generativa Avançada para Engenharia de Dados", date: "Maio 2026" },
        { platform: "Xperiun", course: "Banco de Dados e Linguagem SQL", date: "Maio 2026" },
        { platform: "Xperiun", course: "Automação Low-Code com n8n", date: "Maio 2026" },
        { platform: "DIO", course: "Back-end com Python", date: "Janeiro 2026" },
        { platform: "César School", course: "Formação da Pessoa Tutora", date: "Julho 2025" },
        { platform: "SIAPESQ", course: "Desenvolvimento Aplicado à Pesquisa e ESG", date: "Julho 2025" },
        { platform: "Atlântico Avanti", course: "Curso Básico em Ciência de Dados", date: "Dezembro 2024" },
        { platform: "Data Science Academy", course: "Fundamentos de Engenharia de Dados", date: "Julho 2024" },
        { platform: "Atlântico Avanti", course: "Curso Básico em Machine Learning", date: "Maio 2024" },
        { platform: "Data Science Academy", course: "Microsoft Power BI Para Business Intelligence", date: "Fevereiro 2024" },
        { platform: "EBAC", course: "Formação de Analista de Dados", date: "Dezembro 2023" },
        { platform: "Curso em Vídeo", course: "Ciclo de Fundamentos de Python", date: "Novembro 2023" },
        { platform: "Curso em Vídeo", course: "Git e GitHub", date: "Novembro 2023" },
        { platform: "Fundação Bradesco", course: "Fundamento do Power BI", date: "Outubro 2023" },
        { platform: "FreeCodeCamp", course: "Data Analysis with Python", date: "Setembro 2023" },
    ];

    return (
        <section className="pb-20">
            <div className="container">
                <div className="border-x border-primary/10">
                    
                    {/* Título Principal */}
                    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Educação</p>
                    </div>

                    <div className="border-t border-primary/10">
                        {/* --- FORMAÇÃO ACADÊMICA --- */}
                        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-7">
                            <div className="flex items-center gap-3 mb-8">
                                <GraduationCap className="text-primary" size={20} />
                                <h3 className="text-xl font-bold text-foreground">Formação Acadêmica</h3>
                            </div>

                            <div className="space-y-8">
                                {academicData.map((item, index) => (
                                    <div key={index} className="flex flex-col gap-6 p-6 rounded-2xl bg-card border border-primary/10 hover:border-primary/20 transition-all shadow-sm">
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <div className="w-16 h-16 shrink-0 bg-white rounded-xl flex items-center justify-center p-2 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                                                <Image 
                                                    src={item.logo} 
                                                    alt={item.institution} 
                                                    width={50} 
                                                    height={50} 
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{item.date}</span>
                                                <h4 className="text-lg font-bold text-foreground leading-snug">{item.title}</h4>
                                                <p className="text-muted-foreground font-medium mt-0.5">{item.institution}</p>
                                            </div>
                                        </div>

                                        {/* Destaque Acadêmico / Bolsa */}
                                        {item.academicHighlight && (
                                            <div className="flex items-center gap-2 mt-1">
                                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                                                    <FileText size={14} className="shrink-0" />
                                                    <span>{item.academicHighlight}</span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Descrição e Tópicos */}
                                        <div className="space-y-4 pt-4 border-t border-primary/10">
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </p>
                                            <ul className="grid grid-cols-1 gap-3">
                                                {item.skills.map((skill: string, idx: number) => (
                                                    <li key={idx} className="flex gap-3 text-sm text-foreground/90">
                                                        <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                                                        <span>{skill}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-dashed border-primary/10 max-w-3xl mx-auto" />

                        {/* --- CURSOS E CERTIFICADOS --- */}
                        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-7">
                            <div className="flex items-center gap-3 mb-8">
                                <Award className="text-primary" size={20} />
                                <h3 className="text-xl font-bold text-foreground">Cursos & Certificados</h3>
                            </div>

                            {/* Grid ajustado para 3 colunas em telas médias/grandes */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {certificateData.map((item, index) => (
                                    <div 
                                        key={index}
                                        className="p-[1px] rounded-xl transition-all duration-300 hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] hover:scale-[1.02]"
                                    >
                                        <div className="flex flex-col h-full p-4 rounded-[11px] border border-primary/10 bg-card hover:border-transparent transition-colors group">
                                            <div className="flex justify-between items-start mb-2 gap-1">
                                                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{item.platform}</span>
                                                <div className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground shrink-0">
                                                    <Calendar size={10} />
                                                    {item.date}
                                                </div>
                                            </div>
                                            <p className="text-xs sm:text-sm text-foreground font-medium leading-tight group-hover:text-primary transition-colors">
                                                {item.course}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;