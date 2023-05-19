import del from 'del';

export const reset = () => del([app.path.clean, app.path.cleanFontStyle]);
