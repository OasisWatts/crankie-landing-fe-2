import Script from 'next/script'
import './css/style.css'

import localFont from 'next/font/local'

const pretendard = localFont({
  src: '/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})

export const metadata = {
  title: 'Layout',
  description: 'Layout',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-pretendard antialiased bg-white text-gray-900 tracking-tight">
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
        <Script type="text/javascript">
          {`
          (function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "mw4hrrn53o");
    `}
        </Script>
      </body>
    </html>
  )
}
