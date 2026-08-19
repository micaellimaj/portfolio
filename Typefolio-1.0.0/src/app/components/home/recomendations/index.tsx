"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { Linkedin, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface Review {
    id: number;
    name: string;
    role: string;
    linkedin: string;
    avatar: string;
    summary: string;
    fullText: string;
}

const Recommendations = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true,
        align: "start", 
        skipSnaps: false 
    });
    
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const reviews: Review[] = [
        {
            id: 1,
            name: "Theodor Gularte",
            role: "Desenvolvedor Full Stack | Ex-Supervisor na SIAPESQ",
            linkedin: "https://www.linkedin.com/in/theodor-gularte-b3759623a/",
            avatar: "/images/recommendations/theodor.jpeg",
            summary: "Trabalhei com o Micael na SIAPESQ e ele demonstrou ser um desenvolvedor muito competente e comprometido. Destacou-se no backend pela qualidade técnica e versatilidade.",
            fullText: "Trabalhei com o Micael em projetos da SIAPESQ enquanto atuava como líder da equipe, e ao longo desse período ele demonstrou ser um desenvolvedor muito competente e comprometido. Sempre buscou novas ideias, melhorias e soluções que agregassem ao produto. Ele iniciou conosco como desenvolvedor full-stack e, posteriormente, foi direcionado ao backend, área em que rapidamente se destacou pela qualidade técnica, responsabilidade e postura colaborativa com o time. Mesmo com foco principal no backend, o Micael também assume demandas de frontend quando necessário, mostrando versatilidade e boa compreensão da aplicação como um todo."
        },
        {
            id: 2,
            name: "Matheus Feliciano",
            role: "Estudante de Cibersegurança | Parceiro de Projetos",
            linkedin: "https://www.linkedin.com/in/matheus-feliciano-674551353/",
            avatar: "/images/recommendations/Matheus.jpeg",
            summary: "Micael sempre demonstrou um alto nível de comprometimento, organização e domínio técnico, além de uma postura colaborativa que contribui muito para o sucesso em equipe.",
            fullText: "Tive a oportunidade de desenvolver projetos acadêmicos e práticos junto com Micael Lima durante nossa formação na Unifavip Wyden, trabalhando principalmente com Java e React Native. Micael sempre demonstrou um alto nível de comprometimento, organização e domínio técnico, além de uma postura colaborativa que contribui muito para o sucesso em equipe. É um profissional dedicado, que busca constantemente aprender, aprimorar suas habilidades e entregar soluções bem estruturadas. Além da competência técnica, destaco seu caráter, ética e facilidade em lidar com desafios."
        },
        {
            id: 3,
            name: "Julio Rodrigo",
            role: "Analista de Segurança da Informação | Parceiro de Projetos",
            linkedin: "https://www.linkedin.com/in/juliorodrigop/",
            avatar: "/images/recommendations/julio.jpeg",
            summary: "Nesse projeto, que exigia contato frequente com o cliente e entregas em prazos curtos, Micael se destacou pelo comprometimento e pela capacidade de aprender rapidamente.",
            fullText: "Durante o primeiro semestre de 2024, trabalhei ao lado de Micael Lima no desenvolvimento do Projeto Dinha Kids. Nesse projeto, que exigia contato frequente com o cliente e entregas em prazos curtos, Micael se destacou pelo comprometimento e pela capacidade de aprender rapidamente. Apesar de seu foco maior em tecnologias de dados e linguagens como Python, Micael se adaptou muito bem às demandas de desenvolvimento em Java, demonstrando flexibilidade e iniciativa. Sua contribuição para a integração entre as diferentes partes do sistema foi essencial para entregarmos um projeto sólido."
        }
    ];

    return (
        <section className="pb-20">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto px-4 sm:px-7 py-12">
                        
                        {/* Header */}
                        <div className="flex items-center justify-between mb-10">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Recomendações</p>
                            <div className="flex gap-2">
                                <button 
                                    onClick={scrollPrev} 
                                    className="p-2 rounded-full border border-primary/20 text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                                    aria-label="Anterior"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button 
                                    onClick={scrollNext} 
                                    className="p-2 rounded-full border border-primary/20 text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                                    aria-label="Próximo"
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Viewport do Carrossel */}
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex touch-pan-y">
                                {reviews.map((review) => (
                                    <div key={review.id} className="relative flex-[0_0_100%] min-w-0 pr-4 first:pl-0">
                                        <div className="bg-card/50 dark:bg-muted/20 border border-primary/10 rounded-2xl p-6 sm:p-8 relative backdrop-blur-sm">
                                            
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-14 h-14 rounded-full overflow-hidden border border-primary/20 shrink-0">
                                                        <Image 
                                                            src={review.avatar} 
                                                            alt={review.name} 
                                                            width={56} 
                                                            height={56} 
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h5 className="font-bold text-foreground text-base">{review.name}</h5>
                                                        <p className="text-xs text-muted-foreground leading-tight mt-0.5">{review.role}</p>
                                                    </div>
                                                </div>
                                                <a 
                                                    href={review.linkedin} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#0a66c2] dark:text-[#70b5f9] border border-[#0a66c2]/30 dark:border-[#70b5f9]/30 px-3 py-1.5 rounded-md hover:bg-[#0a66c2]/10 transition-colors w-fit"
                                                >
                                                    <Linkedin size={14} /> Profile
                                                </a>
                                            </div>

                                            <div className="relative">
                                                <p className="text-muted-foreground dark:text-foreground/80 leading-relaxed text-sm italic mb-4">
                                                    &quot;{expandedId === review.id ? review.fullText : review.summary}&quot;
                                                </p>
                                                
                                                <button 
                                                    onClick={() => setExpandedId(expandedId === review.id ? null : review.id)}
                                                    className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
                                                >
                                                    {expandedId === review.id ? "Ver menos" : "Ver recomendação completa"}
                                                    <ChevronDown size={14} className={`transition-transform duration-200 ${expandedId === review.id ? "rotate-180" : ""}`} />
                                                </button>
                                            </div>
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

export default Recommendations;