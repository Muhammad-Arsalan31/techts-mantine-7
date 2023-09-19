import { Button, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <Button onClick={() => setColorScheme('light')} aria-label="Switch to light color scheme">
        Light
      </Button>
      <Button onClick={() => setColorScheme('dark')} aria-label="Switch to dark color scheme">
        Dark
      </Button>
      <Button onClick={() => setColorScheme('auto')} aria-label="Switch to auto color scheme">
        Auto
      </Button>
    </Group>
  );
}
