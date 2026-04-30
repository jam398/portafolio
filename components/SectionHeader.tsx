type SectionHeaderProps = {
  kicker: string;
  title: string;
  copy: string;
};

export function SectionHeader({ kicker, title, copy }: SectionHeaderProps) {
  return (
    <div className="grid-stack">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title text-[2rem] sm:text-[2.4rem]">{title}</h2>
      <p className="section-copy max-w-[34rem] text-sm sm:text-base">{copy}</p>
    </div>
  );
}