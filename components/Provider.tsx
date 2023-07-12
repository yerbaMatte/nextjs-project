'use client';

import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

interface ProviderProps {
  children: ReactNode;
  session: Session | null; // Assuming the session can be null
}

const Provider: React.FC<ProviderProps> = ({
  children,
  session,
}: ProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
