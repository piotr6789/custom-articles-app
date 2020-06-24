import * as actionTypes from './actionTypes';
import { MENU_ROUTES } from '../../constants/routes/routes';

export const addArticle = (article, route) => {
  route.push(MENU_ROUTES.ARTICLES);

  return {
    type: actionTypes.ADD_ARTICLE,
    article: article
  };
};
