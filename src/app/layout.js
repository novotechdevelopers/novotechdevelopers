//= Global Styles
import "@/styles/main.scss";
import "@/styles/preloader.css";
import "@/styles/modal-video.css";
import "swiper/css/bundle";
import "react-circular-progressbar/dist/styles.css";


export const metadata = {
  title: 'Novotech',
  description: 'Excellent Digital Marketing Services',
  keywords: ['Digital Marketing', 'Web Application Development', 'Mobile Application Development', 'Search Engine Optimization'],
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico"
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
