// i18nProvider.tsx
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

const I18nProvider = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(I18nProvider);
