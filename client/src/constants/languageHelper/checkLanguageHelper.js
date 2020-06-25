export const checkLanguage = (languageType, languageConstantHelper) => {
  let languageHelper = null;
  if (languageType === 0) {
    languageHelper = languageConstantHelper.default.ENG;
  } else {
    languageHelper = languageConstantHelper.default.PL;
  }

  return languageHelper;
};
