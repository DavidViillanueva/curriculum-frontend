(this.webpackJsonpcv = this.webpackJsonpcv || []).push([
	[0],
	{
		155: function (e, a, t) {},
		156: function (e, a, t) {
			'use strict';
			t.r(a);
			var n = t(0),
				l = t.n(n),
				r = t(13),
				c = t.n(r),
				m = t(11),
				i = function (e) {
					var a = e.url;
					return l.a.createElement(
						l.a.Fragment,
						null,
						l.a.createElement(
							'div',
							{ className: 'logo__container' },
							l.a.createElement('p', { className: 'logo__loader' }, 'Loading...'),
							a &&
								l.a.createElement('img', {
									className: 'animate__animated animate__fadeIn animate__slow',
									src: a,
									alt: 'logo',
								})
						)
					);
				},
				o = function (e) {
					var a = e.menuItems,
						t = void 0 === a ? {} : a,
						n = t.Linkedin,
						r = t.GitHub;
					return l.a.createElement(
						l.a.Fragment,
						null,
						l.a.createElement(
							'nav',
							null,
							l.a.createElement(
								'ul',
								null,
								l.a.createElement(
									'li',
									{ className: 'menu__item-menu' },
									l.a.createElement(
										'a',
										{ href: n, target: 'blanck' },
										l.a.createElement('input', { type: 'button', value: 'Linkedin' })
									)
								),
								l.a.createElement(
									'li',
									{ className: 'menu__item-menu' },
									l.a.createElement(
										'a',
										{ href: r, target: 'blanck' },
										l.a.createElement('input', { type: 'button', value: 'GitHub' })
									)
								)
							)
						)
					);
				},
				u = function (e) {
					var a = Object(n.useState)({ data: null, loading: !0, error: null }),
						t = Object(m.a)(a, 2),
						l = t[0],
						r = t[1];
					return (
						Object(n.useEffect)(
							function () {
								fetch(e)
									.then(function (e) {
										return e.json();
									})
									.then(function (e) {
										r({ loading: !1, error: null, data: e });
									});
							},
							[e]
						),
						l
					);
				},
				s = function () {
					var e = Object(n.useState)({ Linkedin: 'url1', GitHub: 'url2' }),
						a = Object(m.a)(e, 2),
						t = a[0],
						r = a[1],
						c = '',
						s = '',
						d = '',
						E = u('https://backend-curriculum-ronco.herokuapp.com').data;
					return (
						E && ((c = E[0].photo), (s = E[0].linkedin), (d = E[0].github)),
						Object(n.useEffect)(
							function () {
								r({ Linkedin: s, GitHub: d });
							},
							[s, d]
						),
						l.a.createElement('header', null, l.a.createElement(i, { url: c }), l.a.createElement(o, { menuItems: t }))
					);
				},
				d = t(182),
				E = t(179),
				p = t(62),
				_ = t(177),
				b = t(181),
				v = function (e) {
					var a = e.children,
						t = e.value,
						n = e.index,
						r = e.align,
						c = Object(p.a)(e, ['children', 'value', 'index', 'align']);
					return l.a.createElement(
						l.a.Fragment,
						null,
						l.a.createElement(
							'div',
							Object.assign(
								{
									role: 'tabpanel',
									hidden: t !== n,
									id: 'full-width-tabpanel-'.concat(n),
									'aria-labelledby': 'full-width-tab-'.concat(n),
								},
								c,
								{ className: 'animate__animated animate__fadeIn animate__slow' }
							),
							t === n && l.a.createElement(b.a, null, l.a.createElement(_.a, { variant: 'inherit', align: r }, a))
						)
					);
				},
				f = function (e) {
					var a = e.data,
						t = (e.contactData, {});
					return (
						a && (t = a[0]),
						l.a.createElement(
							'div',
							{ className: 'personal__data-card' },
							l.a.createElement('h2', null, 'Informacion personal:'),
							l.a.createElement(
								'div',
								{ className: 'personal__personalData-row' },
								l.a.createElement('h3', null, 'Nombre:'),
								l.a.createElement('p', null, t.name)
							),
							l.a.createElement(
								'div',
								{ className: 'personal__personalData-row' },
								l.a.createElement('h3', null, 'Edad:'),
								l.a.createElement('p', null, t.age)
							),
							l.a.createElement('hr', null),
							l.a.createElement(
								'div',
								{ className: 'personal__personalData-row' },
								l.a.createElement('p', null, t.about)
							),
							l.a.createElement('hr', null),
							l.a.createElement(
								'div',
								{ className: 'personal__personalData-block' },
								l.a.createElement('h3', null, 'Competencias:'),
								l.a.createElement(
									'ul',
									{ className: 'personal__list' },
									t.skills.map(function (e) {
										return l.a.createElement('li', { key: e }, e);
									})
								)
							),
							l.a.createElement(
								'div',
								{ className: 'personal__personalData-block' },
								l.a.createElement('h3', null, 'Idiomas:'),
								l.a.createElement(
									'ul',
									{ className: 'personal__list' },
									t.languages.map(function (e) {
										return l.a.createElement('li', { key: e }, e);
									})
								)
							),
							l.a.createElement(
								'div',
								{ className: 'personal__personalData-block' },
								l.a.createElement('h3', null, 'Herramientas:'),
								l.a.createElement(
									'ul',
									{ className: 'personal__list' },
									t.tools.map(function (e) {
										return l.a.createElement('li', { key: e }, e);
									})
								)
							)
						)
					);
				},
				h = function (e) {
					var a = e.studie,
						t = a.institute,
						n = a.state,
						r = a.level,
						c = a.title;
					return l.a.createElement(
						'div',
						{ className: 'studie__card' },
						l.a.createElement(
							'div',
							{ className: 'studie__card-header' },
							l.a.createElement('h3', { className: 'title' }, c)
						),
						l.a.createElement(
							'div',
							{ className: 'studie__row' },
							l.a.createElement('h4', null, 'Institucion:'),
							l.a.createElement('p', null, ' ', t)
						),
						l.a.createElement(
							'div',
							{ className: 'studie__row' },
							l.a.createElement('h4', null, 'Nivel:'),
							l.a.createElement('p', null, r)
						),
						l.a.createElement(
							'div',
							{ className: 'studie__row' },
							l.a.createElement('h4', null, 'Estado:'),
							l.a.createElement('p', null, n)
						)
					);
				},
				N = function (e) {
					var a = e.data;
					return l.a.createElement(
						l.a.Fragment,
						null,
						a.map(function (e) {
							return l.a.createElement(h, { studie: e, key: e.title });
						})
					);
				},
				g = t(58),
				k = t.n(g),
				y = t(32),
				O = t(39),
				j = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						a = Object(n.useState)(e),
						t = Object(m.a)(a, 2),
						l = t[0],
						r = t[1],
						c = function () {
							r(e);
						},
						i = function (e) {
							var a = e.target;
							r(Object(O.a)(Object(O.a)({}, l), {}, Object(y.a)({}, a.name, a.value)));
						};
					return [l, i, c];
				},
				x = t(26),
				w = t.n(x),
				C = function (e) {
					e.data;
					var a = Object(n.useState)(),
						t = Object(m.a)(a, 2),
						r = t[0],
						c = t[1],
						i = j({ remitentName: '', body: '', remitentEmail: '' }),
						o = Object(m.a)(i, 3),
						u = o[0],
						s = o[1],
						d = o[2],
						E = u.remitentName,
						p = u.body,
						_ = u.remitentEmail,
						b = function () {
							return (
								console.log('validate'),
								k.a.isEmail(_)
									? '' === E
										? (c('Debe ingresar su nombre'), !1)
										: '' === _
										? (c('Debe ingresar un email'), !1)
										: '' !== p || (c('Debe ingresar un mensaje'), !1)
									: (c('No ingreso un mail valido'), !1)
							);
						};
					return l.a.createElement(
						'div',
						{ className: 'contact__data' },
						l.a.createElement(
							'form',
							{
								className: 'contact__form',
								onSubmit: function (e) {
									(e.preventDefault(), b()) &&
										(!(function (e, a) {
											w.a.fire({
												title: 'Enviando',
												text: 'Por favor espere...',
												allowOutsideClick: !1,
												didOpen: function () {
													w.a.showLoading();
												},
											});
											var t = {
												method: 'POST',
												headers: {
													'Content-type': 'application/json',
													authorization: 'c17fb5a54d11675ebd57d8f99bc060d7c79b',
												},
												body: JSON.stringify(e),
											};
											fetch('https://backend-curriculum-ronco.herokuapp.com/'.concat(a), t)
												.then(function (e) {
													return w.a.fire('Enviado!', '', 'success');
												})
												.catch(function (e) {
													console.log(e), w.a.fire('Ocurrio un problema', 'Por favor intente mas tarde', 'error');
												});
										})({ name: E, email: _, body: p }, 'sendEmail'),
										d(),
										c(void 0));
								},
							},
							r &&
								l.a.createElement('div', { className: 'contact__text-input error' }, l.a.createElement('p', null, r)),
							l.a.createElement(
								'div',
								{ className: 'contact__text-input' },
								l.a.createElement('label', { htmlFor: 'remitentName' }, 'Nombre'),
								l.a.createElement('input', {
									type: 'text',
									autoComplete: 'off',
									name: 'remitentName',
									id: 'remitentName',
									onChange: s,
									value: E,
								}),
								l.a.createElement('span', { className: 'contact__separator' }, ' ')
							),
							l.a.createElement(
								'div',
								{ className: 'contact__text-input' },
								l.a.createElement('label', { htmlFor: 'remitentEmail' }, 'Email'),
								l.a.createElement('input', {
									type: 'text',
									autoComplete: 'off',
									name: 'remitentEmail',
									id: 'remitentEmail',
									onChange: s,
									value: _,
								}),
								l.a.createElement('span', { className: 'contact__separator' }, ' ')
							),
							l.a.createElement(
								'div',
								{ className: 'contact__text-input' },
								l.a.createElement('label', { htmlFor: 'body' }, 'Mensaje'),
								l.a.createElement('textarea', {
									type: 'body',
									autoComplete: 'off',
									name: 'body',
									id: 'body',
									onChange: s,
									value: p,
								}),
								l.a.createElement('span', { className: 'contact__separator' }, ' ')
							),
							l.a.createElement('button', { className: 'contact__button' }, 'Enviar!')
						)
					);
				},
				D = t(59),
				S = t.n(D),
				F = t(60),
				I = t.n(F),
				L = t(61),
				H = t.n(L),
				P = t(183),
				G = t(178),
				J = function (e) {
					var a = e.active;
					return l.a.createElement(
						'div',
						{ className: 'loader__container' },
						l.a.createElement(P.a, { open: a }, l.a.createElement(G.a, { color: 'inherit' }))
					);
				},
				A = function () {
					var e = Object(n.useState)(0),
						a = Object(m.a)(e, 2),
						t = a[0],
						r = a[1],
						c = u('https://backend-curriculum-ronco.herokuapp.com/personal_data'),
						i = c.data,
						o = c.loading,
						s = u('https://backend-curriculum-ronco.herokuapp.com/contact'),
						p = s.data,
						_ = s.loading,
						b = u('https://backend-curriculum-ronco.herokuapp.com/academic'),
						h = b.data,
						g = b.loading;
					return l.a.createElement(
						'div',
						{ className: 'content__main-block' },
						l.a.createElement(
							d.a,
							{
								value: t,
								onChange: function (e, a) {
									r(a);
								},
								variant: 'fullWidth',
								indicatorColor: 'primary',
								textColor: 'primary',
								'aria-label': 'icon tabs example',
							},
							l.a.createElement(E.a, {
								label: 'Personal',
								icon: l.a.createElement(S.a, null),
								'aria-label': 'Personal Data',
							}),
							l.a.createElement(E.a, {
								label: 'Estudios',
								icon: l.a.createElement(I.a, null),
								'aria-label': 'Academic',
							}),
							l.a.createElement(E.a, {
								label: 'Contacto',
								icon: l.a.createElement(H.a, null),
								'aria-label': 'Contact Data',
							})
						),
						o && _ && g
							? l.a.createElement(J, { active: !0 })
							: l.a.createElement(
									l.a.Fragment,
									null,
									l.a.createElement(
										v,
										{ value: t, index: 0, align: 'left', className: 'content__tab-panel' },
										o ? l.a.createElement('p', null, 'Loading') : l.a.createElement(f, { data: i })
									),
									l.a.createElement(
										v,
										{ value: t, index: 1, align: 'center', className: 'content__tab-panel' },
										l.a.createElement(N, { data: h })
									),
									l.a.createElement(
										v,
										{ value: t, index: 2, align: 'right', className: 'content__tab-panel' },
										l.a.createElement(C, { data: p })
									)
							  )
					);
				};
			t(155);
			var M = function () {
				return l.a.createElement(
					'div',
					{ className: 'App' },
					l.a.createElement('div', null, l.a.createElement(s, null), l.a.createElement(A, null))
				);
			};
			c.a.render(l.a.createElement(l.a.StrictMode, null, l.a.createElement(M, null)), document.getElementById('root'));
		},
	},
	[[156, 1, 2]],
]);
//# sourceMappingURL=main.4a59a7a3.chunk.js.map
