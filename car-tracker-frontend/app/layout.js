// app/layout.js
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/car/add">Add Car</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
