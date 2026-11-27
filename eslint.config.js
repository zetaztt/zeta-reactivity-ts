import tsParser from "@typescript-eslint/parser";
import unusedImports from "eslint-plugin-unused-imports";

export default [
	{ ignores: ["dist/"] },
	{
		plugins: { "unused-imports": unusedImports },
		rules: { "unused-imports/no-unused-imports": "error" },
	},
	{
		files: ["**/*.ts"],
		languageOptions: { parser: tsParser },
	},
];
