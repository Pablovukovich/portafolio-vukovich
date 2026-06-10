import { Card } from "@/components/ui/card";

export const SobreMi = () => {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <Card className="overflow-hidden rounded-3xl border-border/50 bg-card/40">
        <div className=" w-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.7),transparent_55%),linear-gradient(160deg,rgba(140,52,78,0.22),rgba(255,255,255,0.25))]" />
        <img
          src="/ecosistema.png"
          alt="Sobre mi"
          className="h-full w-full  object-center"
        />
      </Card>
      <Card className="rounded-3xl border-border/50 bg-[rgba(20,8,12,0.9)] p-7 text-[rgba(255,255,255,0.76)] shadow-[0_22px_44px_-18px_rgba(40,10,20,0.22)] sm:p-9">
        <p className="mb-3 text-xs font-extrabold tracking-[0.24em] text-[rgba(255,255,255,0.56)]">
          PERFIL
        </p>
        <h2 className="font-display mb-4 text-3xl font-bold text-white sm:text-4xl">
          Desarrollo productos con foco en detalle.
        </h2>
        <p className="m-0 max-w-3xl text-sm leading-7 sm:text-base">
          Soy estudiante de Ingeniería en Informática y desarrollador Full
          Stack, apasionado por la creación de productos digitales completos.
          Actualmente estoy construyendo Knews, una marca y ecosistema de
          aplicaciones centrado en la comunidad de Blackpink y otros artistas,
          donde cada proyecto forma parte de una visión unificada. Dentro de
          este ecosistema desarrollo distintas plataformas, incluyendo un portal
          de noticias, una aplicación de contenido visual inspirada en
          Pinterest, un reproductor multimedia y servicios orientados al consumo
          de música y video. Mi objetivo es diseñar experiencias conectadas
          entre sí mediante arquitecturas escalables, compartiendo
          funcionalidades, datos y una identidad de producto consistente.
          Disfruto resolviendo problemas complejos, aprendiendo nuevas
          tecnologías y transformando ideas en soluciones reales que combinan
          creatividad, innovación y una sólida base técnica.
        </p>
      </Card>
    </section>
  );
};
