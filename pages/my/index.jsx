// import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

const My = (props) => {
  const { t } = useTranslation();
  const router = useRouter();
  console.log(router);

  const handleChange = (e) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <div>
      {" "}
      <p>{t("home:SECOND_PAGE")}</p>
      <h2>Your language current language is:</h2>
      <select
        defaultValue={props._nextI18Next.initialLocale}
        onChange={handleChange}
      >
        <option value="en">English</option>
        <option value="ne">Nepali</option>
        <option value="hi">Hindi</option>
        <option value="ja">Japinese</option>
        <option value="ur">Urdu</option>
      </select>
      <br />
      <br />
      <button onClick={() => router.push("/")}>back to home</button>
    </div>
  );
};

export default My;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
