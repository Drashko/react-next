import '../public/assets/css/style.css';
import { AppProvider } from '../components/dashboard/context/DashboardContext';

export const metadata = {
  title: 'Digiboard',
  description: 'React + Next.js application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
