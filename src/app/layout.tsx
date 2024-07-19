import type {Metadata} from 'next';
import ThemeMiuProvider from '@/providers/ThemeMui';

export const metadata: Metadata = {
  title: 'inscripción Novaventa',
  description: 'Proceso de inscripción para Novaempresarios'
};

type Props = Readonly<{children: React.ReactNode}>;

export default function RootLayout({children}: Props) {
  return (
    <html lang='es'>
      <body>
        <ThemeMiuProvider>{children}</ThemeMiuProvider>
      </body>
    </html>
  );
}
