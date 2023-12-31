import { SNAuthNavbar } from '@/components/ui/SNAuthNavbar';

export const metadata = {
  title: 'SendNest',
  description: '',
};

export default function OnBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SNAuthNavbar />
      <main className="flex items-center justify-center auth-main">{children}</main>

      {/* this would not be rerendered  */}
    </>
  );
}
