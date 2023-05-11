import '@styles/globals.scss';

export const metadata = {
  title: 'Dealintent',
  description: 'This is a Assignment',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <div className='app'>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
