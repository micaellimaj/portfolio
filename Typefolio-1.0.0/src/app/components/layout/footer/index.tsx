import Link from "next/link"

const Footer = () => {
    return (
        <footer className="-translate-y-[1px] bg-background border-t border-primary/10">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-4 md:py-7">
                        {/* Linha 1: Créditos de autoria */}
                        <p className="text-secondary">
                            2026 © Desenvolvido por{" "}
                            <Link href="/" className="text-primary hover:text-violet-500 transition-colors">
                                Micael Lima
                            </Link> 
                            {" "}— Todos os direitos reservados.
                        </p>
                        
                        {/* Linha 2: Foco Profissional e Redes */}
                        <p className="text-secondary mt-2">
                            Data Analytics & AI Engineer · 
                            <Link 
                                href="https://www.linkedin.com/in/micael-lima-data-analytics-ia-engineer/" 
                                target="_blank" 
                                className="hover:text-primary transition-colors ml-1"
                            >
                                @micaellima
                            </Link> · 
                            Especialista em Engenharia de Dados e IA · Distribuído por{" "}
                            <Link href="/" className="hover:text-primary transition-colors">
                                Micael Portfolio
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;