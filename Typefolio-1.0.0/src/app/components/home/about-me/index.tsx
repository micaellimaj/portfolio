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
    ];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Sobre Me</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                                Olá! Sou Micael —  Analista de Dados e Desenvolvedor baseado em Toritama. Atualmente, 
                                <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]"> foco minha expertise</span> na 
                                <span className="border-b-2"> área de Desenvolvimento de Software e Engenharia de Dados</span>, com ênfase em ecossistemas de IA e inovação tecnológica.
                                </h2>
                                                            <h5 className="text-secondary font-normal">
                                Graduado em Análise e Desenvolvimento de Sistemas, com cursos e projetos na área de Tecnologia e pós-graduando em Engenharia de Dados e IA pela XPeriun.
                            </h5>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Especialidades & Tech Stack</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <Badge variant={"outline"} key={index} className="py-1.5 px-3 rounded-lg">
                                            <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                                        </Badge>
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