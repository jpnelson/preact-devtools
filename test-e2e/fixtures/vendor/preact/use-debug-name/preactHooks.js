!(function (n, t) {
	"object" == typeof exports && "undefined" != typeof module
		? t(exports, require("preact"))
		: "function" == typeof define && define.amd
		? define(["exports", "preact"], t)
		: t((n.preactHooks = {}), n.preact);
})(this, function (n, t) {
	var u,
		o,
		i,
		r = 0,
		c = [],
		f = t.options.__b,
		e = t.options.__r,
		a = t.options.diffed,
		v = t.options.__c,
		p = t.options.unmount;
	function m(n, u) {
		t.options.__h && t.options.__h(o, n, r || u), (r = 0);
		var i = o.__H || (o.__H = { __: [], __h: [] });
		return n >= i.__.length && i.__.push({}), i.__[n];
	}
	function y(n) {
		return (r = 1), d(F, n);
	}
	function d(n, t, i) {
		var r = m(u++, 2);
		return (
			(r.t = n),
			r.__c ||
				((r.__ = [
					(i = i ? i(t) : F(void 0, t)),
					function (n) {
						var t = r.t(r.__[0], n);
						r.__[0] !== t &&
							t !== r.__[2] &&
							((r.__ = [t, r.__[1]]),
							r.__c.setState({}, function () {
								r.__[2] = t;
							}));
					},
					i,
				]),
				(r.__c = o)),
			r.__
		);
	}
	function l(n, i) {
		var r = m(u++, 4);
		!t.options.__s && A(r.__H, i) && ((r.__ = n), (r.__H = i), o.__h.push(r));
	}
	function s(n, t) {
		var o = m(u++, 7);
		return A(o.__H, t) && ((o.__ = n()), (o.__H = t), (o.__h = n)), o.__;
	}
	function h() {
		c.forEach(function (n) {
			if (n.__P)
				try {
					n.__H.__h.forEach(q), n.__H.__h.forEach(x), (n.__H.__h = []);
				} catch (u) {
					(n.__H.__h = []), t.options.__e(u, n.__v);
				}
		}),
			(c = []);
	}
	(t.options.__b = function (n) {
		(o = null), f && f(n);
	}),
		(t.options.__r = function (n) {
			e && e(n), (u = 0);
			var t = (o = n.__c).__H;
			t && (t.__h.forEach(q), t.__h.forEach(x), (t.__h = []));
		}),
		(t.options.diffed = function (n) {
			a && a(n);
			var u = n.__c;
			u &&
				u.__H &&
				u.__H.__h.length &&
				((1 !== c.push(u) && i === t.options.requestAnimationFrame) ||
					(
						(i = t.options.requestAnimationFrame) ||
						function (n) {
							var t,
								u = function () {
									clearTimeout(o), _ && cancelAnimationFrame(t), setTimeout(n);
								},
								o = setTimeout(u, 100);
							_ && (t = requestAnimationFrame(u));
						}
					)(h)),
				(o = void 0);
		}),
		(t.options.__c = function (n, u) {
			u.some(function (n) {
				try {
					n.__h.forEach(q),
						(n.__h = n.__h.filter(function (n) {
							return !n.__ || x(n);
						}));
				} catch (o) {
					u.some(function (n) {
						n.__h && (n.__h = []);
					}),
						(u = []),
						t.options.__e(o, n.__v);
				}
			}),
				v && v(n, u);
		}),
		(t.options.unmount = function (n) {
			p && p(n);
			var u = n.__c;
			if (u && u.__H)
				try {
					u.__H.__.forEach(q);
				} catch (n) {
					t.options.__e(n, u.__v);
				}
		});
	var _ = "function" == typeof requestAnimationFrame;
	function q(n) {
		var t = o;
		"function" == typeof n.__c && n.__c(), (o = t);
	}
	function x(n) {
		var t = o;
		(n.__c = n.__()), (o = t);
	}
	function A(n, t) {
		return (
			!n ||
			n.length !== t.length ||
			t.some(function (t, u) {
				return t !== n[u];
			})
		);
	}
	function F(n, t) {
		return "function" == typeof t ? t(n) : t;
	}
	(n.useState = y),
		(n.useReducer = d),
		(n.useEffect = function (n, i) {
			var r = m(u++, 3);
			!t.options.__s &&
				A(r.__H, i) &&
				((r.__ = n), (r.__H = i), o.__H.__h.push(r));
		}),
		(n.useLayoutEffect = l),
		(n.useRef = function (n) {
			return (
				(r = 5),
				s(function () {
					return { current: n };
				}, [])
			);
		}),
		(n.useImperativeHandle = function (n, t, u) {
			(r = 6),
				l(
					function () {
						"function" == typeof n ? n(t()) : n && (n.current = t());
					},
					null == u ? u : u.concat(n),
				);
		}),
		(n.useMemo = s),
		(n.useCallback = function (n, t) {
			return (
				(r = 8),
				s(function () {
					return n;
				}, t)
			);
		}),
		(n.useContext = function (n) {
			var t = o.context[n.__c],
				i = m(u++, 9);
			return (
				(i.__c = n),
				t ? (null == i.__ && ((i.__ = !0), t.sub(o)), t.props.value) : n.__
			);
		}),
		(n.useDebugValue = function (n, u) {
			t.options.useDebugValue && t.options.useDebugValue(u ? u(n) : n);
		}),
		(n.useErrorBoundary = function (n) {
			var t = m(u++, 10),
				i = y();
			return (
				(t.__ = n),
				o.componentDidCatch ||
					(o.componentDidCatch = function (n) {
						t.__ && t.__(n), i[1](n);
					}),
				[
					i[0],
					function () {
						i[1](void 0);
					},
				]
			);
		});
});
//# sourceMappingURL=hooks.umd.js.map
