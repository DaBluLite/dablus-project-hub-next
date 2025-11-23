"use client";

import { useTheme } from "@/contexts/ThemeContext";

/**
 * Color palette reference component
 * Shows all theme colors in both light and dark modes
 */
export default function ColorPalette() {
  const { resolvedTheme } = useTheme();

  const colorGroups = [
    {
      name: "Primary Colors",
      colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
      prefix: "primary",
    },
    {
      name: "Tertiary Colors",
      colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
      prefix: "tertiary",
    },
    {
      name: "Accent Colors",
      colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
      prefix: "accent",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-2">
          Color Palette
        </h1>
        <p className="text-primary-600 dark:text-primary-300">
          Current theme: <strong>{resolvedTheme}</strong>
        </p>
      </div>

      {colorGroups.map((group) => (
        <div key={group.name}>
          <h2 className="text-xl font-semibold mb-4 text-primary-800 dark:text-primary-200">
            {group.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {group.colors.map((shade) => (
              <div
                key={shade}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className={`w-full aspect-square rounded-lg border-2 border-primary-300 dark:border-primary-700 shadow-sm bg-${group.prefix}-${shade}`}
                  style={{
                    backgroundColor: `var(--color-${group.prefix}-${shade})`,
                  }}
                />
                <div className="text-center">
                  <div className="text-sm font-medium text-primary-800 dark:text-primary-200">
                    {shade}
                  </div>
                  <div className="text-xs text-primary-500 dark:text-primary-400 font-mono">
                    {group.prefix}-{shade}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8 p-6 rounded-lg border border-primary-400/20 dark:border-primary-600/30 bg-white dark:bg-primary-800">
        <h2 className="text-xl font-semibold mb-4 text-primary-800 dark:text-primary-200">
          Usage Examples
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-700">
            <p className="text-primary-900 dark:text-primary-100 font-medium">
              Background surfaces
            </p>
            <p className="text-sm text-primary-600 dark:text-primary-300 mt-1">
              bg-primary-50 dark:bg-primary-900
            </p>
          </div>

          <div className="p-4 rounded-lg bg-accent-500 hover:bg-accent-600 transition-colors">
            <p className="text-white font-medium">Accent button</p>
            <p className="text-sm text-white/80 mt-1">
              bg-accent-500 hover:bg-accent-600
            </p>
          </div>

          <div className="p-4 rounded-lg border-2 border-primary-400 dark:border-primary-600">
            <p className="text-primary-800 dark:text-primary-200 font-medium">
              Bordered container
            </p>
            <p className="text-sm text-primary-600 dark:text-primary-300 mt-1">
              border-primary-400 dark:border-primary-600
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
