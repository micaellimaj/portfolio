"use client";
import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    const socialIcon = [
        {
            img: "/images/hero-sec/linkedin.svg",
            href: "https://www.linkedin.com/in/micael-lima-full-stack-software-engineer/",
            icon: "LinkedIn"
        },
        {
            img: "/images/hero-sec/Github.svg",             
            href: "https://github.com/micaellimaj",
            icon: "GitHub"
        },
    ];

    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full h-72">
                        <Image src={"/images/hero-sec/banner-bg-img.png"} alt="banner-img" width={1080} height={267} className="w-full h-full object-cover" />
                    </div>
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                {/* Substitua pela sua foto em public/images/hero-sec/micael.png */}
                                <Image src={"/images/hero-sec/user-img.png"} alt="Micael José de Lima" width={145} height={145} className="border-4 border-white rounded-full object-cover aspect-square" />
                                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                                <h1 className="text-2xl sm:text-3xl font-bold">Micael José de Lima</h1>
                                <p className="text-violet-700 font-medium">Developer, Data & IA</p>
                                <div className="flex items-center gap-2">
                                    <Image src={"/images/icon/map-icon.svg"} alt="map-icon" width={20} height={20} />
                                    <p className="text-primary">Toritama, Pernambuco</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex items-center gap-2">
                                    {socialIcon?.map((value, index) => {
                                        return (
                                            <Link 
                                                href={value?.href} 
                                                key={index} 
                                                target="_blank"
                                                className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-primary/10 rounded-full transition-colors"
                                            >
                                                <Image src={value?.img} alt={value?.icon} width={20} height={20} />
                                            </Link>
                                        )
                                    })}
                                </div>
                                <Button asChild className="h-auto rounded-full p-0.5!">
                                    <Link
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSc6fPmiaBSlZAsfBI3sYeYutgvSpi8nIAY2hqQVJjbX6KUX7Q/viewform"
                                        target="_blank"
                                        className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                                    >
                                        <span className="flex items-center gap-3 bg-primary hover:bg-transparent transition-all py-2.5 px-5 rounded-full">
                                            <Image
                                                src="/images/icon/spark-icon.svg"
                                                alt="spark-icon"
                                                width={14}
                                                height={14}
                                            />
                                            <span className="text-sm sm:text-base font-semibold text-white">Vamos conversar?</span>
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection