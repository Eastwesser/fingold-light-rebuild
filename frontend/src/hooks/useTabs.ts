import { useState } from 'react';

export function useTabs(defaultKey: string) {
  const [active, setActive] = useState(defaultKey);
  return { active, setActive, isActive: (key: string) => key === active };
}
