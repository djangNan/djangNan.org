import type { Locale } from "./i18n";

export type Work = {
  id: "postbee" | "daily-phrase" | "korea-dropdown";
  name: string;
  kind: Record<Locale, string>;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  releaseDate: string;
  url: string;
  /**
   * Stylized cover images that already include the title and visual.
   * Each work ships with a light + dark variant; consumers pick based on theme.
   */
  cover: {
    light: string;
    dark: string;
  };
  /** Ink color used for accents in the modal + hover states. */
  inkLight: string;
  inkDark: string;
};

export const works: Work[] = [
  {
    id: "postbee",
    name: "Postbee",
    kind: {
      ko: "AI · SNS 자동화",
      en: "AI · SNS Automation",
    },
    tagline: {
      ko: "세상을 모아, 당신의 이야기로.",
      en: "Gather the world, into your story.",
    },
    description: {
      ko: "원하는 링크를 등록하면 꿀벌이가 주기적으로 긁어와 포스팅 초안을 생성해줍니다. 수집부터 발행까지, 감각적인 AI 기반 SNS 콘텐츠 자동화 플랫폼.",
      en: "Subscribe to any link and the bee will periodically fetch and draft posts for you. An AI-powered SNS content automation platform — from gathering to publishing.",
    },
    releaseDate: "2026.04 BETA",
    url: "https://postbee.djangnan.org",
    cover: {
      light: "/works/postbee-light.png",
      dark: "/works/postbee-dark.png",
    },
    inkLight: "#D99A00",
    inkDark: "#FEC92D",
  },
  {
    id: "daily-phrase",
    name: "Daily Phrase",
    kind: {
      ko: "iOS App",
      en: "iOS App",
    },
    tagline: {
      ko: "오늘도, 당신에게 가장 따뜻한 한마디.",
      en: "A warm line, for you, even today.",
    },
    description: {
      ko: "daily phrase는 매일 하나의 따뜻한 문장을 전해주는 앱입니다. 바쁜 하루 속, 잠깐의 쉼표가 되어줄 문장을 통해 나를 돌아보는 시간을 가져보세요.",
      en: "daily phrase sends you one gentle sentence each day. Amid the rush of the day, let a single line become a small pause — a moment to turn back toward yourself.",
    },
    releaseDate: "2025.09",
    url: "https://apps.apple.com/app/id6747974922",
    cover: {
      light: "/works/daily-phrase-light.png",
      dark: "/works/daily-phrase-dark.png",
    },
    inkLight: "#C95E5E",
    inkDark: "#E89090",
  },
  {
    id: "korea-dropdown",
    name: "KoreaDropdown",
    kind: {
      ko: "Chrome Extension",
      en: "Chrome Extension",
    },
    tagline: {
      ko: "한국은 이미 선택됐습니다.",
      en: "Korea is already selected.",
    },
    description: {
      ko: "영문 \"Select your country\" 목록에서 🇰🇷 Korea를 자동으로 찾아 선택합니다. 'South Korea', 'Republic of Korea', 'Korea, Republic of' 등 다양한 표기를 탐지해, 더 이상 스크롤할 필요가 없습니다.",
      en: "Automatically detects 🇰🇷 Korea across country dropdowns — matching \"South Korea\", \"Republic of Korea\", \"Korea, Republic of\" and more. No more scrolling through the list.",
    },
    releaseDate: "2025.05",
    url: "https://dropdown.djangnan.org",
    cover: {
      light: "/works/korea-dropdown-light.png",
      dark: "/works/korea-dropdown-dark.png",
    },
    inkLight: "#2563EB",
    inkDark: "#60A5FA",
  },
];
