const footerLinks = [
  ['About', ''],
  ['Help Center', ''],
  ['Privacy Policy', ''],
  ['Cookie Policy', ''],
  ['Accessibility', ''],
  ['Ads Info', ''],
  ['Blog', ''],
  ['Status', ''],
  ['Careers', ''],
  ['Brand Resources', ''],
  ['Advertising', ''],
  ['Marketing', ''],
  ['Melo for Business', ''],
  ['Developers', ''],
  ['Directory', ''],
  ['Settings', '']
] as const;

export function LoginFooter(): JSX.Element {
  return (
    <footer className='hidden justify-center p-4 text-sm text-light-secondary dark:text-dark-secondary lg:flex'>
      <nav className='flex flex-wrap justify-center gap-4 gap-y-2'>
        {footerLinks.map(([linkName, href]) => (
          <a
            className='custom-underline'
            target='_blank'
            rel='noreferrer'
            href={href}
            key={linkName}
          >
            {linkName}
          </a>
        ))}
        <p>© 2023 Melo Inu, Inc.</p>
      </nav>
    </footer>
  );
}
