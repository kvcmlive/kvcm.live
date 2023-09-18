
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const Theme: CustomThemeConfig = {
    name: 'kvcm-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "6px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #7efe68 
		"--color-primary-50": "236 255 232", // #ecffe8
		"--color-primary-100": "229 255 225", // #e5ffe1
		"--color-primary-200": "223 255 217", // #dfffd9
		"--color-primary-300": "203 255 195", // #cbffc3
		"--color-primary-400": "165 254 149", // #a5fe95
		"--color-primary-500": "126 254 104", // #7efe68
		"--color-primary-600": "113 229 94", // #71e55e
		"--color-primary-700": "95 191 78", // #5fbf4e
		"--color-primary-800": "76 152 62", // #4c983e
		"--color-primary-900": "62 124 51", // #3e7c33
		// secondary | #fae100 
		"--color-secondary-50": "254 251 217", // #fefbd9
		"--color-secondary-100": "254 249 204", // #fef9cc
		"--color-secondary-200": "254 248 191", // #fef8bf
		"--color-secondary-300": "253 243 153", // #fdf399
		"--color-secondary-400": "252 234 77", // #fcea4d
		"--color-secondary-500": "250 225 0", // #fae100
		"--color-secondary-600": "225 203 0", // #e1cb00
		"--color-secondary-700": "188 169 0", // #bca900
		"--color-secondary-800": "150 135 0", // #968700
		"--color-secondary-900": "123 110 0", // #7b6e00
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #333333 
		"--color-surface-50": "224 224 224", // #e0e0e0
		"--color-surface-100": "214 214 214", // #d6d6d6
		"--color-surface-200": "204 204 204", // #cccccc
		"--color-surface-300": "173 173 173", // #adadad
		"--color-surface-400": "112 112 112", // #707070
		"--color-surface-500": "51 51 51", // #333333
		"--color-surface-600": "46 46 46", // #2e2e2e
		"--color-surface-700": "38 38 38", // #262626
		"--color-surface-800": "31 31 31", // #1f1f1f
		"--color-surface-900": "25 25 25", // #191919
		
	}
}