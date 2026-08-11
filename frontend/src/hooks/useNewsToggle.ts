import { useState } from 'react';

export function useNewsToggle() {
  const [expanded, setExpanded] = useState(false);
  return { expanded, toggle: () => setExpanded((prev) => !prev) };
}
