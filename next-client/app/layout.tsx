"use client";
import { Provider } from "react-redux";
import store from "@/app/redux/store";
import localFont from "next/font/local";
import "./globals.css";
import AppLayout from "@/app/components/AppLayout";
import { makeServer } from "@/app/mirage/server";
import { appWithTranslation } from "next-i18next";
import React from "react";
import I18nProvider from "@/app/i18nProvider";
import { router } from "next/client";
import i18n from "@/public/locales/i18n";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <I18nProvider
            Component={() => <AppLayout>{children}</AppLayout>}
            pageProps={{}}
            router={router}
          />
        </Provider>
      </body>
    </html>
  );
}
