var RiotTrello = (function () {
	'use strict';

	function noop() {}

	function assign(tar, src) {
		for (var k in src) tar[k] = src[k];
		return tar;
	}

	function assignTrue(tar, src) {
		for (var k in src) tar[k] = 1;
		return tar;
	}

	function isPromise(value) {
		return value && typeof value.then === 'function';
	}

	function append(target, node) {
		target.appendChild(node);
	}

	function insert(target, node, anchor) {
		target.insertBefore(node, anchor);
	}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function destroyEach(iterations, detach) {
		for (var i = 0; i < iterations.length; i += 1) {
			if (iterations[i]) iterations[i].d(detach);
		}
	}

	function createElement(name) {
		return document.createElement(name);
	}

	function createText(data) {
		return document.createTextNode(data);
	}

	function createComment() {
		return document.createComment('');
	}

	function addListener(node, event, handler) {
		node.addEventListener(event, handler, false);
	}

	function removeListener(node, event, handler) {
		node.removeEventListener(event, handler, false);
	}

	function setData(text, data) {
		text.data = '' + data;
	}

	function setStyle(node, key, value) {
		node.style.setProperty(key, value);
	}

	function handlePromise(promise, info) {
		var token = info.token = {};

		function update(type, index, key, value) {
			if (info.token !== token) return;

			info.resolved = key && { [key]: value };

			const child_ctx = assign(assign({}, info.ctx), info.resolved);
			const block = type && (info.current = type)(info.component, child_ctx);

			if (info.block) {
				if (info.blocks) {
					info.blocks.forEach((block, i) => {
						if (i !== index && block) {
							block.o(() => {
								block.d(1);
								info.blocks[i] = null;
							});
						}
					});
				} else {
					info.block.d(1);
				}

				block.c();
				block[block.i ? 'i' : 'm'](info.mount(), info.anchor);

				info.component.root.set({}); // flush any handlers that were created
			}

			info.block = block;
			if (info.blocks) info.blocks[index] = block;
		}

		if (isPromise(promise)) {
			promise.then(value => {
				update(info.then, 1, info.value, value);
			}, error => {
				update(info.catch, 2, info.error, error);
			});

			// if we previously had a then/catch block, destroy it
			if (info.current !== info.pending) {
				update(info.pending, 0);
				return true;
			}
		} else {
			if (info.current !== info.then) {
				update(info.then, 1, info.value, promise);
				return true;
			}

			info.resolved = { [info.value]: promise };
		}
	}

	function blankObject() {
		return Object.create(null);
	}

	function destroy(detach) {
		this.destroy = noop;
		this.fire('destroy');
		this.set = noop;

		this._fragment.d(detach !== false);
		this._fragment = null;
		this._state = {};
	}

	function _differs(a, b) {
		return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
	}

	function fire(eventName, data) {
		var handlers =
			eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			var handler = handlers[i];

			if (!handler.__calling) {
				try {
					handler.__calling = true;
					handler.call(this, data);
				} finally {
					handler.__calling = false;
				}
			}
		}
	}

	function flush(component) {
		component._lock = true;
		callAll(component._beforecreate);
		callAll(component._oncreate);
		callAll(component._aftercreate);
		component._lock = false;
	}

	function get() {
		return this._state;
	}

	function init(component, options) {
		component._handlers = blankObject();
		component._slots = blankObject();
		component._bind = options._bind;
		component._staged = {};

		component.options = options;
		component.root = options.root || component;
		component.store = options.store || component.root.store;

		if (!options.root) {
			component._beforecreate = [];
			component._oncreate = [];
			component._aftercreate = [];
		}
	}

	function on(eventName, handler) {
		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	}

	function set(newState) {
		this._set(assign({}, newState));
		if (this.root._lock) return;
		flush(this.root);
	}

	function _set(newState) {
		var oldState = this._state,
			changed = {},
			dirty = false;

		newState = assign(this._staged, newState);
		this._staged = {};

		for (var key in newState) {
			if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
		}
		if (!dirty) return;

		this._state = assign(assign({}, oldState), newState);
		this._recompute(changed, this._state);
		if (this._bind) this._bind(changed, this._state);

		if (this._fragment) {
			this.fire("state", { changed: changed, current: this._state, previous: oldState });
			this._fragment.p(changed, this._state);
			this.fire("update", { changed: changed, current: this._state, previous: oldState });
		}
	}

	function _stage(newState) {
		assign(this._staged, newState);
	}

	function callAll(fns) {
		while (fns && fns.length) fns.shift()();
	}

	function _mount(target, anchor) {
		this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
	}

	var proto = {
		destroy,
		get,
		fire,
		on,
		set,
		_recompute: noop,
		_set,
		_stage,
		_mount,
		_differs
	};

	/* src\List.html generated by Svelte v2.13.5 */

	function data(){
		return {
			closed: false,
		}
	}
	var methods = {
		toggleEvent(e){
			let {closed} = this.get();
			console.log(e);
			
			this.set({closed: !closed});
			console.log(closed);
		},
	};

	function oncreate(){
		//console.log(this.get().data);
	}
	function add_css() {
		var style = createElement("style");
		style.id = 'svelte-1hrijv-style';
		style.textContent = ".card.svelte-1hrijv{margin-bottom:10px;position:relative}.card-label.svelte-1hrijv{width:10px;height:50%;position:absolute;left:30px;top:25%;border-radius:50%}.list-title.svelte-1hrijv{color:white;background-color:#205c7e;border-radius:50px;height:40px;position:relative}";
		append(document.head, style);
	}

	function create_main_fragment(component, ctx) {
		var div, div_1, div_2, text_value = ctx.closed ? '+' : '-', text, text_2, h2, text_3_value = ctx.data.name, text_3, text_5;

		function click_handler(event) {
			component.toggleEvent(event);
		}

		var each_value = ctx.data.cards;

		var each_blocks = [];

		for (var i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block(component, get_each_context(ctx, each_value, i));
		}

		return {
			c() {
				div = createElement("div");
				div_1 = createElement("div");
				div_2 = createElement("div");
				text = createText(text_value);
				text_2 = createText("\r\n\t\t");
				h2 = createElement("h2");
				text_3 = createText(text_3_value);
				text_5 = createText("\r\n\t");

				for (var i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}
				addListener(div_2, "click", click_handler);
				setStyle(div_2, "height", "40px");
				setStyle(div_2, "width", "40px");
				setStyle(div_2, "user-select", "none");
				setStyle(div_2, "line-height", "40px");
				setStyle(div_2, "font-size", "30px");
				setStyle(div_2, "vertical-align", "top");
				setStyle(div_2, "position", "absolute");
				setStyle(div_2, "top", "0px");
				setStyle(div_2, "left", "10px");
				setStyle(h2, "margin", "0px");
				div_1.className = "list-title svelte-1hrijv";
			},

			m(target, anchor) {
				insert(target, div, anchor);
				append(div, div_1);
				append(div_1, div_2);
				append(div_2, text);
				append(div_1, text_2);
				append(div_1, h2);
				append(h2, text_3);
				append(div, text_5);

				for (var i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(div, null);
				}
			},

			p(changed, ctx) {
				if ((changed.closed) && text_value !== (text_value = ctx.closed ? '+' : '-')) {
					setData(text, text_value);
				}

				if ((changed.data) && text_3_value !== (text_3_value = ctx.data.name)) {
					setData(text_3, text_3_value);
				}

				if (changed.closed || changed.data) {
					each_value = ctx.data.cards;

					for (var i = 0; i < each_value.length; i += 1) {
						const child_ctx = get_each_context(ctx, each_value, i);

						if (each_blocks[i]) {
							each_blocks[i].p(changed, child_ctx);
						} else {
							each_blocks[i] = create_each_block(component, child_ctx);
							each_blocks[i].c();
							each_blocks[i].m(div, null);
						}
					}

					for (; i < each_blocks.length; i += 1) {
						each_blocks[i].d(1);
					}
					each_blocks.length = each_value.length;
				}
			},

			d(detach) {
				if (detach) {
					detachNode(div);
				}

				removeListener(div_2, "click", click_handler);

				destroyEach(each_blocks, detach);
			}
		};
	}

	// (32:1) {#each data.cards as card}
	function create_each_block(component, ctx) {
		var div, div_1, text, div_2, text_1_value = ctx.card.name, text_1;

		return {
			c() {
				div = createElement("div");
				div_1 = createElement("div");
				text = createText("\r\n\t\t\t");
				div_2 = createElement("div");
				text_1 = createText(text_1_value);
				setStyle(div_1, "background-color", (ctx.card.labels[0] ? ctx.card.labels[0].color : 'black'));
				div_1.className = "card-label svelte-1hrijv";
				div.className = "card svelte-1hrijv";
				div.hidden = ctx.closed;
			},

			m(target, anchor) {
				insert(target, div, anchor);
				append(div, div_1);
				append(div, text);
				append(div, div_2);
				append(div_2, text_1);
			},

			p(changed, ctx) {
				if (changed.data) {
					setStyle(div_1, "background-color", (ctx.card.labels[0] ? ctx.card.labels[0].color : 'black'));
				}

				if ((changed.data) && text_1_value !== (text_1_value = ctx.card.name)) {
					setData(text_1, text_1_value);
				}

				if (changed.closed) {
					div.hidden = ctx.closed;
				}
			},

			d(detach) {
				if (detach) {
					detachNode(div);
				}
			}
		};
	}

	function get_each_context(ctx, list, i) {
		const child_ctx = Object.create(ctx);
		child_ctx.card = list[i];
		child_ctx.each_value = list;
		child_ctx.card_index = i;
		return child_ctx;
	}

	function List(options) {
		init(this, options);
		this._state = assign(data(), options.data);
		this._intro = true;

		if (!document.getElementById("svelte-1hrijv-style")) add_css();

		this._fragment = create_main_fragment(this, this._state);

		this.root._oncreate.push(() => {
			oncreate.call(this);
			this.fire("update", { changed: assignTrue({}, this._state), current: this._state });
		});

		if (options.target) {
			this._fragment.c();
			this._mount(options.target, options.anchor);

			flush(this);
		}
	}

	assign(List.prototype, proto);
	assign(List.prototype, methods);

	/* src\Board.html generated by Svelte v2.13.5 */

	function promise({src}) {
		if(!src){
			return null;
		}
		
		console.log(src);
		
		return fetch(src)
		.then((res) => {
			return res.json().then((obj) => {
				console.log(obj);
				let output = {
					lists: [],
					list_ids: {},
					labels: [],
					label_ids: {},
					name: obj.name
				};
				
				for(let i = 0; i != obj.lists.length; i++){
					let list = obj.lists[i];
					if(!list.closed){
						let index = output.lists.push(list) - 1;
						output.list_ids[list.id] = list;
						output.lists[index].cards = [];
					}
				}
				
				for(let i = 0; i != obj.labels.length; i++){
					let label = obj.labels[i];
					let index = output.labels.push(label) - 1;
					output.label_ids[label.id] = label;
				}
				
				for(let i = 0; i != obj.cards.length; i++){
					let card = obj.cards[i];
					if(!card.closed){
						let list = output.list_ids[card.idList];
						let labels = [];
						
						for(let i = 0; i != card.idLabels.length; i++){
							labels.push(output.label_ids[card.idLabels[i]]);
						}

						card.labels = labels;
						
						if(list){
							list.cards.push(card);
						}
					}
				}
				
				console.log(output);
				
				return output;
			}).catch((err) => {
				throw err;
			});
		});
	}

	function add_css$1() {
		var style = createElement("style");
		style.id = 'svelte-16wtxot-style';
		style.textContent = "h1.svelte-16wtxot{color:black}.board.svelte-16wtxot{background-color:white;border:1px solid #205c7e;border-radius:10px;color:black}.error.svelte-16wtxot{color:red}";
		append(document.head, style);
	}

	function create_main_fragment$1(component, ctx) {
		var div, promise_1;

		let info = {
			component,
			ctx,
			current: null,
			pending: create_pending_block,
			then: create_then_block,
			catch: create_catch_block,
			value: 'data',
			error: 'err'
		};

		handlePromise(promise_1 = ctx.promise, info);

		return {
			c() {
				div = createElement("div");

				info.block.c();
				div.className = "board svelte-16wtxot";
			},

			m(target, anchor) {
				insert(target, div, anchor);

				info.block.m(div, info.anchor = null);
				info.mount = () => div;
			},

			p(changed, _ctx) {
				ctx = _ctx;
				info.ctx = ctx;

				if (('promise' in changed) && promise_1 !== (promise_1 = ctx.promise) && handlePromise(promise_1, info)) ; else {
					info.block.p(changed, assign(assign({}, ctx), info.resolved));
				}
			},

			d(detach) {
				if (detach) {
					detachNode(div);
				}

				info.block.d();
				info = null;
			}
		};
	}

	// (19:17)    <p>LOADING...</p>   {:then data}
	function create_pending_block(component, ctx) {
		var p;

		return {
			c() {
				p = createElement("p");
				p.textContent = "LOADING...";
			},

			m(target, anchor) {
				insert(target, p, anchor);
			},

			p: noop,

			d(detach) {
				if (detach) {
					detachNode(p);
				}
			}
		};
	}

	// (25:3) {#each data.lists as list}
	function create_each_block$1(component, ctx) {

		var list_initial_data = { data: ctx.list };
		var list = new List({
			root: component.root,
			store: component.store,
			data: list_initial_data
		});

		return {
			c() {
				list._fragment.c();
			},

			m(target, anchor) {
				list._mount(target, anchor);
			},

			p(changed, ctx) {
				var list_changes = {};
				if (changed.promise) list_changes.data = ctx.list;
				list._set(list_changes);
			},

			d(detach) {
				list.destroy(detach);
			}
		};
	}

	// (27:3) {:else}
	function create_each_block_else(component, ctx) {
		var div;

		return {
			c() {
				div = createElement("div");
				div.textContent = "ERROR";
				div.className = "error svelte-16wtxot";
			},

			m(target, anchor) {
				insert(target, div, anchor);
			},

			d(detach) {
				if (detach) {
					detachNode(div);
				}
			}
		};
	}

	// (22:1) {#if data}
	function create_if_block(component, ctx) {
		var div, h1, text_value = ctx.data.name, text, text_1;

		var each_value = ctx.data.lists;

		var each_blocks = [];

		for (var i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block$1(component, get_each_context$1(ctx, each_value, i));
		}

		var each_else = null;

		if (!each_value.length) {
			each_else = create_each_block_else(component, ctx);
			each_else.c();
		}

		return {
			c() {
				div = createElement("div");
				h1 = createElement("h1");
				text = createText(text_value);
				text_1 = createText("\r\n\t\t\t");

				for (var i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}
				h1.className = "svelte-16wtxot";
			},

			m(target, anchor) {
				insert(target, div, anchor);
				append(div, h1);
				append(h1, text);
				append(div, text_1);

				for (var i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(div, null);
				}

				if (each_else) {
					each_else.m(div, null);
				}
			},

			p(changed, ctx) {
				if ((changed.promise) && text_value !== (text_value = ctx.data.name)) {
					setData(text, text_value);
				}

				if (changed.promise) {
					each_value = ctx.data.lists;

					for (var i = 0; i < each_value.length; i += 1) {
						const child_ctx = get_each_context$1(ctx, each_value, i);

						if (each_blocks[i]) {
							each_blocks[i].p(changed, child_ctx);
						} else {
							each_blocks[i] = create_each_block$1(component, child_ctx);
							each_blocks[i].c();
							each_blocks[i].m(div, null);
						}
					}

					for (; i < each_blocks.length; i += 1) {
						each_blocks[i].d(1);
					}
					each_blocks.length = each_value.length;
				}

				if (each_value.length) {
					if (each_else) {
						each_else.d(1);
						each_else = null;
					}
				} else if (!each_else) {
					each_else = create_each_block_else(component, ctx);
					each_else.c();
					each_else.m(div, null);
				}
			},

			d(detach) {
				if (detach) {
					detachNode(div);
				}

				destroyEach(each_blocks, detach);

				if (each_else) each_else.d();
			}
		};
	}

	// (21:1) {:then data}
	function create_then_block(component, ctx) {
		var if_block_anchor;

		var if_block = (ctx.data) && create_if_block(component, ctx);

		return {
			c() {
				if (if_block) if_block.c();
				if_block_anchor = createComment();
			},

			m(target, anchor) {
				if (if_block) if_block.m(target, anchor);
				insert(target, if_block_anchor, anchor);
			},

			p(changed, ctx) {
				if (ctx.data) {
					if (if_block) {
						if_block.p(changed, ctx);
					} else {
						if_block = create_if_block(component, ctx);
						if_block.c();
						if_block.m(if_block_anchor.parentNode, if_block_anchor);
					}
				} else if (if_block) {
					if_block.d(1);
					if_block = null;
				}
			},

			d(detach) {
				if (if_block) if_block.d(detach);
				if (detach) {
					detachNode(if_block_anchor);
				}
			}
		};
	}

	// (32:1) {:catch err}
	function create_catch_block(component, ctx) {
		var p, text_value = ctx.err, text;

		return {
			c() {
				p = createElement("p");
				text = createText(text_value);
			},

			m(target, anchor) {
				insert(target, p, anchor);
				append(p, text);
			},

			p(changed, ctx) {
				if ((changed.promise) && text_value !== (text_value = ctx.err)) {
					setData(text, text_value);
				}
			},

			d(detach) {
				if (detach) {
					detachNode(p);
				}
			}
		};
	}

	function get_each_context$1(ctx, list, i) {
		const child_ctx = Object.create(ctx);
		child_ctx.list = list[i];
		child_ctx.each_value = list;
		child_ctx.list_index = i;
		return child_ctx;
	}

	function Board(options) {
		init(this, options);
		this._state = assign({}, options.data);
		this._recompute({ src: 1 }, this._state);
		this._intro = true;

		if (!document.getElementById("svelte-16wtxot-style")) add_css$1();

		this._fragment = create_main_fragment$1(this, this._state);

		if (options.target) {
			this._fragment.c();
			this._mount(options.target, options.anchor);

			flush(this);
		}
	}

	assign(Board.prototype, proto);

	Board.prototype._recompute = function _recompute(changed, state) {
		if (changed.src) {
			if (this._differs(state.promise, (state.promise = promise(state)))) changed.promise = true;
		}
	};

	return Board;

}());
