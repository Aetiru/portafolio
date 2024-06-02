/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>👋 ¡Hola! Soy @Alvaro Tinoco</p>\n<ul>\n<li>👀 Me interesa la gestión de bases de datos, desarrollo web y pruebas de software.</li>\n<li>🌱 Actualmente estoy aprendiendo nuevas tecnologías y ampliando mis habilidades.</li>\n<li>💞️ Estoy buscando colaborar en proyectos de código abierto relacionados con desarrollo web, optimización de bases de datos y marcos de pruebas de software.</li>\n</ul>\n<p>Tengo más de dos años de experiencia en la gestión de bases de datos SQL Server y Oracle, brindando soporte a empresas como Afinia y Aguas de Puebla. Tengo una sólida formación en pruebas de aplicaciones y desarrollo web utilizando tecnologías como HTML, CSS, jQuery, PHP, Java, Angular y JavaScript. También tengo experiencia en el desarrollo del lado del servidor con PHP y NestJS, con un profundo conocimiento de SQL.</p>";

				const frontmatter = {"title":"about","name":"Alvaro Tinoco","designation":"FullStack Developer","location":"Barranquilla, Colombia","website":"http://tafutza.hn/kos"};
				const file = "C:/Users/Alvaro/astro-cv-esquelete/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\r\n👋 ¡Hola! Soy @Alvaro Tinoco\r\n- 👀 Me interesa la gestión de bases de datos, desarrollo web y pruebas de software.\r\n- 🌱 Actualmente estoy aprendiendo nuevas tecnologías y ampliando mis habilidades.\r\n- 💞️ Estoy buscando colaborar en proyectos de código abierto relacionados con desarrollo web, optimización de bases de datos y marcos de pruebas de software.\r\n\r\n\r\nTengo más de dos años de experiencia en la gestión de bases de datos SQL Server y Oracle, brindando soporte a empresas como Afinia y Aguas de Puebla. Tengo una sólida formación en pruebas de aplicaciones y desarrollo web utilizando tecnologías como HTML, CSS, jQuery, PHP, Java, Angular y JavaScript. También tengo experiencia en el desarrollo del lado del servidor con PHP y NestJS, con un profundo conocimiento de SQL.\r\n";
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
