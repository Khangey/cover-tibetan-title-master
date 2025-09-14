import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";

import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, ConfigProviderProps } from "antd";
import { getMessages } from "next-intl/server";
export type IAntLocale = ConfigProviderProps["locale"];

import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";

const AntLocale: Record<string, IAntLocale> = {
  bo: enUS,
  en: enUS,
  "zh-CN": zhCN,
};

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "དཔལ་ཡོན་རྩོམ་ཡིག་ཁ་བྱང་བཟོ་ཆས།",
  description: "Creating cover images for blogs",
};

export default async function RootLayout({
  params: { locale },
  children,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={`light ${locale === 'bo' ? 'font-tibetan' : ''}`}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={`${locale === 'bo' ? 'font-tibetan' : inter.className} ${poppins.variable}`}>
        <NextIntlClientProvider messages={messages!}>
          <AntdRegistry>
            <ConfigProvider
              locale={AntLocale[locale]}
              theme={{
                token: {
                  colorPrimary: "#f18446",
                },
              }}
            >
              {children}
            </ConfigProvider>
          </AntdRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
