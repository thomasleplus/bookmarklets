const Configuration = {
  /*
   * Inherit rules from conventional commits.
   */
  extends: ["@commitlint/config-conventional"],

  /*
   * Any rules defined here will override rules from parent.
   */
  rules: {
    "body-leading-blank": [2, "always"], // warning -> error
    "body-max-line-length": [1, "always", 100], // error -> warning
    "footer-leading-blank": [2, "always"], // warning -> error
    "footer-max-length": [1, "always", 100], // error -> warning
    "header-max-length": [1, "always", 100], // error -> warning
  },
};

export default Configuration;
