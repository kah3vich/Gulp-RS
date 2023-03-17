import del from "del";

//! ✅ Reset - 

export const reset = () => {
	return del([app.path.clean, app.path.cleanFontStyle]);
};
