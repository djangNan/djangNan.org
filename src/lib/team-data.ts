import type { Locale } from "./i18n";

export type TeamMember = {
  name: Record<Locale, string>;
  image: string;
  hoverColorClass: string;
  githubUrl: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: { ko: "서동준", en: "Dongjoon Seo" },
    image: "/team/dongjoon-seo.png",
    hoverColorClass: "group-hover:bg-rose-500 dark:group-hover:bg-rose-600",
    githubUrl: "https://github.com/seoo2001",
  },
  {
    name: { ko: "이종우", en: "Jongwoo Lee" },
    image: "/team/jongwoo-lee.png",
    hoverColorClass: "group-hover:bg-[#ffb800]",
    githubUrl: "https://github.com/dodolist",
  },
];
