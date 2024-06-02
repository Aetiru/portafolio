/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Medical implements company, integration with electronic billing of Italian public administration  with Digithab SAS</p>";

				const frontmatter = {"title":"Sordita","url":"https://dashboard.sorditalamezia.it","tags":["react","javaScript","axios","HTML","PokectBase","CSS","NestJS","ExpressJS","xml"],"date":2023};
				const file = "C:/Users/Alvaro/astro-cv-esquelete/src/pages/projects/spotfilm2.md";
				const url = "/projects/spotfilm2";
				function rawContent() {
					return "\r\nMedical implements company, integration with electronic billing of Italian public administration  with Digithab SAS\r\n\r\n";
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
