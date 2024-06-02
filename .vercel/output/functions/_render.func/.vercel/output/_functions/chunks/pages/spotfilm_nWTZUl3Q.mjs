/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>E-commerce Italian technology company with Digithab SAS</p>";

				const frontmatter = {"title":"Computer Assistance","url":"https://computer-assistance.net","tags":["react","javaScript","axios","HTML","PokectBase","CSS","NestJS","ExpressJS"],"date":2024};
				const file = "C:/Users/Alvaro/astro-cv-esquelete/src/pages/projects/spotfilm.md";
				const url = "/projects/spotfilm";
				function rawContent() {
					return "\r\nE-commerce Italian technology company with Digithab SAS\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
