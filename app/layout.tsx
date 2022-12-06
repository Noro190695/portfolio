import { Header } from '../src/components/header/Header';
import { Footer } from '../src/components/footer/Footer';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className='scroll-style'>
        <div className='container'>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
