"use client";
import Image from "next/image";

const Recommendations = () => {
    const reviews = [
        {
            name: "Theodor",
            role: "Supervisor na SIAPESQ",
            text: "Um líder responsável com um entendimento sólido de tecnologia e negócios. Demonstrou grande compromisso durante o desenvolvimento do marketplace de pescados.",
            avatar: "/images/hero-sec/user-img.png" // Ideal usar a foto da pessoa
        },
        {
            name: "Matheus",
            role: "Desenvolvedor & Designer (Parceiro de Projetos)",
            text: "Micael é um desenvolvedor determinado e paciente. Sua habilidade em transitar entre o backend e o front-end com foco em Clean Architecture é um diferencial enorme em nossos projetos.",
            avatar: "/images/hero-sec/user-img.png"
        }
    ];

    return (
        <section className="pb-16">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-10">
                        <p className="text-sm tracking-[2px] text-primary uppercase font-medium mb-10">O que dizem sobre mim</p>
                        
                        <div className="grid grid-cols-1 gap-8">
                            {reviews.map((review, index) => (
                                <div key={index} className="flex flex-col gap-4 p-6 border border-primary/10 rounded-2xl bg-primary/[0.02]">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/10">
                                            <Image src={review.avatar} alt={review.name} width={48} height={48} />
                                        </div>
                                        <div className="flex flex-col">
                                            <h5 className="font-bold text-primary">{review.name}</h5>
                                            <p className="text-xs text-secondary">{review.role}</p>
                                        </div>
                                    </div>
                                    <p className="italic text-secondary leading-relaxed">
                                        "{review.text}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommendations;