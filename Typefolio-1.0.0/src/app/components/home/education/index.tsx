"use client";
import Image from "next/image";
import { GraduationCap, Award, Calendar } from "lucide-react";

interface AcademicItem {
    date: string;
    title: string;
    institution: string;
    logo: string;
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
            logo: "/images/education/xperiun.png",
        },
        {
            date: "Fevereiro de 2023 — Dezembro de 2025",
            title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
            institution: "Unifavip Wyden",
            logo: "/images/education/wyden.png",
        }
    ];
    
const certificateData: CertificateItem[] = [
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
                    
                    {/* Título Principal da Seção */}
                    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Educação</p>
                    </div>

                    <div className="border-t border-primary/10">
                        {/* --- FORMAÇÃO ACADÊMICA --- */}
                        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-7">
                            <div className="flex items-center gap-3 mb-8">
                                <GraduationCap className="text-primary/60" size={18} />
                                <h3 className="text-lg font-bold text-primary">Formação Acadêmica</h3>
                            </div>

                            <div className="space-y-6">
                                {academicData.map((item, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-primary/[0.02] border border-primary/10 hover:bg-primary/[0.04] transition-all">
                                        <div className="w-16 h-16 shrink-0 bg-white rounded-xl flex items-center justify-center p-2 border border-primary/5 shadow-sm">
                                            <Image 
                                                src={item.logo} 
                                                alt={item.institution} 
                                                width={50} 
                                                height={50} 
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[10px] font-bold text-primary/50 uppercase tracking-widest mb-1">{item.date}</span>
                                            <h5 className="text-lg font-bold text-primary leading-snug">{item.title}</h5>
                                            <p className="text-secondary font-medium mt-1">{item.institution}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-dashed border-primary/10 max-w-3xl mx-auto" />

                        {/* --- CURSOS E CERTIFICADOS --- */}
                        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-7">
                            <div className="flex items-center gap-3 mb-8">
                                <Award className="text-primary/60" size={18} />
                                <h3 className="text-lg font-bold text-primary">Cursos & Certificados</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {certificateData.map((item, index) => (
                                    <div key={index} className="flex flex-col p-4 rounded-xl border border-primary/10 bg-primary/[0.01] hover:border-primary/20 transition-all group">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[9px] font-black text-primary/40 uppercase tracking-widest">{item.platform}</span>
                                            <div className="flex items-center gap-1 text-[9px] font-bold text-secondary/60">
                                                <Calendar size={10} />
                                                {item.date}
                                            </div>
                                        </div>
                                        <p className="text-sm text-secondary font-semibold leading-tight group-hover:text-primary transition-colors italic">
                                            &quot;{item.course}&quot;
                                        </p>
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