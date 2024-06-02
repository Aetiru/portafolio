/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Tecnico Desarrollo de Software","location":"Servicio Nacional de Aprendizaje","url":"https://sena.edu.co/es-co/Paginas/default.aspx","institute":"Servicio Nacional de Aprendizaje","date":"2019-2020","tags":["Fundamentos de Programacion","Estructura de Datos","Java","PHP","JavaScript"]};
				const file = "C:/Users/Alvaro/astro-cv-esquelete/src/pages/studies/studie2.md";
				const url = "/studies/studie2";
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
