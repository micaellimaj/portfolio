"use client";
import { useState } from "react";
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronDown } from "lucide-react";

const FeaturedWork = () => {
    const [filter, setFilter] = useState("Todos");

    const featureWork = [
        {
            title: "Climate Brain — IA & Monitoramento",
            date: "Dezembro 2025",
            category: "Dev",
            description: "Sistema full-stack para monitoramento climático em tempo real. Utiliza NestJS para a API, Go para processamento de alto desempenho, React para interface de usuário e Python com Gemini API para análise preditiva de dados meteorológicos.",
            image: "/images/feature-work/climatebrain.png",
            roles: ["NestJS", "Go", "Python", "Gemini API", "React"],
            url: "https://github.com/micaellimaj/desafio-gdash-2025-02/tree/main"
        },
        {
            title: "Caruaru Saúde - Plataforma de Serviços de Saúde",
            date: "Dezembro de 2024",
            category: "Dev",
            description: "Plataforma Full Stack desenvolvida para conectar cidadãos do Agreste pernambucano a serviços médicos. O sistema centraliza o agendamento de consultas e o mapeamento de unidades de saúde, otimizando o acesso à rede pública regional.",
            image: "/images/feature-work/caruaru_saude.jpeg",
            roles: ["Python", "Django", "HTML/CSS", "JavaScript", "API", "Django ORM"],
            url: "https://github.com/micaellimaj/Caruaru_Saude"
        },

        {
            title: "Desafio Back-End - Mario Maker API",
            date: "Maio de 2025",
            category: "Dev",
            description: "PI RESTful robusta desenvolvida para a gestão de ativos e colaboração em jogos inspirados no universo Mario. O sistema permite que criadores gerenciem o ciclo de vida de fases e elementos, promovendo o trabalho em equipe através de um modelo de permissões detalhado.",
            image: "/images/feature-work/Mario_poster.png",
            roles: ["Node.js", "Express.js", "PostgreSQL", "Multer", "API", "Authentication"],
            url: "https://github.com/micaellimaj/Caruaru_Saude"
        },
           {
            title: "Análise e Predição de Dados - Preços de Imóveis em NY",
            date: "Março de 2025",
            category: "Dev",
            description: "Projeto end-to-end de ciência de dados focado na análise do mercado imobiliário de Nova York. O pipeline abrange desde o tratamento de inconsistências de dados reais até a implementação de modelos preditivos e algoritmos de agrupamento para segmentação de mercado.",
            image: "/images/feature-work/dadosNY.jpeg",
            roles: ["EDA", "Regression", "Data Analysis","Data Visualization", "Classification","K-Means Clustering","Metric Evaluation","engenharia de features","prediction", "pandas", "scikit-learn"],
            url: "https://github.com/micaellimaj/Analise-de-dados-SQL-Desempenho-estudantil"
        },
        {
            title: "Análise de Dados Com SQL - Desempenho Estudantil",
            date: "Julho de 2025",
            category: "Dev",
            description: "Projeto de análise de dados educacionais utilizando SQL para identificar padrões de desempenho estudantil. Inclui modelagem de banco de dados, consultas complexas e visualização de resultados para insights acionáveis.",
            image: "/images/feature-work/projetosql.png",
            roles: ["SQL", "AWS", "Data Analysis","Data Visualization", "ETL","AWS Athena"],
            url: "https://github.com/micaellimaj/Analise-de-dados-SQL-Desempenho-estudantil"
        },
        {
            title: "Painel de BI para Instituição Financeira - Banvic",
            date: "Agosto de 2025",
            category: "Power BI",
            description: "Projeto de modernização analítica focado na transição de uma cultura de dados conservadora para uma gestão estratégica e orientada a dados (Data-Driven). O projeto entrega um ecossistema de BI completo, superando gargalos de governança e métodos legados.",
            image: "/images/feature-work/banvic.png", 
            roles: ["DAX", "ETL", "Power BI", "Power Query", "DAX", "KPIs", "Data Visualization", "Data Modeling", "Data Analysis"],
            url: "https://bit.ly/Painel-Banvic"
        },
         {
            title: "Northwind — Integração & BI 360º",
            date: "Julho de 2024",
            category: "Power BI",
            description: "Modernização analítica unificando 14 tabelas de dados. O projeto inclui auditoria via Python/Jupyter para integridade de dados e a construção de um painel de 7 páginas no Power BI para eliminar silos de informação e otimizar a performance da loja.",
            image: "/images/feature-work/north.png", 
            roles: ["Power BI", "Python", "Jupyter", "ETL"],
            url: "https://app.powerbi.com/view?r=eyJrIjoiNjY2ZWJjZWUtMGQ0NC00YTZhLTliOWEtZjFjNzVmMmM1OTg4IiwidCI6IjUxZGQ3ZDM4LTYwNzctNDgzNy1hYTE0LWFlNDNmZThiM2ViMCJ9&pageName=ReportSection685643602175c2c0ef82"
        },
        {
            title: "Market Insights — Gestão de Filiais",
            date: "Indeterminado",
            category: "Power BI",
            description: "Dashboard financeiro interativo para redes de varejo. Inclui análise de receita por cidade via mapas de calor, segmentação avançada de clientes, monitoramento de impostos e performance por linha de produtos com navegação multipáginas.",
            image: "/images/feature-work/filial.png", 
            roles: ["Power BI", "DAX", "Financial Analysis", "UX Design"],
            url: "https://bit.ly/Micael-Lima-Analista-de-dados-Relatorio-supermercados"
        },
        {
            title: "Student Wellness — Análise Comportamental",
            date: "Indeterminado",
            category: "Power BI",
            description: "Estudo do impacto do álcool no desempenho acadêmico. Desafio superado na visualização de dados majoritariamente categóricos, criando correlações entre hábitos de consumo, notas e vida familiar com filtros dinâmicos por escola e gênero.",
            image: "/images/feature-work/escola.png", 
            roles: ["Power BI", "Data Analytics", "Categorial Data", "Social Insights"],
            url: "https://app.powerbi.com/view?r=eyJrIjoiNjhkMGNlYmQtNmRkMi00MTJhLTliZDMtYTRhZGEzZGNlNWJlIiwidCI6IjUxZGQ3ZDM4LTYwNzctNDgzNy1hYTE0LWFlNDNmZThiM2ViMCJ9"
        },
            ];

    const filteredProjects = filter === "Todos" 
        ? featureWork 
        : featureWork.filter(project => project.category === filter);

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Projetos em Destaque</p>
                            <div className="flex gap-2">
                                {["Todos", "Dev", "Power BI"].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setFilter(type)}
                                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                                            filter === type 
                                            ? "bg-primary text-white border-primary" 
                                            : "bg-transparent text-primary border-primary/20 hover:border-primary"
                                        }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
                        {filteredProjects.map((value, index) => {
                            const isRightCol = index % 2 === 1;
                            const isPowerBI = value.category === "Power BI";

                            return (
                                <div
                                    key={index}
                                    className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 border-b border-primary/10 ${isRightCol ? 'md:border-l' : ''}`}
                                >
                                    {/* Container da Imagem */}
                                    <div className="overflow-hidden rounded-xl border border-primary/5 aspect-video relative">
                                        <Image
                                            src={value.image}
                                            alt={value.title}
                                            fill
                                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                                        />
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-primary shadow-sm">
                                            {value.date}
                                        </div>
                                    </div>

                                    {/* Informações e Descrição Expansível */}
                                    <div className="flex flex-col gap-1 sm:gap-2 px-2">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-lg font-bold">{value.title}</h4>
                                            <a 
                                                href={value.url} 
                                                target="_blank" 
                                                className="p-2 hover:bg-primary/5 rounded-full transition-colors"
                                            >
                                                {isPowerBI ? <ExternalLink size={20} className="text-violet-700" /> : <Github size={20} className="text-primary" />}
                                            </a>
                                        </div>

                                        <p className="text-sm text-secondary font-medium mb-2">
                                            {value.roles.join(' • ')}
                                        </p>

                                        {/* Descrição "Suspensa" (Accordion) */}
                                        <details className="group/details">
                                            <summary className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary cursor-pointer list-none hover:opacity-70 transition-opacity">
                                                <span>Ver detalhes do projeto</span>
                                                <ChevronDown size={14} className="group-open/details:rotate-180 transition-transform" />
                                            </summary>
                                            <div className="mt-3 p-4 bg-primary/[0.03] border border-primary/5 rounded-lg">
                                                <p className="text-sm text-secondary leading-relaxed">
                                                    {value.description}
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedWork;