import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import './globals.css';
import DesktopStickyBanner from '@/components/DesktopStickyBanner';
import WelcomePopup from '@/components/WelcomePopup';

export const metadata: Metadata = {
  title: 'Apex IT Academy — Pay After Placement IT Training | Pune',
  description: 'Apex IT Academy offers 90-day intensive IT training with Pay After Placement model. 1500+ students placed in top MNCs. Courses in Data Science, Java, AWS, and more.',
  openGraph: {
    title: 'Apex IT Academy — Pay After Placement IT Training',
    description: 'Get trained today, pay only after you get placed. 1500+ students placed, 41 LPA highest package.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
        <DesktopStickyBanner />
        <WelcomePopup />
      </body>
    </html>
  );
}
