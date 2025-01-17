// External/non-wiki redirect links
// Note that these only work in production, and not dev
export const redirectLinks: {
  from: string | string[];
  to: string;
}[] = [
  {
    from: '/instagram',
    to: 'https://www.instagram.com/warwicktechcrew',
  },
  {
    from: ['/membership', '/join', '/su'],
    to: 'https://www.warwicksu.com/societies-sports/societies/techcrew/',
  },
  {
    from: ['/submit-mrf'],
    to: 'https://www.warwicksu.com/sgf/4251',
  },
  {
    from: ['/crew-opportunities.html', '/crew-opportunities'],
    to: '/opportunities',
  },
  {
    from: ['/linktree', '/qr'],
    to: 'https://linktr.ee/warwicktechcrew',
  },
  {
    from: ['/hires-terms'],
    to: 'https://drive.google.com/file/d/1YQ1L4_fq2qH8tRFm2SNTCN9R9nBvwHBc/view?usp=sharing',
  },
  {
    from: ['/price-list', '/prices'],
    to: 'https://drive.google.com/file/d/1x41-dwx_3uxUVBzGcdEYqNWBqM21NK35/view?usp=sharing',
  },
  {
    from: ['/constitution'],
    to: 'https://www.warwicksu.com/resources/techcrew/Tech-Crew-Constitution/',
  },
];
