module.exports = {
  i18n: {
    domains: [
      {
        domain: "en.localhost",
        defaultLocale: "en",
      },
      {
        domain: "hi.localhost",
        defaultLocale: "hi",
      },
      {
        domain: "ne.localhost",
        defaultLocale: "ne",
        // an optional http field can also be used to test
        // locale domains locally with http instead of https
        http: true,
      },
    ],
    locales: ["en", "hi", "ja", "ne", "ur"],
    defaultLocale: "en",
  },
};
