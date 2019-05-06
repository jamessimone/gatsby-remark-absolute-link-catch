const visit = require("unist-util-visit");

module.exports = ({ markdownAST }, { absoluteUrls, developmentLocation }) => {
  const devLocation = developmentLocation
    ? developmentLocation
    : "http://localhost:8000";

  const replacement = process.env.NODE_ENV === "development" ? devLocation : "";

  visit(markdownAST, `link`, markdown => {
    absoluteUrls.forEach(absoluteUrl => {
      if (markdown.url.indexOf(absoluteUrl) > -1) {
        markdown.url = markdown.url.replace(absoluteUrl, replacement);
      }
    });
  });

  return markdownAST;
};
