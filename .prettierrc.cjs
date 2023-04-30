/** @type {import("prettier").Config} */
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */

const config = {
	endOfLine: "lf",
	semi: false,
	tabWidth: 2,
	useTabs: true,
	trailingComma: "es5",
	importOrder: [
		"^(react/(.*)$)|^(react$)",
		"^(next/(.*)$)|^(next$)",
		"<THIRD_PARTY_MODULES>",
		"",
		"^~/config/(.*)$",
		"^~/lib/(.*)$",
		"^~/hooks/(.*)$",
		"^~/components/(.*)$",
		"^~/components/ui/(.*)$",
		"^~/styles/(.*)$",
		"^~/app/(.*)$",
		"^[~/]",
		"^[./]",
		"^[../]",
	],
	importOrderSeparation: false,
	importOrderSortSpecifiers: true,
	importOrderBuiltinModulesToTop: true,
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	importOrderMergeDuplicateImports: true,
	importOrderCombineTypeAndValueImports: true,
	plugins: [
		"prettier-plugin-tailwindcss",
		"@ianvs/prettier-plugin-sort-imports",
	],
}

module.exports = config
