module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  watchPathIgnorePatterns: ["/node_modules/"],
  testMatch: ["**/?(*.)+(test).+(ts|tsx)"],
  testEnvironment: "jsdom", // default node
};
