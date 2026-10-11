'use client';

import { useEffect, useState } from 'react';
import { daysLeft, isOpen } from '@/content/careers';

// The site is statically generated, so the server render is frozen at build time. The first
// client render uses the same build timestamp (no hydration mismatch); after mount it switches
// to the reader's clock, so an opportunity closes on the day without a rebuild.
const buildTime = new Date(process.env.NEXT_PUBLIC_BUILD_TIME ?? Date.now());

export function useNow() {
  const [now, setNow] = useState<Date>(buildTime);
  useEffect(() => {
    setNow(new Date());
  }, []);
  return now;
}

export function useOpenStatus(deadline: string) {
  const now = useNow();
  return { open: isOpen(deadline, now), daysLeft: daysLeft(deadline, now) };
}
