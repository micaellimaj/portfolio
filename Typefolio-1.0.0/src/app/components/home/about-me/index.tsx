import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const servicesBedge = [
        "Full Stack Development", 
        "Data Analysis", 
        "Artificial Intelligence", 
        "Node.js & NestJS", 
        "Python & FastAPI", 
        "Data Engineering", 
        "Power BI", 
        "Cloud Computing", 
        "SQL & NoSQL", 
        "React & Next.js", 
        "DevOps & CI/CD", 
        "Agile Methodologies", 
        "Version Control (Git)",
        "Docker",
        "Databricks",
        "APIs",
        "AWS & GCP",
        "Automation",
        "n8n",
        "ETL & ELT",
        
    ];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10 relative overflow-hidden bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat dark:bg-none">
                    
                    {/* Overlay para suavizar os grafismos do fundo no Dark Mode */}
                    <div className="absolute inset-0 bg-background/90 dark:block hidden pointer-events-none" />

                    <div className="relative z-10 flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Sobre Mim</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-foreground">
                                Olá! Sou Micael — Analista de Dados e Desenvolvedor baseado em Toritama. Atualmente, 
                                <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)] dark:bg-[linear-gradient(90deg,_rgba(243,202,77,0.25)_0%,_rgba(243,202,77,0.02)_100%)] px-1 rounded"> foco minha expertise</span> na 
                                <span className="border-b-2 border-primary/60"> área de Desenvolvimento de Software e Engenharia de Dados</span>, com ênfase em ecossistemas de IA e inovação tecnológica.
                            </h2>
                            
                            <h5 className="text-muted-foreground font-normal text-base sm:text-lg leading-relaxed">
                                Graduado em Análise e Desenvolvimento de Sistemas, com cursos e projetos na área de Tecnologia e pós-graduando em Engenharia de Dados e IA pela XPeriun.
                            </h5>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Especialidades & Tech Stack</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <div 
                                            key={index}
                                            className="p-[1px] rounded-lg transition-all duration-300 hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] hover:scale-105"
                                        >
                                            <Badge 
                                                variant={"outline"} 
                                                className="py-1.5 px-3 rounded-[7px] border-primary/20 dark:border-zinc-700 dark:bg-zinc-800/50 hover:border-transparent dark:hover:border-transparent hover:bg-zinc-900 dark:hover:bg-zinc-950 transition-colors cursor-default"
                                            >
                                                <p className="text-xs sm:text-sm font-medium text-foreground hover:text-white transition-colors">{value}</p>
                                            </Badge>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;