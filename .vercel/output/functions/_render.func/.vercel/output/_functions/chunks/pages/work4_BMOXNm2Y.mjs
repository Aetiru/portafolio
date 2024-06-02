/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Ayude a realizar la instalación de la infraestructura de redes, instalaciones de programas a utilizar para lograr u mejor rendimiento operación dentro de los departamentos administrativos y logísticos de esta misma.</li>\n<li>Realizando mantenimientos correctivos y preventivos en los equipos de computo cada 3 meses.</li>\n</ul>";

				const frontmatter = {"title":"Jefe de Sistemas","date":"2020 - 2022","location":"Barranquilla, Colombia","org":"Barrplastic SAS","tags":["PHP","JavaScript","Ofimatica","Servicio al Cliente","Logistica","Contabilidad"]};
				const file = "C:/Users/Alvaro/astro-cv-esquelete/src/pages/works/work4.md";
				const url = "/works/work4";
				function rawContent() {
					return "\r\n- Ayude a realizar la instalación de la infraestructura de redes, instalaciones de programas a utilizar para lograr u mejor rendimiento operación dentro de los departamentos administrativos y logísticos de esta misma. \r\n- Realizando mantenimientos correctivos y preventivos en los equipos de computo cada 3 meses.";
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
