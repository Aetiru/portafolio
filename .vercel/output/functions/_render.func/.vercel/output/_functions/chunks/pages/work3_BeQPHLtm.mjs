/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Consulta y actualizaciones a nivel soporte y funcional en Base de Datos PREPRODUCCION Y PRODUCCION.</li>\n<li>Realizar sesiones con el cliente para socializar er rores de operativa y su respectiva solución.</li>\n<li>Realizar DEBUG a errores no documentados en Confluence Realizar seguimiento a programas ejecutados via servidor por actividades programadas.</li>\n<li>Creación de documentación de errores de operativa y correctivos de sistema en Confluence.</li>\n</ul>";

				const frontmatter = {"title":"Analista Funcional","date":"2022 - 2023","url":"https://www.indracompany.com","location":"Barranquilla, Colombia","org":"Indra Company","tags":["Java","UML","Analisis de negocio","Sql Server","Oracle Server","Power BI","Debugging","CRM"]};
				const file = "C:/Users/Alvaro/astro-cv-esquelete/src/pages/works/work3.md";
				const url = "/works/work3";
				function rawContent() {
					return "\r\n- Consulta y actualizaciones a nivel soporte y funcional en Base de Datos PREPRODUCCION Y PRODUCCION.\r\n- Realizar sesiones con el cliente para socializar er rores de operativa y su respectiva solución. \r\n- Realizar DEBUG a errores no documentados en Confluence Realizar seguimiento a programas ejecutados via servidor por actividades programadas. \r\n- Creación de documentación de errores de operativa y correctivos de sistema en Confluence.\r\n";
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
