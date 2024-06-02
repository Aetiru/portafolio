/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Tecnico en Sistemas","location":"Servicio Nacional de Aprendizaje","url":"https://sena.edu.co/es-co/Paginas/default.aspx","institute":"Servicio Nacional de Aprendisaje","date":"2018-2019","tags":["Mantenimiento de Computo","Desarrollo de Software","Mantenimiento de Redes","Ofimatica","Extructura de Datos"]};
				const file = "C:/Users/Alvaro/astro-cv-esquelete/src/pages/studies/studie1.md";
				const url = "/studies/studie1";
				function rawContent() {
					return "";
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
