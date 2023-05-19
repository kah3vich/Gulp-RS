/*! For license information please see main.js.LICENSE.txt */
!(function () {
	const o = {
		'./src/components/Footer/script.js': function (o, n, r) {
			r.r(n),
				r.d(n, {
					Footer() {
						return e;
					},
				});
			var e = function () {};
		},
		'./src/components/Header/script.js': function (o, n, r) {
			r.r(n),
				r.d(n, {
					Header() {
						return e;
					},
				});
			var e = function () {};
		},
		'./src/components/Modals/script.js': function (o, n, r) {
			r.r(n),
				r.d(n, {
					Modals() {
						return e;
					},
				});
			var e = function () {};
		},
		'./src/components/pages/Welcome/script.js': function (o, n, r) {
			r.r(n),
				r.d(n, {
					Welcome() {
						return e;
					},
				});
			var e = function () {
				console.log('🌠 Gulp RS');
			};
		},
		'./src/components/scripts.js': function (o, n, r) {
			r.r(n),
				r.d(n, {
					Footer() {
						return t.Footer;
					},
					Header() {
						return e.Header;
					},
					Modals() {
						return s.Modals;
					},
					Welcome() {
						return c.Welcome;
					},
				});
			var e = r('./src/components/Header/script.js');
			var t = r('./src/components/Footer/script.js');
			var c = r('./src/components/pages/Welcome/script.js');
			var s = r('./src/components/Modals/script.js');
		},
	};
	const n = {};
	function r(e) {
		const t = n[e];
		if (void 0 !== t) return t.exports;
		const c = (n[e] = { exports: {} });
		return o[e](c, c.exports, r), c.exports;
	}
	(r.d = function (o, n) {
		for (const e in n)
			r.o(n, e) && !r.o(o, e) && Object.defineProperty(o, e, { enumerable: !0, get: n[e] });
	}),
		(r.o = function (o, n) {
			return Object.prototype.hasOwnProperty.call(o, n);
		}),
		(r.r = function (o) {
			typeof Symbol !== 'undefined' &&
				Symbol.toStringTag &&
				Object.defineProperty(o, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(o, '__esModule', { value: !0 });
		});
	const e = {};
	!(function () {
		r.r(e);
		const o = r('./src/components/scripts.js');
		$(() => {
			(0, o.Header)(), (0, o.Footer)(), (0, o.Welcome)(), (0, o.Modals)();
		});
	})();
})();
//# sourceMappingURL=main.js.map
