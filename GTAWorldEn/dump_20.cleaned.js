{
    !function (t) {
        var e = {};
        function i(s) {
            if (e[s]) return e[s].exports;
            var n = e[s] = { i: s, l: false, exports: {} };
            return t[s].call(n.exports, n, n.exports, i), n.l = true, n.exports;
        }
        i.m = t, i.c = e, i.d = function (t, e, s) {
            i.o(t, e) || Object.defineProperty(t, e, { configurable: false, enumerable: true, get: s });
        }, i.r = function (t) {
            Object.defineProperty(t, "__esModule", { value: true });
        }, i.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default;
            } : function () {
                return t;
            };
            return i.d(e, "a", e), e;
        }, i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, i.p = "", i(i.s = 0);
    }([function (t, e, i) {
        "use strict";
        i.r(e);
        var s, n = function () {
            return function (t, e) {
                this.X = 0, this.Y = 0, this.X = t, this.Y = e;
            };
        }(), o = function () {
            return function (t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), this.Width = t, this.Height = e;
            };
        }(), r = function () {
            function t(t, e, i, s) {
                void 0 === s && (s = 255), this.R = t, this.G = e, this.B = i, this.A = s;
            }
            return t.Empty = new t(0, 0, 0, 0), t.Black = new t(0, 0, 0, 255), t.White = new t(255, 255, 255, 255), t.WhiteSmoke = new t(245, 245, 245, 255), t;
        }();
        !function (t) {
            t[t.ChaletLondon = 0] = "ChaletLondon", t[t.HouseScript = 1] = "HouseScript", t[t.Monospace = 2] = "Monospace", t[t.CharletComprimeColonge = 4] = "CharletComprimeColonge", t[t.Pricedown = 7] = "Pricedown";
        }(s || (s = {}));
        var h, a = s, c = function () {
            return function () {
                this.enabled = true;
            };
        }(), u = (h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
            t.__proto__ = e;
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        }, function (t, e) {
            function i() {
                this.constructor = t;
            }
            h(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i);
        }), l = function (t) {
            function e(e, i, s) {
                var n = t.call(this) || this;
                return n.enabled = true, n.pos = e, n.size = i, n.color = s, n;
            }
            return u(e, t), e.prototype.Draw = function (t, e, i) {
                t || (t = new o(0, 0)), e || i || (t = new n(this.pos.X + t.Width, this.pos.Y + t.Height), e = this.size, i = this.color);
                var s = e.Width / 1280, r = e.Height / 720, h = t.X / 1280 + 0.5 * s, a = t.Y / 720 + 0.5 * r;
                mp.game.graphics.drawRect(h, a, s, r, i.R, i.G, i.B, i.A);
            }, e;
        }(c), p = function () {
            var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
                t.__proto__ = e;
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
            return function (e, i) {
                function s() {
                    this.constructor = e;
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s);
            };
        }(), f = function (t) {
            function e(e, i, s) {
                var n = t.call(this, e, i, s) || this;
                return n.Items = [], n;
            }
            return p(e, t), e.prototype.addItem = function (t) {
                this.Items.push(t);
            }, e.prototype.Draw = function (t) {
                if (this.enabled) {
                    t = t || new o;
                    var e = 1080 * (mp.game.resolution.width / mp.game.resolution.height), i = this.size.Width / e, s = this.size.Height / 1080, n = (this.pos.X + t.Width) / e + 0.5 * i, r = (this.pos.Y + t.Height) / 1080 + 0.5 * s;
                    mp.game.graphics.drawRect(n, r, i, s, this.color.R, this.color.G, this.color.B, this.color.A);
                    for (var h = 0, a = this.Items; h < a.length; h++) {
                        a[h].Draw(new o(this.pos.X + t.Width, this.pos.Y + t.Height));
                    }
                }
            }, e;
        }(l), m = function () {
            function t(t, e, i, s, n, o) {
                void 0 === n && (n = 0), void 0 === o && (o = new r(255, 255, 255)), this.TextureDict = t, this.TextureName = e, this.pos = i, this.size = s, this.heading = n, this.color = o, this.visible = true;
            }
            return t.prototype.LoadTextureDictionary = function () {
                mp.game.graphics.requestStreamedTextureDict(this._textureDict, true);
            }, Object.defineProperty(t.prototype, "TextureDict", {
                get: function () {
                    return this._textureDict;
                }, set: function (t) {
                    this._textureDict = t, this.IsTextureDictionaryLoaded || this.LoadTextureDictionary();
                }, enumerable: true, configurable: true
            }), Object.defineProperty(t.prototype, "IsTextureDictionaryLoaded", {
                get: function () {
                    return mp.game.graphics.hasStreamedTextureDictLoaded(this._textureDict);
                }, enumerable: true, configurable: true
            }), t.prototype.Draw = function (t, e, i, s, n, o, r) {
                t = t || this.TextureDict, e = e || this.TextureName, i = i || this.pos, s = s || this.size, n = n || this.heading, o = o || this.color, (r = r || true) && (mp.game.graphics.hasStreamedTextureDictLoaded(t) || mp.game.graphics.requestStreamedTextureDict(t, true));
                var h = 1080 * (mp.game.resolution.width / mp.game.resolution.height), a = this.size.Width / h, c = this.size.Height / 1080, u = this.pos.X / h + 0.5 * a, l = this.pos.Y / 1080 + 0.5 * c;
                mp.game.graphics.drawSprite(t, e, u, l, a, c, n, o.R, o.G, o.B, o.A);
            }, t;
        }(), d = function () {
            var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
                t.__proto__ = e;
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
            return function (e, i) {
                function s() {
                    this.constructor = e;
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s);
            };
        }(), g = function (t) {
            return d(e, t), e.prototype.Draw = function (t, e, i) {
                t || (t = new o), !t || e || i || (t = new n(this.pos.X + t.Width, this.pos.Y + t.Height), e = this.size, i = this.color);
                var s = 1080 * (mp.game.resolution.width / mp.game.resolution.height), r = e.Width / s, h = e.Height / 1080, a = t.X / s + 0.5 * r, c = t.Y / 1080 + 0.5 * h;
                mp.game.graphics.drawRect(a, c, r, h, i.R, i.G, i.B, i.A);
            }, e;
        }(l), _ = function () {
            var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
                t.__proto__ = e;
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
            return function (e, i) {
                function s() {
                    this.constructor = e;
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s);
            };
        }(), I = function (t) {
            function e(e, i, s, n, o, h) {
                var a = t.call(this) || this;
                return a.caption = e, a.pos = i, a.scale = s, a.color = n || new r(255, 255, 255, 255), a.font = o || 0, a.centered = h || false, a;
            }
            return _(e, t), e.prototype.Draw = function (t, e, i, s, o, r) {
                !t || e || i || s || o || r || (e = new n(this.pos.X + t.Width, this.pos.Y + t.Height), i = this.scale, s = this.color, o = this.font, r = this.centered);
                var h = e.X / 1280, a = e.Y / 720;
                mp.game.ui.setTextFont(parseInt(o)), mp.game.ui.setTextScale(i, i), mp.game.ui.setTextColour(s.R, s.G, s.B, s.A), mp.game.ui.setTextCentre(r), mp.game.ui.setTextEntry("STRING"), mp.game.ui.addTextComponentSubstringPlayerName(t), mp.game.ui.drawText(h, a);
            }, e;
        }(c), w = I;
        exports = I;
        var O, x = function () {
            var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
                t.__proto__ = e;
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
            return function (e, i) {
                function s() {
                    this.constructor = e;
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s);
            };
        }();
        !function (t) {
            t[t.Left = 0] = "Left", t[t.Centered = 1] = "Centered", t[t.Right = 2] = "Right";
        }(O || (O = {}));
        var S, M = function (t) {
            function e(e, i, s, n, o, h) {
                var a = t.call(this, e, i, s, n || new r(255, 255, 255), o || 0, false) || this;
                return a.TextAlignment = O.Left, h && (a.TextAlignment = h), a;
            }
            return x(e, t), e.prototype.Draw = function (t, e, i, s, r, h, a, c, u) {
                var l = t, p = h, f = h;
                t || (t = new o(0, 0)), t && !e && (f = this.TextAlignment, l = this.caption, e = new n(this.pos.X + t.Width, this.pos.Y + t.Height), i = this.scale, s = this.color, r = this.font, 1 == p || 0 == p ? p = this.centered : (p = void 0, a = this.DropShadow, c = this.Outline, u = this.WordWrap));
                var m = 1080 * (mp.game.resolution.width / mp.game.resolution.height), d = this.pos.X / m, g = this.pos.Y / 1080;
                if (mp.game.ui.setTextFont(parseInt(r)), mp.game.ui.setTextScale(1, i), mp.game.ui.setTextColour(s.R, s.G, s.B, s.A), void 0 !== p) mp.game.ui.setTextCentre(p); else {
                    switch (a && mp.game.ui.setTextDropshadow(2, 0, 0, 0, 0), c && console.warn("not working!"), f) {
                        case O.Centered:
                            mp.game.ui.setTextCentre(true);
                            break;
                        case O.Right:
                            mp.game.ui.setTextRightJustify(true), mp.game.ui.setTextWrap(0, d);
                    }
                    if (u) {
                        var _ = (this.pos.X + u.Width) / m;
                        mp.game.ui.setTextWrap(d, _);
                    }
                }
                mp.game.ui.setTextEntry("STRING"), mp.game.ui.addTextComponentSubstringPlayerName(l), mp.game.ui.drawText(d, g);
            }, e;
        }(w);
        !function (t) {
            t[t.None = 0] = "None", t[t.BronzeMedal = 1] = "BronzeMedal", t[t.GoldMedal = 2] = "GoldMedal", t[t.SilverMedal = 3] = "SilverMedal", t[t.Alert = 4] = "Alert", t[t.Crown = 5] = "Crown", t[t.Ammo = 6] = "Ammo", t[t.Armour = 7] = "Armour", t[t.Barber = 8] = "Barber", t[t.Clothes = 9] = "Clothes", t[t.Franklin = 10] = "Franklin", t[t.Bike = 11] = "Bike", t[t.Car = 12] = "Car", t[t.Gun = 13] = "Gun", t[t.Heart = 14] = "Heart", t[t.Makeup = 15] = "Makeup", t[t.Mask = 16] = "Mask", t[t.Michael = 17] = "Michael", t[t.Star = 18] = "Star", t[t.Tatoo = 19] = "Tatoo", t[t.Trevor = 20] = "Trevor", t[t.Lock = 21] = "Lock", t[t.Tick = 22] = "Tick";
        }(S || (S = {}));
        var C = S, b = function () {
            function t(e, i) {
                void 0 === i && (i = ""), this.BackColor = t.DefaultBackColor, this.HighlightedBackColor = t.DefaultHighlightedBackColor, this.ForeColor = t.DefaultForeColor, this.HighlightedForeColor = t.DefaultHighlightedForeColor, this.RightLabel = "", this.LeftBadge = C.None, this.RightBadge = C.None, this.Enabled = true, this._rectangle = new g(new n(0, 0), new o(431, 38), new r(150, 0, 0, 0)), this._text = new M(e, new n(8, 0), 0.33, r.WhiteSmoke, a.ChaletLondon, O.Left), this.Description = i, this._selectedSprite = new m("commonmenu", "gradient_nav", new n(0, 0), new o(431, 38)), this._badgeLeft = new m("commonmenu", "", new n(0, 0), new o(40, 40)), this._badgeRight = new m("commonmenu", "", new n(0, 0), new o(40, 40)), this._labelText = new M("", new n(0, 0), 0.35, r.White, 0, O.Right);
            }
            return Object.defineProperty(t.prototype, "Text", {
                get: function () {
                    return this._text.caption;
                }, set: function (t) {
                    this._text.caption = t;
                }, enumerable: true, configurable: true
            }), t.prototype.SetVerticalPosition = function (t) {
                this._rectangle.pos = new n(this.Offset.X, t + 144 + this.Offset.Y), this._selectedSprite.pos = new n(0 + this.Offset.X, t + 144 + this.Offset.Y), this._text.pos = new n(8 + this.Offset.X, t + 147 + this.Offset.Y), this._badgeLeft.pos = new n(0 + this.Offset.X, t + 142 + this.Offset.Y), this._badgeRight.pos = new n(385 + this.Offset.X, t + 142 + this.Offset.Y), this._labelText.pos = new n(420 + this.Offset.X, t + 148 + this.Offset.Y);
            }, t.prototype.Draw = function () {
                this._rectangle.size = new o(431 + this.Parent.WidthOffset, 38), this._selectedSprite.size = new o(431 + this.Parent.WidthOffset, 38), this.Hovered && !this.Selected && (this._rectangle.color = new r(255, 255, 255, 20), this._rectangle.Draw()), this._selectedSprite.color = this.Selected ? this.HighlightedBackColor : this.BackColor, this._selectedSprite.Draw(), this._text.color = this.Enabled ? this.Selected ? this.HighlightedForeColor : this.ForeColor : new r(163, 159, 148), this.LeftBadge != C.None ? (this._text.pos = new n(35 + this.Offset.X, this._text.pos.Y), this._badgeLeft.TextureDict = this.BadgeToSpriteLib(this.LeftBadge), this._badgeLeft.TextureName = this.BadgeToSpriteName(this.LeftBadge, this.Selected), this._badgeLeft.color = this.IsBagdeWhiteSprite(this.LeftBadge) ? this.Enabled ? this.Selected ? this.HighlightedForeColor : this.ForeColor : new r(163, 159, 148) : r.White, this._badgeLeft.Draw()) : this._text.pos = new n(8 + this.Offset.X, this._text.pos.Y), this.RightBadge != C.None && (this._badgeRight.pos = new n(385 + this.Offset.X + this.Parent.WidthOffset, this._badgeRight.pos.Y), this._badgeRight.TextureDict = this.BadgeToSpriteLib(this.RightBadge), this._badgeRight.TextureName = this.BadgeToSpriteName(this.RightBadge, this.Selected), this._badgeRight.color = this.IsBagdeWhiteSprite(this.RightBadge) ? this.Enabled ? this.Selected ? this.HighlightedForeColor : this.ForeColor : new r(163, 159, 148) : r.White, this._badgeRight.Draw()), this.RightLabel && "" !== this.RightLabel && (this._labelText.pos = new n(420 + this.Offset.X + this.Parent.WidthOffset, this._labelText.pos.Y), this._labelText.caption = this.RightLabel, this._labelText.color = this._text.color = this.Enabled ? this.Selected ? this.HighlightedForeColor : this.ForeColor : new r(163, 159, 148), this._labelText.Draw()), this._text.Draw();
            }, t.prototype.SetLeftBadge = function (t) {
                return this.LeftBadge = t, this;
            }, t.prototype.SetRightBadge = function (t) {
                return this.RightBadge = t, this;
            }, t.prototype.SetRightLabel = function (t) {
                return this.RightLabel = t, this;
            }, t.prototype.BadgeToSpriteLib = function (t) {
                return "commonmenu";
            }, t.prototype.BadgeToSpriteName = function (t, e) {
                switch (t) {
                    case C.None:
                        return "";
                    case C.BronzeMedal:
                        return "mp_medal_bronze";
                    case C.GoldMedal:
                        return "mp_medal_gold";
                    case C.SilverMedal:
                        return "medal_silver";
                    case C.Alert:
                        return "mp_alerttriangle";
                    case C.Crown:
                        return "mp_hostcrown";
                    case C.Ammo:
                        return e ? "shop_ammo_icon_b" : "shop_ammo_icon_a";
                    case C.Armour:
                        return e ? "shop_armour_icon_b" : "shop_armour_icon_a";
                    case C.Barber:
                        return e ? "shop_barber_icon_b" : "shop_barber_icon_a";
                    case C.Clothes:
                        return e ? "shop_clothing_icon_b" : "shop_clothing_icon_a";
                    case C.Franklin:
                        return e ? "shop_franklin_icon_b" : "shop_franklin_icon_a";
                    case C.Bike:
                        return e ? "shop_garage_bike_icon_b" : "shop_garage_bike_icon_a";
                    case C.Car:
                        return e ? "shop_garage_icon_b" : "shop_garage_icon_a";
                    case C.Gun:
                        return e ? "shop_gunclub_icon_b" : "shop_gunclub_icon_a";
                    case C.Heart:
                        return e ? "shop_health_icon_b" : "shop_health_icon_a";
                    case C.Lock:
                        return "shop_lock";
                    case C.Makeup:
                        return e ? "shop_makeup_icon_b" : "shop_makeup_icon_a";
                    case C.Mask:
                        return e ? "shop_mask_icon_b" : "shop_mask_icon_a";
                    case C.Michael:
                        return e ? "shop_michael_icon_b" : "shop_michael_icon_a";
                    case C.Star:
                        return "shop_new_star";
                    case C.Tatoo:
                        return e ? "shop_tattoos_icon_b" : "shop_tattoos_icon_";
                    case C.Tick:
                        return "shop_tick_icon";
                    case C.Trevor:
                        return e ? "shop_trevor_icon_b" : "shop_trevor_icon_a";
                    default:
                        return "";
                }
            }, t.prototype.IsBagdeWhiteSprite = function (t) {
                switch (t) {
                    case C.Lock:
                    case C.Tick:
                    case C.Crown:
                        return true;
                    default:
                        return false;
                }
            }, t.prototype.BadgeToColor = function (t, e) {
                switch (t) {
                    case C.Lock:
                    case C.Tick:
                    case C.Crown:
                        return e ? new r(255, 0, 0, 0) : new r(255, 255, 255, 255);
                    default:
                        return new r(255, 255, 255, 255);
                }
            }, t.DefaultBackColor = r.Empty, t.DefaultHighlightedBackColor = r.White, t.DefaultForeColor = r.WhiteSmoke, t.DefaultHighlightedForeColor = r.Black, t;
        }(), y = function () {
            function t() {
                this.handlers = [];
            }
            return t.prototype.on = function (t) {
                this.handlers.push(t);
            }, t.prototype.off = function (t) {
                this.handlers = this.handlers.filter(function (e) {
                    return e !== t;
                });
            }, t.prototype.emit = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.handlers.slice(0).forEach(function (e) {
                    return e.apply(void 0, t);
                });
            }, t.prototype.expose = function () {
                return this;
            }, t;
        }(), v = function () {
            function t() { }
            return t.PlaySound = function (t, e) {
                mp.game.audio.playSound(-1, t, e, false, 0, true);
            }, t;
        }(), D = function () {
            function t() { }
            return t.MeasureString = function (e) {
                for (var i = 0, s = 0, n = e.toString().split(""); s < n.length; s++) {
                    var o = n[s];
                    t.CharMap[o] && (i += t.CharMap[o] + 1);
                }
                return i;
            }, t.CharMap = { " ": 6, "!": 6, '"': 6, "#": 11, $: 10, "%": 17, "&": 13, "'": 4, "(": 6, ")": 6, "*": 7, "+": 10, ",": 4, "-": 6, ".": 4, "/": 7, 0: 12, 1: 7, 2: 11, 3: 11, 4: 11, 5: 11, 6: 12, 7: 10, 8: 11, 9: 11, ":": 5, ";": 4, "<": 9, "=": 9, ">": 9, "?": 10, "@": 15, A: 12, B: 13, C: 14, D: 14, E: 12, F: 12, G: 15, H: 14, I: 5, J: 11, K: 13, L: 11, M: 16, N: 14, O: 16, P: 12, Q: 15, R: 13, S: 12, T: 11, U: 13, V: 12, W: 18, X: 11, Y: 11, Z: 12, "[": 6, "\\": 7, "]": 6, "^": 9, _: 18, "`": 8, a: 11, b: 12, c: 11, d: 12, e: 12, f: 5, g: 13, h: 11, i: 4, j: 4, k: 10, l: 4, m: 18, n: 11, o: 12, p: 12, q: 12, r: 7, s: 9, t: 5, u: 11, v: 10, w: 14, x: 9, y: 10, z: 9, "{": 6, "|": 3, "}": 6 }, t;
        }(), R = function () {
            return function (t, e) {
                void 0 === t && (t = ""), void 0 === e && (e = null), this.DisplayText = t, this.Data = e;
            };
        }(), T = function () {
            function t(t) {
                this.items = t;
            }
            return t.prototype.length = function () {
                return this.items.length;
            }, t.prototype.getListItems = function () {
                for (var t = [], e = 0, i = this.items; e < i.length; e++) {
                    var s = i[e];
                    t.push(new R(s.toString()));
                }
                return t;
            }, t;
        }(), P = function () {
            var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
                t.__proto__ = e;
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
            return function (e, i) {
                function s() {
                    this.constructor = e;
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s);
            };
        }(), L = function (t) {
            function e(e, i, s, h) {
                void 0 === i && (i = ""), void 0 === s && (s = new T([])), void 0 === h && (h = 0);
                var c = t.call(this, e, i) || this;
                c.collection = [], c.ScrollingEnabled = true, c.HoldTimeBeforeScroll = 200, c.OnListChanged = new y, c._index = 0;
                return c.Collection = s.getListItems(), c.Index = h, c._arrowLeft = new m("commonmenu", "arrowleft", new n(110, 105), new o(30, 30)), c._arrowRight = new m("commonmenu", "arrowright", new n(280, 105), new o(30, 30)), c._itemText = new M("", new n(290, 104), 0.35, r.White, a.ChaletLondon, O.Right), c;
            }
            return P(e, t), Object.defineProperty(e.prototype, "Collection", {
                get: function () {
                    return this.collection;
                }, set: function (t) {
                    if (!t) throw new Error("The collection can't be null");
                    this.collection = t;
                }, enumerable: true, configurable: true
            }), Object.defineProperty(e.prototype, "SelectedItem", {
                get: function () {
                    return this.Collection.length > 0 ? this.Collection[this.Index] : null;
                }, enumerable: true, configurable: true
            }), Object.defineProperty(e.prototype, "SelectedValue", {
                get: function () {
                    return null == this.SelectedItem ? null : null == this.SelectedItem.Data ? this.SelectedItem.DisplayText : this.SelectedItem.Data;
                }, enumerable: true, configurable: true
            }), Object.defineProperty(e.prototype, "ListChanged", {
                get: function () {
                    return this.OnListChanged.expose();
                }, enumerable: true, configurable: true
            }), Object.defineProperty(e.prototype, "Index", {
                get: function () {
                    return null == this.Collection ? -1 : null != this.Collection && 0 == this.Collection.length ? -1 : this._index % this.Collection.length;
                }, set: function (t) {
                    null != this.Collection && (null != this.Collection && 0 == this.Collection.length || (this._index = 1e5 - 1e5 % this.Collection.length + t));
                }, enumerable: true, configurable: true
            }), e.prototype.SetVerticalPosition = function (e) {
                this._arrowLeft.pos = new n(300 + this.Offset.X + this.Parent.WidthOffset, 147 + e + this.Offset.Y), this._arrowRight.pos = new n(400 + this.Offset.X + this.Parent.WidthOffset, 147 + e + this.Offset.Y), this._itemText.pos = new n(300 + this.Offset.X + this.Parent.WidthOffset, e + 147 + this.Offset.Y), t.prototype.SetVerticalPosition.call(this, e);
            }, e.prototype.SetRightLabel = function (t) {
                return this;
            }, e.prototype.SetRightBadge = function (t) {
                return this;
            }, e.prototype.Draw = function () {
                t.prototype.Draw.call(this);
                var e = this.Collection.length >= this.Index ? this.Collection[this.Index] ? this.Collection[this.Index].DisplayText : " " : " ", i = D.MeasureString(e);
                this._itemText.color = this.Enabled ? this.Selected ? this.HighlightedForeColor : this.ForeColor : new r(163, 159, 148), this._itemText.caption = e, this._arrowLeft.color = this.Enabled ? this.Selected ? this.HighlightedForeColor : this.ForeColor : new r(163, 159, 148), this._arrowRight.color = this.Enabled ? this.Selected ? this.HighlightedForeColor : this.ForeColor : new r(163, 159, 148), this._arrowLeft.pos = new n(375 - i + this.Offset.X + this.Parent.WidthOffset, this._arrowLeft.pos.Y), this.Selected ? (this._arrowLeft.Draw(), this._arrowRight.Draw(), this._itemText.pos = new n(405 + this.Offset.X + this.Parent.WidthOffset, this._itemText.pos.Y)) : this._itemText.pos = new n(420 + this.Offset.X + this.Parent.WidthOffset, this._itemText.pos.Y), this._itemText.Draw();
            }, e;
        }(b), A = function () {
            var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
                t.__proto__ = e;
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
            return function (e, i) {
                function s() {
                    this.constructor = e;
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s);
            };
        }(), B = function (t) {
            function e(e, i, s) {
                void 0 === i && (i = false), void 0 === s && (s = "");
                var r = t.call(this, e, s) || this;
                r.OnCheckedChanged = new y, r.Checked = false;
                return r._checkedSprite = new m("commonmenu", "shop_box_blank", new n(410, 95), new o(50, 50)), r.Checked = i, r;
            }
            return A(e, t), Object.defineProperty(e.prototype, "CheckedChanged", {
                get: function () {
                    return this.OnCheckedChanged.expose();
                }, enumerable: true, configurable: true
            }), e.prototype.SetVerticalPosition = function (e) {
                t.prototype.SetVerticalPosition.call(this, e), this._checkedSprite.pos = new n(380 + this.Offset.X + this.Parent.WidthOffset, e + 138 + this.Offset.Y);
            }, e.prototype.Draw = function () {
                t.prototype.Draw.call(this), this._checkedSprite.pos = this._checkedSprite.pos = new n(380 + this.Offset.X + this.Parent.WidthOffset, this._checkedSprite.pos.Y);
                var e = this.HighlightedForeColor == b.DefaultHighlightedForeColor;
                this.Selected && e ? this._checkedSprite.TextureName = this.Checked ? "shop_box_tickb" : "shop_box_blankb" : this._checkedSprite.TextureName = this.Checked ? "shop_box_tick" : "shop_box_blank", this._checkedSprite.color = this.Enabled ? this.Selected && !e ? this.HighlightedForeColor : this.ForeColor : new r(163, 159, 148), this._checkedSprite.Draw();
            }, e.prototype.SetRightBadge = function (t) {
                return this;
            }, e.prototype.SetRightLabel = function (t) {
                return this;
            }, e;
        }(b), k = mp.game.graphics.getScreenActiveResolution(0, 0);
        mp.game.resolution = {}, mp.game.resolution.width = k.x, mp.game.resolution.height = k.y;
        var Y = function () {
            function t(t, e, i, s, h) {
                this._activeItem = 1e3, this.extraOffset = 0, this.ParentMenu = null, this.WidthOffset = 0, this.Visible = true, this.MouseControlsEnabled = false, this._justOpened = true, this.safezoneOffset = new n(0, 0), this.MaxItemsOnScreen = 9, this._maxItem = this.MaxItemsOnScreen, this.AUDIO_LIBRARY = "HUD_FRONTEND_DEFAULT_SOUNDSET", this.AUDIO_UPDOWN = "NAV_UP_DOWN", this.AUDIO_LEFTRIGHT = "NAV_LEFT_RIGHT", this.AUDIO_SELECT = "SELECT", this.AUDIO_BACK = "BACK", this.AUDIO_ERROR = "ERROR", this.MenuItems = [], this.onIndexChange = new y, this.onListChange = new y, this.onCheckboxChange = new y, this.onItemSelect = new y, this.onMenuClose = new y, this.onMenuChange = new y, this.MouseEdgeEnabled = true, this.title = t, this.subtitle = e, this.spriteLibrary = s || "commonmenu", this.spriteName = h || "interaction_bgd", this.offset = new n(i.X, i.Y), this._mainMenu = new f(new n(0, 0), new o(700, 500), new r(0, 0, 0, 0)), this._logo = new m(this.spriteLibrary, this.spriteName, new n(0 + this.offset.X, 0 + this.offset.Y), new o(431, 107)), this._mainMenu.addItem(this._title = new M(this.title, new n(215 + this.offset.X, 20 + this.offset.Y), 1.15, new r(255, 255, 255), 1, O.Centered)), "" !== this.subtitle && (this._mainMenu.addItem(new g(new n(0 + this.offset.X, 107 + this.offset.Y), new o(431, 37), new r(0, 0, 0, 255))), this._mainMenu.addItem(this._subtitle = new M(this.subtitle, new n(8 + this.offset.X, 110 + this.offset.Y), 0.35, new r(255, 255, 255), 0, O.Left)), this.extraOffset += 37), this._upAndDownSprite = new m("commonmenu", "shop_arrows_upanddown", new n(190 + this.offset.X, 147 + 37 * (this.MaxItemsOnScreen + 1) + this.offset.Y - 37 + this.extraOffset), new o(50, 50)), this._extraRectangleUp = new g(new n(0 + this.offset.X, 144 + 38 * (this.MaxItemsOnScreen + 1) + this.offset.Y - 37 + this.extraOffset), new o(431, 18), new r(200, 0, 0, 0)), this._extraRectangleDown = new g(new n(0 + this.offset.X, 162 + 38 * (this.MaxItemsOnScreen + 1) + this.offset.Y - 37 + this.extraOffset), new o(431, 18), new r(200, 0, 0, 0)), this._descriptionBar = new g(new n(this.offset.X, 123), new o(431, 4), r.Black), this._descriptionRectangle = new m("commonmenu", "gradient_bgd", new n(this.offset.X, 127), new o(431, 30)), this._descriptionText = new M("Description", new n(this.offset.X + 5, 125), 0.35, new r(255, 255, 255, 255), a.ChaletLondon, O.Left), this._background = new m("commonmenu", "gradient_bgd", new n(this.offset.X, 144 + this.offset.Y - 37 + this.extraOffset), new o(290, 25)), mp.events.add("render", this.render.bind(this)), console.log("Created Native UI! " + this.title);
            }
            return Object.defineProperty(t.prototype, "CurrentSelection", {
                get: function () {
                    return this._activeItem % this.MenuItems.length;
                }, set: function (t) {
                    this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false, this._activeItem = 1e3 - 1e3 % this.MenuItems.length + t, this.CurrentSelection > this._maxItem ? (this._maxItem = this.CurrentSelection, this._minItem = this.CurrentSelection - this.MaxItemsOnScreen) : this.CurrentSelection < this._minItem && (this._maxItem = this.MaxItemsOnScreen + this.CurrentSelection, this._minItem = this.CurrentSelection);
                }, enumerable: true, configurable: true
            }), Object.defineProperty(t.prototype, "IndexChange", {
                get: function () {
                    return this.onIndexChange.expose();
                }, enumerable: true, configurable: true
            }), Object.defineProperty(t.prototype, "ListChange", {
                get: function () {
                    return this.onListChange.expose();
                }, enumerable: true, configurable: true
            }), Object.defineProperty(t.prototype, "CheckboxChange", {
                get: function () {
                    return this.onCheckboxChange.expose();
                }, enumerable: true, configurable: true
            }), Object.defineProperty(t.prototype, "ItemSelect", {
                get: function () {
                    return this.onItemSelect.expose();
                }, enumerable: true, configurable: true
            }), Object.defineProperty(t.prototype, "MenuClose", {
                get: function () {
                    return this.onMenuClose.expose();
                }, enumerable: true, configurable: true
            }), Object.defineProperty(t.prototype, "MenuChange", {
                get: function () {
                    return this.onMenuChange.expose();
                }, enumerable: true, configurable: true
            }), t.prototype.RecalculateDescriptionPosition = function () {
                this._descriptionBar.pos = new n(this.offset.X, 112 + this.extraOffset + this.offset.Y), this._descriptionRectangle.pos = new n(this.offset.X, 112 + this.extraOffset + this.offset.Y), this._descriptionText.pos = new n(this.offset.X + 8, 118 + this.extraOffset + this.offset.Y), this._descriptionBar.size = new o(431 + this.WidthOffset, 4), this._descriptionRectangle.size = new o(431 + this.WidthOffset, 30);
                var t = this.MenuItems.length;
                t > this.MaxItemsOnScreen + 1 && (t = this.MaxItemsOnScreen + 2), this._descriptionBar.pos = new n(this.offset.X, 38 * t + this._descriptionBar.pos.Y), this._descriptionRectangle.pos = new n(this.offset.X, 38 * t + this._descriptionRectangle.pos.Y), this._descriptionText.pos = new n(this.offset.X + 8, 38 * t + this._descriptionText.pos.Y);
            }, t.prototype.SetMenuWidthOffset = function (t) {
                (this.WidthOffset = t, null != this._logo && (this._logo.size = new o(431 + this.WidthOffset, 107)), this._mainMenu.Items[0].pos = new n((this.WidthOffset + this.offset.X + 431) / 2, 20 + this.offset.Y), this._mainMenu.Items.length >= 2) && (this._mainMenu.Items[1].size = new o(431 + this.WidthOffset, 37));
            }, t.prototype.AddItem = function (t) {
                this._justOpened && (this._justOpened = false), t.Offset = this.offset, t.Parent = this, t.SetVerticalPosition(25 * this.MenuItems.length - 37 + this.extraOffset), this.MenuItems.push(t), this.RefreshIndex(), this.RecalculateDescriptionPosition();
            }, t.prototype.RefreshIndex = function () {
                if (0 == this.MenuItems.length) return this._activeItem = 1e3, this._maxItem = this.MaxItemsOnScreen, void (this._minItem = 0);
                for (var t = 0; t < this.MenuItems.length; t++) this.MenuItems[t].Selected = false;
                this._activeItem = 1e3 - 1e3 % this.MenuItems.length, this._maxItem = this.MaxItemsOnScreen, this._minItem = 0;
            }, t.prototype.Clear = function () {
                this.MenuItems = [], this.RecalculateDescriptionPosition();
            }, t.prototype.Open = function () {
                v.PlaySound(this.AUDIO_BACK, this.AUDIO_LIBRARY), this.Visible = true;
            }, t.prototype.Close = function () {
                v.PlaySound(this.AUDIO_BACK, this.AUDIO_LIBRARY), this.Visible = false, this.onMenuClose.emit();
            }, t.prototype.GoLeft = function () {
                if (this.MenuItems[this.CurrentSelection] instanceof L) {
                    var t = this.MenuItems[this.CurrentSelection];
                    0 != t.Collection.length && (t.Index--, v.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY), this.onListChange.emit(t, t.Index));
                }
            }, t.prototype.GoRight = function () {
                if (this.MenuItems[this.CurrentSelection] instanceof L) {
                    var t = this.MenuItems[this.CurrentSelection];
                    0 != t.Collection.length && (t.Index++, v.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY), this.onListChange.emit(t, t.Index));
                }
            }, t.prototype.SelectItem = function () {
                if (this.MenuItems[this.CurrentSelection].Enabled) if (this.MenuItems[this.CurrentSelection] instanceof B) {
                    var t = this.MenuItems[this.CurrentSelection];
                    t.Checked = !t.Checked, v.PlaySound(this.AUDIO_SELECT, this.AUDIO_LIBRARY), this.onCheckboxChange.emit(t, t.Checked);
                } else v.PlaySound(this.AUDIO_SELECT, this.AUDIO_LIBRARY), this.onItemSelect.emit(this.MenuItems[this.CurrentSelection], this.CurrentSelection); else v.PlaySound(this.AUDIO_ERROR, this.AUDIO_LIBRARY);
            }, t.prototype.getMousePosition = function (t) {
                void 0 === t && (t = false);
                var e, i = mp.game.resolution.width, s = mp.game.resolution.height, n = mp.gui.cursor.position, o = [n[0], n[1]], r = o[0], h = o[1];
                return t && (r = (e = [n[0] / i, n[1] / s])[0], h = e[1]), [r, h];
            }, t.prototype.GetScreenResolutionMantainRatio = function () {
                var t = mp.game.resolution.width, e = mp.game.resolution.height;
                return new o(1080 * (t / e), 1080);
            }, t.prototype.IsMouseInBounds = function (t, e) {
                this.GetScreenResolutionMantainRatio();
                var i = this.getMousePosition(), s = i[0], n = i[1];
                return s >= t.X && s <= t.X + e.Width && n > t.Y && n < t.Y + e.Height;
            }, t.prototype.IsMouseInListItemArrows = function (t, e, i) {
                mp.game.invoke("0x54ce8ac98e120cab".toUpperCase(), "jamyfafi"), mp.game.ui.addTextComponentSubstringPlayerName(t.Text);
                var s = this.GetScreenResolutionMantainRatio(), r = 1080 * (s.Width / s.Height), h = 5 + mp.game.invoke("0x85f061da64ed2f67".toUpperCase(), 0) * r * 0.35 + 10, a = 431 - h;
                return this.IsMouseInBounds(e, new o(h, 38)) ? 1 : this.IsMouseInBounds(new n(e.X + h, e.Y), new o(a, 38)) ? 2 : 0;
            }, t.prototype.ProcessMouse = function () {
                if (this.Visible && !this._justOpened && 0 != this.MenuItems.length && this.MouseControlsEnabled) {
                    mp.gui.cursor.visible || (mp.gui.cursor.visible = true);
                    var t = this.MenuItems.length - 1, e = 0;
                    this.MenuItems.length > this.MaxItemsOnScreen + 1 && (t = this._maxItem), this.IsMouseInBounds(new n(0, 0), new o(30, 1080)) && this.MouseEdgeEnabled ? (mp.game.cam.setGameplayCamRelativeHeading(mp.game.cam.getGameplayCamRelativeHeading() + 5), mp.game.ui.setCursorSprite(6)) : this.IsMouseInBounds(new n(this.GetScreenResolutionMantainRatio().Width - 30, 0), new o(30, 1080)) && this.MouseEdgeEnabled ? (mp.game.cam.setGameplayCamRelativeHeading(mp.game.cam.getGameplayCamRelativeHeading() - 5), mp.game.ui.setCursorSprite(7)) : this.MouseEdgeEnabled && mp.game.ui.setCursorSprite(1);
                    for (var i = this._minItem; i <= t; i++) {
                        var s = this.offset.X, h = this.offset.Y + 144 - 37 + this.extraOffset + 38 * e, a = 431 + this.WidthOffset, c = this.MenuItems[i];
                        if (this.IsMouseInBounds(new n(s, h), new o(a, 38))) {
                            if (c.Hovered = true, mp.game.controls.isControlJustPressed(0, 24) || mp.game.controls.isDisabledControlJustPressed(0, 24)) if (c.Selected && c.Enabled) {
                                if (this.MenuItems[i] instanceof L && this.IsMouseInListItemArrows(this.MenuItems[i], new n(s, h), 0) > 0) switch (this.IsMouseInListItemArrows(this.MenuItems[i], new n(s, h), 0)) {
                                    case 1:
                                        v.PlaySound(this.AUDIO_SELECT, this.AUDIO_LIBRARY), this.onItemSelect.emit(this.MenuItems[i], i);
                                        break;
                                    case 2:
                                        var u = this.MenuItems[i];
                                        (null == u.Collection ? u.Items.Count : u.Collection.Count) > 0 && (u.Index++, v.PlaySound(this.AUDIO_LEFTRIGHT, this.AUDIO_LIBRARY), this.onListChange.emit(u, u.Index));
                                } else this.SelectItem();
                            } else c.Selected ? !c.Enabled && c.Selected && v.PlaySound(this.AUDIO_ERROR, this.AUDIO_LIBRARY) : (this.CurrentSelection = i, v.PlaySound(this.AUDIO_UPDOWN, this.AUDIO_LIBRARY), this.onIndexChange.emit(this.CurrentSelection), this.SelectItem());
                        } else c.Hovered = false;
                        e++;
                    }
                    var l = 144 + 38 * (this.MaxItemsOnScreen + 1) + this.offset.Y - 37 + this.extraOffset + this.safezoneOffset.Y, p = this.safezoneOffset.X + this.offset.X;
                    this.MenuItems.length <= this.MaxItemsOnScreen + 1 || (this.IsMouseInBounds(new n(p, l), new o(431 + this.WidthOffset, 18)) ? (this._extraRectangleUp.color = new r(255, 30, 30, 30), (mp.game.controls.isControlJustPressed(0, 24) || mp.game.controls.isDisabledControlJustPressed(0, 24)) && (this.MenuItems.length > this.MaxItemsOnScreen + 1 ? this.GoUpOverflow() : this.GoUp())) : this._extraRectangleUp.color = new r(200, 0, 0, 0), this.IsMouseInBounds(new n(p, l + 18), new o(431 + this.WidthOffset, 18)) ? (this._extraRectangleDown.color = new r(255, 30, 30, 30), (mp.game.controls.isControlJustPressed(0, 24) || mp.game.controls.isDisabledControlJustPressed(0, 24)) && (this.MenuItems.length > this.MaxItemsOnScreen + 1 ? this.GoDownOverflow() : this.GoDown())) : this._extraRectangleDown.color = new r(200, 0, 0, 0));
                } else this.MenuItems.filter(function (t) {
                    return t.Hovered;
                }).forEach(function (t) {
                    return t.Hovered = false;
                });
            }, t.prototype.ProcessControl = function () {
                this.Visible && (this._justOpened ? this._justOpened = false : (mp.game.controls.isControlJustReleased(0, 177) && this.GoBack(), 0 != this.MenuItems.length && (mp.game.controls.isControlJustPressed(0, 172) ? this.MenuItems.length > this.MaxItemsOnScreen + 1 ? this.GoUpOverflow() : this.GoUp() : mp.game.controls.isControlJustPressed(0, 173) ? this.MenuItems.length > this.MaxItemsOnScreen + 1 ? this.GoDownOverflow() : this.GoDown() : mp.game.controls.isControlJustPressed(0, 174) ? this.GoLeft() : mp.game.controls.isControlJustPressed(0, 175) ? this.GoRight() : mp.game.controls.isControlJustPressed(0, 201) && this.SelectItem())));
            }, t.prototype.FormatDescription = function (t) {
                for (var e = 425 + this.WidthOffset, i = 0, s = "", n = 0, o = t.split(" "); n < o.length; n++) {
                    var r = o[n], h = D.MeasureString(r);
                    (i += h) > e ? (s += "\n" + r + " ", i = h + D.MeasureString(" ")) : (s += r + " ", i += D.MeasureString(" "));
                }
                return s;
            }, t.prototype.GoUpOverflow = function () {
                this.MenuItems.length <= this.MaxItemsOnScreen + 1 || (this._activeItem % this.MenuItems.length <= this._minItem ? this._activeItem % this.MenuItems.length == 0 ? (this._minItem = this.MenuItems.length - this.MaxItemsOnScreen - 1, this._maxItem = this.MenuItems.length - 1, this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false, this._activeItem = 1e3 - 1e3 % this.MenuItems.length, this._activeItem += this.MenuItems.length - 1, this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true) : (this._minItem--, this._maxItem--, this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false, this._activeItem--, this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true) : (this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false, this._activeItem--, this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true), v.PlaySound(this.AUDIO_UPDOWN, this.AUDIO_LIBRARY), this.onIndexChange.emit(this.CurrentSelection));
            }, t.prototype.GoUp = function () {
                this.MenuItems.length > this.MaxItemsOnScreen + 1 || (this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false, this._activeItem--, this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true, v.PlaySound(this.AUDIO_UPDOWN, this.AUDIO_LIBRARY), this.onIndexChange.emit(this.CurrentSelection));
            }, t.prototype.GoDownOverflow = function () {
                this.MenuItems.length <= this.MaxItemsOnScreen + 1 || (this._activeItem % this.MenuItems.length >= this._maxItem ? this._activeItem % this.MenuItems.length == this.MenuItems.length - 1 ? (this._minItem = 0, this._maxItem = this.MaxItemsOnScreen, this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false, this._activeItem = 1e3 - 1e3 % this.MenuItems.length, this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true) : (this._minItem++, this._maxItem++, this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false, this._activeItem++, this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true) : (this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false, this._activeItem++, this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true), v.PlaySound(this.AUDIO_UPDOWN, this.AUDIO_LIBRARY), this.onIndexChange.emit(this.CurrentSelection));
            }, t.prototype.GoDown = function () {
                this.MenuItems.length > this.MaxItemsOnScreen + 1 || (this.MenuItems[this._activeItem % this.MenuItems.length].Selected = false, this._activeItem++, this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true, v.PlaySound(this.AUDIO_UPDOWN, this.AUDIO_LIBRARY), this.onIndexChange.emit(this.CurrentSelection));
            }, t.prototype.GoBack = function () {
                v.PlaySound(this.AUDIO_BACK, this.AUDIO_LIBRARY), this.Visible = false, null != this.ParentMenu && (this.ParentMenu.Visible = true, this.onMenuChange.emit(this.ParentMenu, false)), this.onMenuClose.emit();
            }, t.prototype.render = function () {
                if (this.Visible) {
                    if (this._justOpened && (null == this._logo || this._logo.IsTextureDictionaryLoaded || this._logo.LoadTextureDictionary(), this._background.IsTextureDictionaryLoaded || this._background.LoadTextureDictionary(), this._descriptionRectangle.IsTextureDictionaryLoaded || this._descriptionRectangle.LoadTextureDictionary(), this._upAndDownSprite.IsTextureDictionaryLoaded || this._upAndDownSprite.LoadTextureDictionary()), this._mainMenu.Draw(), this.ProcessMouse(), this.ProcessControl(), this._background.size = this.MenuItems.length > this.MaxItemsOnScreen + 1 ? new o(431 + this.WidthOffset, 38 * (this.MaxItemsOnScreen + 1)) : new o(431 + this.WidthOffset, 38 * this.MenuItems.length), this._background.Draw(), this.MenuItems[this._activeItem % this.MenuItems.length].Selected = true, "" !== this.MenuItems[this._activeItem % this.MenuItems.length].Description) {
                        this.RecalculateDescriptionPosition();
                        var t = this.MenuItems[this._activeItem % this.MenuItems.length].Description;
                        t = this.FormatDescription(t), this._descriptionText.caption = t;
                        var e = this._descriptionText.caption.split("\n").length;
                        this._descriptionRectangle.size = new o(431 + this.WidthOffset, 25 * e + 15), this._descriptionBar.Draw(), this._descriptionRectangle.Draw(), this._descriptionText.Draw();
                    }
                    if (this.MenuItems.length <= this.MaxItemsOnScreen + 1) for (var i = 0, s = 0, r = this.MenuItems; s < r.length; s++) {
                        var h = r[s];
                        h.SetVerticalPosition(38 * i - 37 + this.extraOffset), h.Draw(), i++;
                    } else {
                        i = 0;
                        for (var a = this._minItem; a <= this._maxItem; a++) {
                            var c = this.MenuItems[a];
                            c.SetVerticalPosition(38 * i - 37 + this.extraOffset), c.Draw(), i++;
                        }
                        this._extraRectangleUp.size = new o(431 + this.WidthOffset, 18), this._extraRectangleDown.size = new o(431 + this.WidthOffset, 18), this._upAndDownSprite.pos = new n(190 + this.offset.X + this.WidthOffset / 2, 147 + 37 * (this.MaxItemsOnScreen + 1) + this.offset.Y - 37 + this.extraOffset), this._extraRectangleUp.Draw(), this._extraRectangleDown.Draw(), this._upAndDownSprite.Draw();
                    }
                    this._logo.Draw();
                }
            }, t;
        }();
        e.default = Y;
        exports.Menu = Y, exports.UIMenuItem = b, exports.UIMenuListItem = L, exports.UIMenuCheckboxItem = B, exports.BadgeStyle = C, exports.Point = n, exports.Size = o, exports.Color = r, exports.Font = a, exports.ItemsCollection = T;
    }]);
}