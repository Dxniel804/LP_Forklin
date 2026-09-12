import Image from "next/image";

const DIARIO_DIGITAL_URL =
  process.env.NEXT_PUBLIC_DIARIO_DIGITAL_URL ?? "https://drclass.forklin.com.br";

const produtos = [
  {
    nome: "Diário Digital",
    descricao:
      "Gestão de diário de classe, chamada, calendário e histórico escolar para redes de ensino.",
    status: "disponivel" as const,
    href: DIARIO_DIGITAL_URL,
  },
  {
    nome: "Em breve",
    descricao: "Novo módulo da plataforma Forklin — em desenvolvimento.",
    status: "em-breve" as const,
  },
  {
    nome: "Em breve",
    descricao: "Novo módulo da plataforma Forklin — em desenvolvimento.",
    status: "em-breve" as const,
  },
];

function ArrowIcon() {
  return (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" aria-hidden>
      <path
        d="M0 5.29c0-.16.06-.31.16-.42.1-.11.24-.17.38-.17h12.63L9.8 1.0C9.7.9 9.64.75 9.64.59c0-.16.06-.31.16-.42C9.9.06 10.04 0 10.18 0c.14 0 .28.06.38.17l4.29 4.7c.1.11.15.24.15.42 0 .17-.05.3-.15.42l-4.29 4.7c-.1.11-.24.17-.38.17-.14 0-.28-.06-.38-.17-.1-.1-.16-.25-.16-.41 0-.16.06-.31.16-.42l3.37-3.7H.54c-.14 0-.28-.06-.38-.17C.06 5.6 0 5.45 0 5.29Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-forklin.png"
            alt="Forklin"
            width={344}
            height={287}
            priority
            className="h-8 w-auto"
          />
          <span
            className="text-2xl"
            style={{ fontFamily: "var(--font-logo), sans-serif" }}
          >
            <span className="font-normal text-[var(--brand)]">f</span>
            <span className="font-normal text-[var(--ink)]">or</span>
            <span className="font-normal text-[var(--brand)]">k</span>
            <span className="font-light text-[var(--ink)]">lin</span>
          </span>
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          <a href="#produtos" className="text-base font-semibold text-[var(--ink)]/70 hover:text-[var(--ink)]">
            Soluções
          </a>
          <a href="#" className="text-base font-semibold text-[var(--ink)]/70 hover:text-[var(--ink)]">
            Clientes
          </a>
          <a href="#" className="text-base font-semibold text-[var(--ink)]/70 hover:text-[var(--ink)]">
            Sobre Nós
          </a>
        </nav>

        <a
          href="#produtos"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-dark)]"
        >
          Realizar Orçamento
          <ArrowIcon />
        </a>
      </header>

      <section className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-16 pb-8 text-center sm:pt-24">
        <p
          className="text-2xl italic text-[var(--ink)]"
          style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 500 }}
        >
          Um ecossistema, várias soluções
        </p>

        <h1
          className="mt-6 text-5xl leading-[1.05] font-bold tracking-tight sm:text-7xl"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          <span className="text-[var(--brand)]">Conecte. </span>
          <span className="text-[var(--ink)]">Cresça.</span>
        </h1>

        <a
          href="#produtos"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-8 py-4 text-base font-medium text-white transition hover:bg-[var(--brand-dark)]"
        >
          Realizar Orçamento
          <ArrowIcon />
        </a>
      </section>

      {/* Pilha de cards — visual do hero, puxado do Figma */}
      <section className="relative mx-auto flex h-[380px] w-full max-w-5xl items-center justify-center px-6 sm:h-[480px]">
        <div className="absolute h-[260px] w-[190px] -translate-x-[110px] -rotate-[20deg] rounded-[32px] bg-[var(--sky)] shadow-[0_20px_30px_-10px_rgba(0,0,0,0.35)] sm:h-[340px] sm:w-[250px] sm:-translate-x-[150px]" />
        <div className="absolute h-[270px] w-[195px] translate-x-[110px] rotate-[20deg] rounded-[32px] bg-[var(--near-black)] shadow-[0_20px_30px_-10px_rgba(0,0,0,0.35)] sm:h-[350px] sm:w-[255px] sm:translate-x-[150px]" />
        <div className="relative flex h-[300px] w-[220px] flex-col items-center justify-between rounded-[32px] bg-[var(--brand)] p-6 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.4)] sm:h-[380px] sm:w-[280px] sm:p-8">
          <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-[var(--brand)]">
            Orçamento
          </span>
          <p
            className="text-center text-xl leading-snug font-semibold text-white sm:text-2xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Construa a sua Solução.
          </p>
        </div>
      </section>

      <section
        id="produtos"
        className="flex flex-1 flex-col items-center bg-[var(--surface-alt)] px-6 py-24 sm:px-10"
      >
        <div className="mb-14 max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--ink)]">
            Produtos da plataforma
          </h2>
          <p className="mt-3 text-[var(--ink-soft)]">
            Cada card abaixo é um sistema independente, acessível pelo seu
            próprio subdomínio.
          </p>
        </div>

        <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto, i) => {
            const disponivel = produto.status === "disponivel";
            const conteudo = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-[var(--ink)]">
                    {produto.nome}
                  </h3>
                  <span
                    className={
                      disponivel
                        ? "rounded-full bg-[var(--brand-light)] px-3 py-1 text-xs font-semibold text-[var(--brand-dark)]"
                        : "rounded-full bg-[var(--line)] px-3 py-1 text-xs font-semibold text-[var(--ink-faint)]"
                    }
                  >
                    {disponivel ? "Disponível" : "Em breve"}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[var(--ink-soft)]">
                  {produto.descricao}
                </p>
                {disponivel && (
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)]">
                    Acessar
                    <span aria-hidden>&rarr;</span>
                  </span>
                )}
              </>
            );

            const cardClass =
              "flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-7 shadow-sm transition" +
              (disponivel
                ? " hover:-translate-y-1 hover:shadow-lg"
                : " opacity-60");

            return disponivel ? (
              <a
                key={i}
                href={produto.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {conteudo}
              </a>
            ) : (
              <div key={i} className={cardClass}>
                {conteudo}
              </div>
            );
          })}
        </div>
      </section>

      <footer className="bg-[var(--near-black)] px-6 py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Forklin. Todos os direitos reservados.
      </footer>
    </div>
  );
}
