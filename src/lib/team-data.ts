import type { Locale } from "./i18n";

export type TeamMember = {
  name: Record<Locale, string>;
  role: Record<Locale, string>;
  location: Record<Locale, string>;
  bio: Record<Locale, string>;
  image: string;
  hoverColorClass: string;
  githubUrl: string;
  linkedinUrl: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: { ko: "이름 placeholder", en: "Name placeholder" },
    role: { ko: "역할 placeholder", en: "Role placeholder" },
    location: { ko: "위치 placeholder", en: "Location placeholder" },
    bio: {
      ko: "소개 텍스트 placeholder. 한두 문장으로 본인을 표현하는 자리.",
      en: "Bio placeholder. A sentence or two about yourself goes here.",
    },
    image: "/team/dongjoon-seo.png",
    hoverColorClass: "group-hover:bg-rose-500 dark:group-hover:bg-rose-600",
    githubUrl: "https://github.com/seoo2001",
    linkedinUrl: "https://www.linkedin.com/in/dongjoonseo01/",
  },
  {
    name: { ko: "이름 placeholder", en: "Name placeholder" },
    role: { ko: "역할 placeholder", en: "Role placeholder" },
    location: { ko: "위치 placeholder", en: "Location placeholder" },
    bio: {
      ko: "소개 텍스트 placeholder. 한두 문장으로 본인을 표현하는 자리.",
      en: "Bio placeholder. A sentence or two about yourself goes here.",
    },
    image: "/team/jongwoo-lee.png",
    hoverColorClass: "group-hover:bg-[#ffb800]",
    githubUrl: "https://github.com/dodolist",
    linkedinUrl: "https://www.linkedin.com/in/dodol/",
  },
];
