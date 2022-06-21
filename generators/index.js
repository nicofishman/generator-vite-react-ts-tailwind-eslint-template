const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    installDependencies() {
        this.npmInstall(
            [
                "react",
                "react-dom"
            ],
            { "save-dev": false }
        );
        this.npmInstall(
            [
                "@types/react",
                "@types/react-dom",
                "@typescript-eslint/eslint-plugin",
                "@typescript-eslint/parser",
                "@vitejs/plugin-react",
                "autoprefixer",
                "eslint",
                "eslint-config-standard",
                "eslint-plugin-import",
                "eslint-plugin-n",
                "eslint-plugin-promise",
                "eslint-plugin-react",
                "eslint-plugin-tailwindcss",
                "postcss",
                "tailwindcss",
                "typescript",
                "vite"
            ],
            { "save-dev": true }
        )
    }
    files() {
        this.fs.copy(
            this.templatePath("**/*"),
            this.destinationPath(".")
        );
    }

};