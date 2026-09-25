import './globals.css';

export const metadata = { title: 'الحسام للتسوق المنزلي', description: 'متجر عربي للتسوق المنزلي' };

export default function RootLayout({ children }) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
