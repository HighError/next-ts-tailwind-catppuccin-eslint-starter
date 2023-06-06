import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl">Next.js template</h1>
      <ul className="list-disc">
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
        <li>
          ESLint
          <ul className="list-disc pl-5">
            <li>ESLint config for Next</li>
            <li>ESLint config for Prettier</li>
            <li>ESLint config for Imports</li>
            <li>ESLint config for React</li>
            <li>ESLint config for TailWindCSS</li>
            <li>ESLint config for TypeScript</li>
          </ul>
        </li>
        <li>Prettier</li>
        <li>Husky</li>
        <li>Lint staged</li>
        <li>Catppuccin theme (default mocha)</li>
        <li>Next Themes</li>
        <li>TailWindCSS ScrollBar</li>
      </ul>
    </main>
  );
}
