
import { Suspense } from "react";
import { Heder } from "../heder/heder"
// import s from "./layout.module.scss"
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";


export const Layout = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Heder />
      <main style={{flex: '1 1 0'}}>
        <Suspense fallback="Завантаження...">
          <Outlet />
        </Suspense>
      </main>
      <footer><Footer/></footer>
    </div>
  );
}
