const KEY_ACCESS = "access";
const KEY_PROFILE = "profile";
const KEY_AUTHORIZATION = "authorization";
const KEY_REDIRECT = "redirect";
const USERNAME_ADMIN = "ca.dvmeg";

const FILE = {
  IMAGE: [
    "png",
    "jpg",
    "jpge",
    "jpeg",
    "jfif",
    "pjpeg",
    "pjp",
    "svg",
    "svg+xml",
    "webp",
    "bmp",
  ],
  VIDEO: ["mpg", "mpeg", "mp4", "webm", "quicktime", "mov"],
  MAX_SIZE: 25 * 1024 * 1024, // 25MB
};

export {
  KEY_ACCESS,
  KEY_PROFILE,
  KEY_AUTHORIZATION,
  KEY_REDIRECT,

  //
  FILE,
  USERNAME_ADMIN,
};
