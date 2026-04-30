"use client";
import { useState } from "react";
import Image from "next/image"
import { Github, ExternalLink, ChevronDown, Presentation, FileText, Mic2 } from "lucide-react";

const FeaturedWork = () => {
    // 1. Alterado para incluir "Analytics" nas opções de filtro
    const [filter, setFilter] = useState("Todos");

    const featureWork = [
         {
            title: "Pipeline de Inteligência Esportiva",
            date: "Em Andamento",
            category: "Analytics",
            description: "Este projeto é uma solução de Engenharia de Dados e Observabilidade voltada ao mercado de apostas esportivas. A arquitetura vai além da simples coleta: ela implementa cálculos estatísticos para identificar Value Betting (Apostas de Valor) e possui um sistema de governança para monitorar a saúde da IA.",
            image: "/images/feature-work/caramelo.png",
            roles: ["n8n", "Supabase", "JavaScript", "OpenAI", "Sheets","Automatização","IA","API"],
            github_url: "https://github.com/micaellimaj/Caramelo-das-Bets-Pipeline-de-Inteligencia-Esportiva",
            slides_url: "https://gamma.app/docs/Pipeline-de-Inteligencia-Esportiva-387c3y1sifsjozj?mode=doc",
        },
        {
            title: "Desafio Mobile -  TodoList",
            date: "Abril de 2026",
            category: "Dev",
            description: "A aplicação consiste em um app de Todo List, permitindo o gerenciamento completo de tarefas com persistência em nuvem através do Firebase. Desenvolvido com Expo Go, React Native e Tailwind CSS, o app oferece uma interface intuitiva para criação, edição e exclusão de tarefas, além de sincronização em tempo real entre dispositivos.",
            image: "/images/feature-work/todolist3.png",
            roles: ["Expo Go", "Firebase", "React", "Tailwind CSS", "Typescript","Nativewind","gluestack-ui","Mobile"],
            github_url: "https://github.com/micaellimaj/App-Todo-List-React",
            slides_url: "https://canva.link/u4n6hi4mjwg6z9e",
            slides_url2: "https://canva.link/o8mem66nag5f6i2",
        },
        {
            title: "Desafio Dev -  PetShop",
            date: "Fevereiro de 2026",
            category: "Dev",
            description: "API RESTful para gestão de pet shop, com funcionalidades de cadastro,  e controle de animais. Desenvolvida com NestJS, React e PostgreSQL.",
            image: "/images/feature-work/petshop.png",
            roles: ["NestJS", "API",  "React", "Tailwind CSS", "Typescript","prisma","Nextjs","postgreSQL","Docker"],
            github_url: "https://github.com/micaellimaj/desafio-jr"
        },
        {
            title: "Climate Brain — IA & Monitoramento",
            date: "Dezembro de 2025",
            category: "Dev",
            description: "Sistema full-stack para monitoramento climático em tempo real. Utiliza NestJS para a API, Go para processamento de alto desempenho, React para interface de usuário e Python com Gemini API para análise preditiva de dados meteorológicos.",
            image: "/images/feature-work/climatebrain.png",
            roles: ["NestJS", "Go", "Python", "Gemini API", "React","Redis","pipeline de dados"],
            github_url: "https://github.com/micaellimaj/desafio-gdash-2025-02/tree/main"
        },
         {
            title: "Desafio Back-End - Mario Maker API",
            date: "Maio de 2025",
            category: "Dev",
            description: "API RESTful robusta desenvolvida para a gestão de ativos e colaboração em jogos inspirados no universo Mario.",
            image: "/images/feature-work/Mario_poster.png",
            roles: ["Node.js", "Express.js", "PostgreSQL", "API"],
            github_url: "https://github.com/micaellimaj/Desafio-Back-End-Super-Mario-Maker-API",
            slides_url: "https://desempenho-estudantil-sql.my.canva.site/apresenta-o-projeto-mario-maker-api"
        },
        {
            title: "Análise e Predição de Dados - Preços de Imóveis em NY",
            date: "Março de 2025",
            // 2. Atualizado para categoria Analytics
            category: "Analytics",
            description: "Projeto end-to-end de ciência de dados focado na análise do mercado imobiliário de Nova York.",
            image: "/images/feature-work/dadosNY.jpeg",
            roles: ["EDA", "Regression", "Data Analysis", "scikit-learn"],
            github_url: "https://github.com/micaellimaj/Modelo_Predicao_De_Precos_Imoveis",
            slides_url: "https://desempenho-estudantil-sql.my.canva.site/apresenta-o-financeira-amarelo-negrito-formas-relat-rio-de-finan-as"
        },
        {
            title: "Caruaru Saúde - Plataforma de Serviços de Saúde",
            date: "Dezembro de 2024",
            category: "Dev",
            description: "Plataforma Full Stack desenvolvida para conectar cidadãos do Agreste pernambucano a serviços médicos. O sistema centraliza o agendamento de consultas e o mapeamento de unidades de saúde, otimizando o acesso à rede pública regional.",
            image: "/images/feature-work/caruaru_saude.jpeg",
            roles: ["Python", "Django", "HTML/CSS", "JavaScript", "API", "Django ORM"],
            github_url: "https://github.com/micaellimaj/Caruaru_Saude",
            slides_url: "https://www.canva.com/design/DAGgWWMl8VQ/s2XDci1KxHqfEGas2QJ2KA/view?utm_content=DAGgWWMl8VQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4112aade7c",
            doc_url: "https://docs.google.com/document/d/1pEw4LYnfh1pbuMeG3k8QeFtqCxvXlz2MEeL4Mtqfztk/edit?tab=t.0",
            deploy_url: "https://www.canva.com/design/DAGggzegzE4/Jk8OixOBUiCpbn08yUgKbw/view?utm_content=DAGggzegzE4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb22456d414"
        },
        {
            title: "Análise de Dados Com SQL - Desempenho Estudantil",
            date: "Julho de 2025",
            // 3. Atualizado para categoria Analytics
            category: "Analytics",
            description: "Projeto de análise de dados educacionais utilizando SQL para identificar padrões de desempenho estudantil.",
            image: "/images/feature-work/projetosql.png",
            roles: ["SQL", "AWS", "Data Analysis", "ETL"],
            github_url: "https://github.com/micaellimaj/Analise-de-dados-SQL-Desempenho-estudantil",
            slides_url: "https://desempenho-estudantil-sql.my.canva.site/"
        },
        
        {
            title: "Painel de BI para Instituição Financeira - Banvic",
            date: "Agosto de 2025",
            category: "Power BI",
            description: "Projeto de modernização analítica focado na transição de uma cultura de dados para uma gestão estratégica.",
            image: "/images/feature-work/banvic.png", 
            roles: ["DAX", "Power BI", "KPIs", "Data Modeling"],
            github_url: "https://github.com/micaellimaj/Banvic-Data-Analytics",
            doc_url: "https://www.canva.com/design/DAGyVw_Dujw/spEMGroQSQcXudaAa-yJQg/view?utm_content=DAGyVw_Dujw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0ca5afcf9e",
            deploy_url: "https://bit.ly/Painel-Banvic"
        },
        {
            title: "Painel Interativo de Perfil de Compra de Clientes",
            date: "Julho de 2024",
            // 4. Atualizado para categoria Analytics (Projeto Python/Streamlit)
            category: "Analytics",
            description: "O projeto consiste em uma plataforma de Business Intelligence desenvolvida com Python para otimizar a tomada de decisão estratégica. Utilizando uma base de 3.900 clientes, o sistema transforma dados brutos em insights acionáveis através de uma interface web dinâmica.",
            image: "/images/feature-work/clotingstore.jpg",
            roles: ["Python", "streamlit",  "Plotly", "Pandas", "Seaborn","Dashboard","Analytics"],
            github_url: "https://github.com/micaellimaj/Projeto_Dev_Python",
            doc_url: "https://docs.google.com/document/d/1K526rEqNuQDH4YWakC3uHZka4V30h2eSE8JZXEfyVB8/edit?usp=sharing",
            deploy_url: "https://clothingstore.streamlit.app/"
        },
        {
            title: "Northwind — Integração & BI 360º",
            date: "Julho de 2024",
            category: "Power BI",
            description: "Modernização analítica unificando 14 tabelas de dados via Python/Jupyter e Power BI.",
            image: "/images/feature-work/north.png", 
            roles: ["Power BI", "Python", "Jupyter", "ETL"],
            github_url: "https://github.com/micaellimaj/Northwind-Traders",
            doc_url: "https://docs.google.com/document/d/14KwQmesLRATb4_sY0ay5mzLYv6AqGHPqVG4Fnl7aMP4/edit?tab=t.0",
            deploy_url: "https://app.powerbi.com/view?r=eyJrIjoiNjY2ZWJjZWUtMGQ0NC00YTZhLTliOWEtZjFjNzVmMmM1OTg4IiwidCI6IjUxZGQ3ZDM4LTYwNzctNDgzNy1hYTE0LWFlNDNmZThiM2ViMCJ9&pageName=ReportSection685643602175c2c0ef82"
        },
        {
            title: "Market Insights — Gestão de Filiais",
            date: "Indeterminado",
            category: "Power BI",
            description: "Dashboard financeiro interativo para redes de varejo. Inclui análise de receita por cidade via mapas de calor, segmentação avançada de clientes, monitoramento de impostos e performance por linha de produtos com navegação multipáginas.",
            image: "/images/feature-work/filial.png", 
            roles: ["Power BI", "DAX", "Financial Analysis", "UX Design"],
            deploy_url: "https://bit.ly/Micael-Lima-Analista-de-dados-Relatorio-supermercados"
        },
        {
            title: "Student Wellness — Análise Comportamental",
            date: "Indeterminado",
            category: "Power BI",
            description: "Estudo do impacto do álcool no desempenho acadêmico. Desafio superado na visualização de dados majoritariamente categóricos, criando correlações entre hábitos de consumo, notas e vida familiar com filtros dinâmicos por escola e gênero.",
            image: "/images/feature-work/escola.png", 
            roles: ["Power BI", "Data Analytics", "Categorial Data", "Social Insights"],
            deploy_url: "https://app.powerbi.com/view?r=eyJrIjoiNjhkMGNlYmQtNmRkMi00MTJhLTliZDMtYTRhZGEzZGNlNWJlIiwidCI6IjUxZGQ3ZDM4LTYwNzctNDgzNy1hYTE0LWFlNDNmZThiM2ViMCJ9"
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
                                {/* 5. Adicionado "Analytics" ao mapeamento de botões */}
                                {["Todos", "Dev", "Analytics", "Power BI"].map((type) => (
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

                            return (
                                <div
                                    key={index}
                                    className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 border-b border-primary/10 ${isRightCol ? 'md:border-l' : ''}`}
                                >
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

                                    <div className="flex flex-col gap-1 sm:gap-2 px-2">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-lg font-bold">{value.title}</h4>
                                            
                                            <div className="flex gap-2">
                                                {value.github_url && (
                                                    <a href={value.github_url} target="_blank" className="p-2 hover:bg-primary/5 rounded-full transition-colors" title="Ver Código">
                                                        <Github size={20} className="text-primary" />
                                                    </a>
                                                )}
                                                {/* Ícone 1: Apresentação Técnica */}
                                                {value.slides_url && (
                                                    <a href={value.slides_url} target="_blank" className="p-2 hover:bg-primary/5 rounded-full transition-colors" title="Slides Técnicos">
                                                        <Presentation size={20} className="text-orange-600" />
                                                    </a>
                                                )}

                                                {/* Ícone 2: Pitch (Microfone) */}
                                                {value.slides_url2 && (
                                                    <a href={value.slides_url2} target="_blank" className="p-2 hover:bg-primary/5 rounded-full transition-colors" title="Pitch (Apresentação de Negócio)">
                                                        <Mic2 size={20} className="text-emerald-600" />
                                                    </a>
                                                )}
                                                {value.doc_url && (
                                                    <a href={value.doc_url} target="_blank" className="p-2 hover:bg-primary/5 rounded-full transition-colors" title="Documentação">
                                                        <FileText size={20} className="text-blue-600" />
                                                    </a>
                                                )}
                                                {value.deploy_url && (
                                                    <a href={value.deploy_url} target="_blank" className="p-2 hover:bg-primary/5 rounded-full transition-colors" title="Visualizar">
                                                        <ExternalLink size={20} className="text-violet-700" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-sm text-secondary font-medium mb-2">
                                            {value.roles.join(' • ')}
                                        </p>

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