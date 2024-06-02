/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Social network based on dental medical products with Digithab SAS</p>";

				const frontmatter = {"title":"DentalTest","url":"https://dentaltesttest.netlify.app/#/welcome","tags":["JavaScript","VueJS","Vuetify","Firebase","ExpressJS"],"date":2024};
				const file = "C:/Users/Alvaro/astro-cv-esquelete/src/pages/projects/spotfilm4.md";
				const url = "/projects/spotfilm4";
				function rawContent() {
					return "\r\nSocial network based on dental medical products with Digithab SAS\r\n\r\n";
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
