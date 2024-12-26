'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Switch } from '@nextui-org/react';

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('light');
        break;
      default:
        break;
    }
  };

  const toggleTheme = () => {
      switchTheme();
  };

  return (
  <Button
      onClick={toggleTheme}
      size="lg"
      className="group rounded-lg border-none bg-transparent shadow-none hover:bg-blue-600/5">
        <Moon
          fill="red"
          size={72}
          className="absolute  rotate-90 scale-0 transition-all group-hover:scale-100 group-hover:text-blue-500 dark:rotate-0 dark:scale-100 dark:text-white" />
        <Sun
          fill="orange"
          size={72}
          className="absolute  h-full w-full rotate-0 scale-100 text-black transition-all group-hover:scale-110 group-hover:text-blue-500 dark:-rotate-90 dark:scale-0" />


        <span className="sr-only">Toggle theme</span>
      </Button>
  );
}