const i18nOptions = {
    "locales": ["en", "es"],
    "defaultLocale": "en",
    "pages": {
        "*": ["common"],
        "/": ["home"],
        "/second-page": ["second"],
    },
    logger: false,
    logBuild: false,
};

module.exports = i18nOptions;