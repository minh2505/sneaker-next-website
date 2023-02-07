import React, { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useRouter } from "next/router";

interface Props {
  children?: ReactNode;
}

export const Layout = React.memo(function Layout({
  children,
  ...props
}: Props) {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
});
