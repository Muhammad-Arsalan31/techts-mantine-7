import { useState } from 'react';
import { Container, Group, Burger, Title, Drawer, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Title order={1} size={rem('24px')}>
          Logo
        </Title>
        <Group gap={5} visibleFrom="xs">
          {items}
          <ColorSchemeToggle />
        </Group>
        <Group hiddenFrom="xs">
          <ColorSchemeToggle />

          <Burger opened={opened} onClick={toggle} size="sm" />
        </Group>
      </Container>
      <Drawer opened={opened} onClose={toggle} title="Logo">
        {items}
      </Drawer>
    </header>
  );
}
