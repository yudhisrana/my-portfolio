import React from 'react';
import { CodeBlock } from '@/components/ui/code-block';

const CodeBlockJson = () => {
	const code = `{
  "name": "Dipo Yudhis Rana",
  "age": 35,
  "role": "Fullstack Developer",
  "techStack": ["Go", "Next.js", "Tailwind", "MySQL"],
  "location": "Indonesia",
  "availableForWork": true
}`;

	return (
		<div className="max-w-4xl mx-auto w-full">
			<CodeBlock language="json" filename="~/.dipo.json" code={code} />
		</div>
	);
};

export default CodeBlockJson;
