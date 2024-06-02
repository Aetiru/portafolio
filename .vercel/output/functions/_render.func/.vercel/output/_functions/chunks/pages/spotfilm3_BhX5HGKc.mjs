/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Creation of plugin for custom WordPress payment method with Digithab SAS</p>";

				const frontmatter = {"title":"20bytes","url":"https://www.20bytes.com","tags":["Wordpress","javaScript","Woocomerce","HTML","PHP","ExpressJS"],"date":2024};
				const file = "C:/Users/Alvaro/astro-cv-esquelete/src/pages/projects/spotfilm3.md";
				const url = "/projects/spotfilm3";
				function rawContent() {
					return "\r\nCreation of plugin for custom WordPress payment method with Digithab SAS\r\n\r\n";
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
