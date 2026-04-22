import type { Locale } from "./i18n";

export type Work = {
  id: string;
  name: string;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  releaseDate: string;
  thumbnail: string;
  screenshots: string[];
  url: string;
  accentClass: string;
};

export const works: Work[] = [
  {
    id: "dropdown",
    name: "KoreaDropdown",
    tagline: {
      ko: "드롭다운에서 한국을 자동으로 찾아주는 크롬 확장 프로그램",
      en: "A Chrome extension that auto-selects Korea in country dropdowns.",
    },
    description: {
      ko: "영문 \"Select your country\" 목록에서 🇰🇷 Korea를 자동으로 찾아 선택합니다. 'South Korea', 'Republic of Korea', 'Korea, Republic of' 등 다양한 표기를 탐지해, 더 이상 스크롤할 필요가 없습니다.",
      en: "Automatically detects 🇰🇷 Korea across country dropdowns — matching \"South Korea\", \"Republic of Korea\", \"Korea, Republic of\" and more. No more scrolling through the list.",
    },
    releaseDate: "2025.05",
    thumbnail: "/works/dropdown/thumbnail.png",
    screenshots: [
      "/works/dropdown/screenshot-1.png",
      "/works/dropdown/screenshot-2.png",
    ],
    url: "https://dropdown.djangnan.org",
    accentClass:
      "bg-rose-500/10 dark:bg-rose-500/20 group-hover:bg-rose-500/20 dark:group-hover:bg-rose-500/30",
  },
  {
    id: "postbee",
    name: "Postbee",
    tagline: {
      ko: "세상을 모아, 당신의 이야기로.",
      en: "Gather the world, into your story.",
    },
    description: {
      ko: "원하는 링크를 등록하면 꿀벌이가 주기적으로 긁어와 포스팅 초안을 생성해줍니다. 수집부터 발행까지, 감각적인 AI 기반 SNS 콘텐츠 자동화 플랫폼.",
      en: "Subscribe to any link and the bee will periodically fetch and draft posts for you. An AI-powered SNS content automation platform — from gathering to publishing.",
    },
    releaseDate: "2026.01 BETA",
    thumbnail: "/works/postbee/thumbnail.png",
    screenshots: [
      "/works/postbee/screenshot-1.png",
      "/works/postbee/screenshot-2.png",
    ],
    url: "https://postbee.djangnan.org",
    accentClass:
      "bg-amber-400/15 dark:bg-amber-400/20 group-hover:bg-amber-400/30 dark:group-hover:bg-amber-400/30",
  },
];
