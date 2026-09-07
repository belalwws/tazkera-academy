import './globals.css';

export const metadata = {
  title: 'Al-Mundhir Quran Academy | أكاديمية المنذر للقرآن وعلومه',
  description: 'Al-Mundhir Quran Academy (أكاديمية المنذر) offers personalized Qur’an memorization, Tajweed, Arabic language, and Islamic studies with a learner-first approach and dedicated tutor support.',
  icons: {
    icon: '/assets/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

