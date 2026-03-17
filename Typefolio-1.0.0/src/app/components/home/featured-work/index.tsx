"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const FeaturedWork = () => {
    // Projetos principais baseados no seu currículo e conquistas
    const featureWork = [
        {
            title: "Climate Brain — IA & Monitoramento",
            image: "/images/feature-work/feature-img-1.png", // Substitua pelas suas prints
            roles: ["NestJS", "Go", "Python", "Gemini API"],
            githubUrl: "https://github.com/micaellimaj"
        },
        {
            title: "ECOIN — 1º Lugar Hackathon ESG",
            image: "/images/feature-work/feature-img-2.png",
            roles: ["Full Stack", "Sustentabilidade", "Educação Financeira"],
            githubUrl: "https://github.com/micaellimaj"
        },
        {
            title: "Predição de Preços NY — Data Science",
            image: "/images/feature-work/feature-img-1.png",
            roles: ["Python", "EDA", "Machine Learning", "Scikit-Learn"],
            githubUrl: "https://github.com/micaellimaj"
        },
        {
            title: "Caruaru Saúde — Plataforma Django",
            image: "/images/feature-work/feature-img-2.png",
            roles: ["Django", "PostgreSQL", "Bootstrap", "Google Maps API"],
            githubUrl: "https://github.com/micaellimaj"
        }
    ];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Projetos em Destaque</p>
                            <Button asChild variant={"outline"} className="h-auto">
                                <a href="https://bit.ly/Micael-lima-dev-data-portfolio" target="_blank" className="py-3 px-5">
                                    Ver Portfólio de Dados
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
                        {featureWork.map((value, index) => {
                            const isRightCol = index % 2 === 1;

                            return (
                                <div
                                    key={index}
                                    className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 border-b border-primary/10 ${isRightCol ? 'md:border-l' : ''}`}
                                >
                                    <div className="overflow-hidden rounded-xl border border-primary/5">
                                        <Image
                                            src={value.image}
                                            alt={value.title}
                                            width={490}
                                            height={300}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1 sm:gap-2 px-2">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-lg font-bold">{value.title}</h4>
                                            <a 
                                                href={value.githubUrl} 
                                                target="_blank" 
                                                className="p-2 hover:bg-primary/5 rounded-full transition-colors"
                                                title="Ver código no GitHub"
                                            >
                                                <Github size={20} className="text-primary" />
                                            </a>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <p className="text-sm text-secondary font-medium">
                                                {value.roles.join(' • ')}
                                            </p>
                                        </div>
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