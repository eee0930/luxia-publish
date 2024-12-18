module.exports = {
  overrides: [
    {
      files: "*.html",
      options: {
        parser: "html",
        printWidth: 120, // 줄바꿈을 사실상 방지
      },
    },
  ],
};
