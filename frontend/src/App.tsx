import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Cap from './components/sections/Cap/Cap';
import Products from './components/sections/Products/Products';
import Process from './components/sections/Process/Process';
import Global from './components/sections/Global/Global';
import Serve from './components/sections/Serve/Serve';
import Insights from './components/sections/Insights/Insights';
import Team from './components/sections/Team/Team';
import Careers from './components/sections/Careers/Careers';
import Partner from './components/sections/Partner/Partner';
import News from './components/sections/News/News';
import Contacts from './components/sections/Contacts/Contacts';
import Login from './components/sections/Login/Login';
import SearchOverlay from './components/common/SearchOverlay/SearchOverlay';
import CookieBanner from './components/common/CookieBanner/CookieBanner';
import BackToTop from './components/common/BackToTop/BackToTop';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import { useSearchOverlay } from './hooks/useSearchOverlay';
import { useCookieConsent } from './hooks/useCookieConsent';

function App() {
  useSmoothScroll();
  useRevealOnScroll();
  const search = useSearchOverlay();
  const cookieConsent = useCookieConsent();

  return (
    <>
      <Header onOpenSearch={search.open} />
      <Hero />
      <About />
      <Cap />
      <Products />
      <Process />
      <Global />
      <Serve />
      <Insights />
      <Team />
      <Careers />
      <Partner />
      <News />
      <Contacts />
      <Login />
      <Footer onManageCookies={cookieConsent.reopen} />
      {/*
        Все секции из Fingold_Light_Rebuild.html перенесены (см. docs/TODO.md, Этап 2):
        Header → Hero → About → Cap → Products → Process → Global → Serve →
        Insights → Team → Careers → Partner → News → Contacts → Login → Footer ✅
      */}
      <SearchOverlay {...search} />
      <CookieBanner {...cookieConsent} />
      <BackToTop />
    </>
  );
}

export default App;
