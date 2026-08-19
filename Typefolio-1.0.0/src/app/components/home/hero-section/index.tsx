"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, FileText, Linkedin, Github, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/micael-lima-data-analytics-ia-engineer/",
            icon: <Linkedin className="w-4 h-4" />,
            label: "LinkedIn"
        },
        {
            href: "https://github.com/micaellimaj",
            icon: <Github className="w-4 h-4" />,
            label: "GitHub"
        },
        {
            href: "mailto:micaeljose144@gmail.com",
            icon: <Mail className="w-4 h-4" />,
            label: "E-mail"
        },
    ];

    return (
        <section>
            <div className="container">
                <div>
                    <div className="w-full h-72">
                        <Image src="/images/hero-sec/banner3.png" alt="banner-img" width={1080} height={267} className="w-full h-full object-cover" />
                    </div>
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                <Image src="/images/hero-sec/user-img.jpeg" alt="Micael José de Lima" width={145} height={145} className="border-4 border-white dark:border-zinc-900 rounded-full object-cover aspect-square" />
                                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white dark:border-zinc-900 rounded-full" />
                            </div>

                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                                <h1 className="text-2xl sm:text-3xl font-bold">Micael Lima</h1>
                                <p className="text-violet-700 dark:text-violet-400 font-medium">Developer, Data & IA</p>
                                
                                {/* Ícone de localização ajustado com cor adaptativa */}
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
                                    <p className="text-zinc-700 dark:text-zinc-300">Toritama, Pernambuco</p>
                                </div>
                            </div>

                            {/* Grupo de Ações */}
                            <div className="flex items-center gap-3">
                                {/* Redes Sociais */}
                                <div className="flex items-center bg-primary/5 dark:bg-zinc-800/60 border border-primary/10 dark:border-zinc-700 rounded-full p-1">
                                    {socialLinks.map((item, index) => (
                                        <Link 
                                            key={index}
                                            href={item.href} 
                                            target="_blank"
                                            title={item.label}
                                            className="p-2 sm:p-2.5 hover:bg-primary/10 dark:hover:bg-zinc-700/60 rounded-full transition-colors text-foreground"
                                        >
                                            {item.icon}
                                        </Link>
                                    ))}
                                </div>

                                {/* Botão de Alternar Tema */}
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="p-2.5 sm:p-3 hover:bg-primary/5 dark:hover:bg-zinc-800/60 border border-primary/10 dark:border-zinc-700 rounded-full transition-colors flex items-center justify-center text-foreground"
                                    title="Alternar tema"
                                    type="button"
                                >
                                    {mounted && (theme === "dark" ? (
                                        <Sun className="w-4 h-4 text-amber-400" />
                                    ) : (
                                        <Moon className="w-4 h-4 text-slate-700" />
                                    ))}
                                </button>

                                {/* Botão Baixar Currículo com contraste corrigido no Dark Mode */}
                                <Button asChild className="h-auto rounded-full p-0.5!">
                                    <a
                                        href="/doc/CvMicaelLima.pdf"
                                        download
                                        className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                                    >
                                        <span className="flex items-center gap-2 bg-zinc-900 dark:bg-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-900 transition-all py-2 px-4 sm:py-2.5 sm:px-5 rounded-full text-white">
                                            <FileText className="w-4 h-4 text-white" />
                                            <span className="text-sm sm:text-base font-semibold text-white">Baixar Currículo</span>
                                        </span>
                                    </a>
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;