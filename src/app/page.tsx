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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 sm:px-10">
        <span className="text-lg font-extrabold tracking-tight text-white">
          Forklin
        </span>
        <a
          href="#produtos"
          className="text-sm font-medium text-white/80 transition hover:text-white"
        >
          Produtos
        </a>
      </header>

      <section
        className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-32 text-center sm:py-40"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, var(--navy-soft) 0%, var(--navy-mid) 55%, var(--navy) 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--accent-cyan)" }}
        />
        <p className="relative mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
          Plataforma Forklin
        </p>
        <h1 className="relative max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Um só lugar para os sistemas do seu negócio
        </h1>
        <p className="relative mt-6 max-w-xl text-balance text-lg text-white/70">
          A Forklin reúne módulos independentes — como o Diário Digital — em
          uma única plataforma, simples de acessar e de expandir.
        </p>
        <a
          href="#produtos"
          className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:bg-[var(--brand-dark)]"
        >
          Ver produtos
          <span aria-hidden>&darr;</span>
        </a>
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

      <footer className="bg-[var(--navy)] px-6 py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Forklin. Todos os direitos reservados.
      </footer>
    </div>
  );
}
