import * as actionTypes from './actionTypes';

export const changeLanguage = (languageId) => {
  localStorage.setItem('language', languageId);

  return {
    type: actionTypes.CHANGE_LANGUAGE,
    language: languageId
  };
};

export const checkLanguage = () => {
  const languageId = JSON.parse(localStorage.getItem('language'));

  if (!languageId) {
    return {
      type: actionTypes.CHECK_LANGUAGE,
      language: 0
    };
  } else {
    return {
      type: actionTypes.CHECK_LANGUAGE,
      language: 1
    };
  }
};
