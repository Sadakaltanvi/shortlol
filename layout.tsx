import './globals.css';

export const metadata = {
  title: 'Shorts.lol',
  description: 'Your platform for AI-generated short videos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-700 font-sans transition-colors duration-300 ease-in-out transform-3d">
        {/* Header */}
        <header className="shadow-3d p-4 bg-white border-b border-gray-200">
          <h1 className="text-3xl font-bold text-center">Welcome to Shorts.lol</h1>
        </header>
        
        {/* Main Content */}
        <main className="min-h-screen flex flex-col items-center justify-center p-10">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="shadow-3d p-4 bg-white border-t border-gray-200">
          <p className="text-center text-gray-600">© 2024 Shorts.lol. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}


 
 
 
 
 
 
 

