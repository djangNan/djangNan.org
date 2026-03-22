export type Locale = "ko" | "en";

export const translations = {
  ko: {
    tagline: "장난처럼 시작해서, 진심이 된 것들",
    cta: "GitHub 둘러보기",
    aboutText:
      "우리는 작은 호기심에서 시작해, 쓸모 있는 것들을 만듭니다. 빠르게, 감각적으로, 그리고 진심을 담아.",
    teamTitle: "팀원 소개",
    teamSubtitle: "이 장난을 시작한 사람들",
    worksTitle: "작업물",
    worksSubtitle: "우리가 만든 것들",
    worksComingSoon: "곧 공개됩니다",
  },
  en: {
    tagline: "What started as play, became something real.",
    cta: "View on GitHub",
    aboutText:
      "We start from small curiosities and build things that matter. Fast, sensuous, and with heart.",
    teamTitle: "Who We Are",
    teamSubtitle: "The ones who started it all",
    worksTitle: "What We Build",
    worksSubtitle: "From curiosity to creation",
    worksComingSoon: "Coming soon",
  },
} as const;
