import './globals.css';

const siteUrl = 'https://www.tazkera.academy';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Tazkera Academy | Personalized Quran, Arabic & Islamic Studies',
  description: 'Tazkera Academy offers personalized Qur’an, Tajweed, Arabic language, and Islamic studies for non-Arabic speakers, with teaching experience since 2017 and two free trial lessons with two different teachers.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Tazkera Academy',
    title: 'Tazkera Academy | Personalized Quran, Arabic & Islamic Studies',
    description: 'Personalized Qur’an, Tajweed, Arabic language, and Islamic studies for non-Arabic speakers.',
    images: [{ url: '/assets/tazkera-official-logo.jpg', alt: 'Tazkera Academy official logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Tazkera Academy | Personalized Quran, Arabic & Islamic Studies',
    description: 'Personalized Qur’an, Tajweed, Arabic language, and Islamic studies for non-Arabic speakers.',
    images: ['/assets/tazkera-official-logo.jpg'],
  },
  icons: {
    icon: '/assets/tazkera-official-logo.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/tazkera-official-logo.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
