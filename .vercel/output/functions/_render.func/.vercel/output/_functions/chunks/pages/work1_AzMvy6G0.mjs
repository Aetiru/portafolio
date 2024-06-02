/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Development of Web Apps and Mobile Apps with a team of Software Developers Backend and UI/UX Designers remotely.</li>\n</ul>";

				const frontmatter = {"title":"Full Stack - Frontend Developer","date":"2023 - Present","url":"http://ropibbe.nf/savadru","location":"Barranquilla, Colombia","org":"Digithab SAS","tags":["Freelance","JavaScript","ReactJS","VueJS","Angular","ExpressJS","NestJS","MongoDB","SQL"]};
				const file = "C:/Users/Alvaro/astro-cv-esquelete/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "\r\n- Development of Web Apps and Mobile Apps with a team of Software Developers Backend and UI/UX Designers remotely.\r\n\r\n";
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
