export type PageMeta = {
  title: string;
  description: string;
};

export type ContentTextSegment = {
  text: string;
  href?: string;
};

export type ContentParagraph = string | ContentTextSegment[];

export type ContentLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ContentSection = {
  body: string;
};

export type ContentPageContent = PageMeta & {
  heading: string;
  introParagraphs: readonly ContentParagraph[];
  links: readonly ContentLink[];
  sections: readonly ContentSection[];
};
