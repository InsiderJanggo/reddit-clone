const path = require("path");

module.exports = {
    i18n: {
        defaultLocale: "en",
        locales: ["en","id","ja"],
        localePath: path.resolve("./public/locales"),
        defaultNS: []
    }
}