/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Desarrollo y mantenimiento de pantallas.</li>\n<li>Conexión con API’s</li>\n<li>Autenticación.</li>\n<li>Control de conexiones online y offline.</li>\n<li>Localstorage, sessionstorage, estado global y Service Worker</li>\n<li>Frameworks de estilizado como angular material y SASS</li>\n<li>Temas avanzados como drag and drop, Formularios dinámicos y seguridad</li>\n</ul>";

				const frontmatter = {"title":"Frontend Developer","date":"2023 - 2024","url":"http://atawajof.dz/vonilzor","location":"Barranquilla, Colombia","org":"SIGEBI - INDEP","tags":["Freelance","JavaScript","Angular","NET","Pl Sql","MongoDB","Sql Server"]};
				const file = "C:/Users/Alvaro/astro-cv-esquelete/src/pages/works/work2.md";
				const url = "/works/work2";
				function rawContent() {
					return "\r\n- Desarrollo y mantenimiento de pantallas.\r\n- Conexión con API's\r\n- Autenticación.\r\n- Control de conexiones online y offline.\r\n- Localstorage, sessionstorage, estado global y Service Worker\r\n- Frameworks de estilizado como angular material y SASS\r\n- Temas avanzados como drag and drop, Formularios dinámicos y seguridad";
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
