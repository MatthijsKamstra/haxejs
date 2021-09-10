(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var setImmediate;

    function addFromSetImmediateArguments(args) {
        tasksByHandle[nextHandle] = partiallyApplied.apply(undefined, args);
        return nextHandle++;
    }

    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    function partiallyApplied(handler) {
        var args = [].slice.call(arguments, 1);
        return function() {
            if (typeof handler === "function") {
                handler.apply(undefined, args);
            } else {
                (new Function("" + handler))();
            }
        };
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(partiallyApplied(runIfPresent, handle), 0);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    task();
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function installNextTickImplementation() {
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            process.nextTick(partiallyApplied(runIfPresent, handle));
            return handle;
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            global.postMessage(messagePrefix + handle, "*");
            return handle;
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
    }

    function installSetTimeoutImplementation() {
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            setTimeout(partiallyApplied(runIfPresent, handle), 0);
            return handle;
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(new Function("return this")()));

;(function ($hx_exports, $global) { "use strict";
$hx_exports["promhx"] = $hx_exports["promhx"] || {};
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Main = function() {
	console.log("src/Main.hx:11:","promhx example");
	var p = new promhx_Promise();
	var expected = 7;
	var actual = 0;
	p.then(function(a) {
		return 1;
	}).catchError(function(e) {
		actual += 3;
	});
	p.reject(2);
	p.then(function(a) {
		return 1;
	}).catchError(function(e) {
		actual += 4;
	});
};
Main.__name__ = true;
Main.main = function() {
	var main = new Main();
};
Math.__name__ = true;
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = true;
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	unwrap: function() {
		return this.__nativeException;
	}
	,get_native: function() {
		return this.__nativeException;
	}
});
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	unwrap: function() {
		return this.value;
	}
});
var haxe_ds_List = function() {
	this.length = 0;
};
haxe_ds_List.__name__ = true;
haxe_ds_List.prototype = {
	add: function(item) {
		var x = new haxe_ds__$List_ListNode(item,null);
		if(this.h == null) {
			this.h = x;
		} else {
			this.q.next = x;
		}
		this.q = x;
		this.length++;
	}
	,pop: function() {
		if(this.h == null) {
			return null;
		}
		var x = this.h.item;
		this.h = this.h.next;
		if(this.h == null) {
			this.q = null;
		}
		this.length--;
		return x;
	}
	,isEmpty: function() {
		return this.h == null;
	}
};
var haxe_ds__$List_ListNode = function(item,next) {
	this.item = item;
	this.next = next;
};
haxe_ds__$List_ListNode.__name__ = true;
var haxe_ds_Option = $hxEnums["haxe.ds.Option"] = { __ename__:true,__constructs__:null
	,Some: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Option",toString:$estr}; },$_._hx_name="Some",$_.__params__ = ["v"],$_)
	,None: {_hx_name:"None",_hx_index:1,__enum__:"haxe.ds.Option",toString:$estr}
};
haxe_ds_Option.__constructs__ = [haxe_ds_Option.Some,haxe_ds_Option.None];
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var promhx_base_AsyncBase = function(d) {
	this._resolved = false;
	this._pending = false;
	this._errorPending = false;
	this._fulfilled = false;
	this._update = [];
	this._error = [];
	this._errored = false;
	if(d != null) {
		var next = this;
		var f = function(x) {
			return x;
		};
		d._update.push({ async : next, linkf : function(x) {
			next.handleResolve(f(x));
		}});
		promhx_base_AsyncBase.immediateLinkUpdate(d,next,f);
	}
};
promhx_base_AsyncBase.__name__ = true;
promhx_base_AsyncBase.immediateLinkUpdate = function(current,next,f) {
	if(current._errored && !current._errorPending && current._error.length <= 0) {
		next.handleError(current._errorVal);
	}
	if(current._resolved && !current._pending) {
		try {
			next.handleResolve(f(current._val));
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			next.handleError(e);
		}
	}
};
promhx_base_AsyncBase.allFulfilled = function(as) {
	var a = $getIterator(as);
	while(a.hasNext()) {
		var a1 = a.next();
		if(!a1._fulfilled) {
			return false;
		}
	}
	return true;
};
promhx_base_AsyncBase.prototype = {
	catchError: function(f) {
		this._error.push(f);
		return this;
	}
	,handleResolve: function(val) {
		this._resolve(val);
	}
	,_resolve: function(val) {
		var _gthis = this;
		if(this._pending) {
			var _g = $bind(this,this._resolve);
			var val1 = val;
			var tmp = function() {
				_g(val1);
			};
			promhx_base_EventLoop.queue.add(tmp);
			promhx_base_EventLoop.continueOnNextLoop();
		} else {
			this._resolved = true;
			this._pending = true;
			promhx_base_EventLoop.queue.add(function() {
				_gthis._val = val;
				var _g = 0;
				var _g1 = _gthis._update;
				while(_g < _g1.length) {
					var up = _g1[_g];
					++_g;
					try {
						up.linkf(val);
					} catch( _g2 ) {
						var e = haxe_Exception.caught(_g2).unwrap();
						up.async.handleError(e);
					}
				}
				_gthis._fulfilled = true;
				_gthis._pending = false;
			});
			promhx_base_EventLoop.continueOnNextLoop();
		}
	}
	,handleError: function(error) {
		this._handleError(error);
	}
	,_handleError: function(error) {
		var _gthis = this;
		var update_errors = function(e) {
			if(_gthis._error.length > 0) {
				var _g = 0;
				var _g1 = _gthis._error;
				while(_g < _g1.length) {
					var ef = _g1[_g];
					++_g;
					ef(e);
				}
			} else if(_gthis._update.length > 0) {
				var _g = 0;
				var _g1 = _gthis._update;
				while(_g < _g1.length) {
					var up = _g1[_g];
					++_g;
					up.async.handleError(e);
				}
			} else {
				throw haxe_Exception.thrown(e);
			}
			_gthis._errorPending = false;
		};
		if(!this._errorPending) {
			this._errorPending = true;
			this._errored = true;
			this._errorVal = error;
			promhx_base_EventLoop.queue.add(function() {
				if(_gthis._errorMap != null) {
					try {
						_gthis._resolve(_gthis._errorMap(error));
					} catch( _g ) {
						var e = haxe_Exception.caught(_g).unwrap();
						update_errors(e);
					}
				} else {
					update_errors(error);
				}
			});
			promhx_base_EventLoop.continueOnNextLoop();
		}
	}
};
var promhx_Deferred = $hx_exports["promhx"]["Deferred"] = function() {
	promhx_base_AsyncBase.call(this);
};
promhx_Deferred.__name__ = true;
promhx_Deferred.__super__ = promhx_base_AsyncBase;
promhx_Deferred.prototype = $extend(promhx_base_AsyncBase.prototype,{
	resolve: function(val) {
		this.handleResolve(val);
	}
	,throwError: function(e) {
		this.handleError(e);
	}
	,promise: function() {
		return new promhx_Promise(this);
	}
	,stream: function() {
		return new promhx_Stream(this);
	}
	,publicStream: function() {
		return new promhx_PublicStream(this);
	}
});
var promhx_Promise = $hx_exports["promhx"]["Promise"] = function(d) {
	promhx_base_AsyncBase.call(this,d);
	this._rejected = false;
};
promhx_Promise.__name__ = true;
promhx_Promise.whenAll = function(itb) {
	var ret = new promhx_Promise(null);
	var all = itb;
	var next = ret;
	var cthen = function(arr,current,v) {
		if(arr.length == 0 || promhx_base_AsyncBase.allFulfilled(arr)) {
			var _g = [];
			var a = $getIterator(all);
			while(a.hasNext()) {
				var a1 = a.next();
				_g.push(a1 == current ? v : a1._val);
			}
			var vals = _g;
			next.handleResolve(vals);
		}
	};
	var a = $getIterator(all);
	while(a.hasNext()) {
		var a1 = a.next();
		var a2 = a1._update;
		var next1 = next;
		var _g = [cthen];
		var _g1 = [];
		var a21 = $getIterator(all);
		while(a21.hasNext()) {
			var a22 = a21.next();
			if(a22 != a1) {
				_g1.push(a22);
			}
		}
		a2.push({ async : next1, linkf : (function(current,arr,_g) {
			return function(v) {
				_g[0](arr[0],current[0],v);
			};
		})([a1],[_g1],_g)});
	}
	if(promhx_base_AsyncBase.allFulfilled(all)) {
		var next1 = next;
		var _g1 = [];
		var a = $getIterator(all);
		while(a.hasNext()) {
			var a1 = a.next();
			_g1.push(a1._val);
		}
		next1.handleResolve(_g1);
	}
	return ret;
};
promhx_Promise.promise = function(_val) {
	var ret = new promhx_Promise();
	ret.handleResolve(_val);
	return ret;
};
promhx_Promise.__super__ = promhx_base_AsyncBase;
promhx_Promise.prototype = $extend(promhx_base_AsyncBase.prototype,{
	isRejected: function() {
		return this._rejected;
	}
	,reject: function(e) {
		this._rejected = true;
		this.handleError(e);
	}
	,handleResolve: function(val) {
		if(this._resolved) {
			var msg = "Promise has already been resolved";
			throw haxe_Exception.thrown(promhx_error_PromiseError.AlreadyResolved(msg));
		}
		this._resolve(val);
	}
	,then: function(f) {
		var ret = new promhx_Promise(null);
		var next = ret;
		var f1 = f;
		this._update.push({ async : next, linkf : function(x) {
			next.handleResolve(f1(x));
		}});
		promhx_base_AsyncBase.immediateLinkUpdate(this,next,f1);
		return ret;
	}
	,unlink: function(to) {
		var _gthis = this;
		promhx_base_EventLoop.queue.add(function() {
			if(!_gthis._fulfilled) {
				var msg = "Downstream Promise is not fullfilled";
				_gthis.handleError(promhx_error_PromiseError.DownstreamNotFullfilled(msg));
			} else {
				var _g = [];
				var _g1 = 0;
				var _g2 = _gthis._update;
				while(_g1 < _g2.length) {
					var v = _g2[_g1];
					++_g1;
					if(v.async != to) {
						_g.push(v);
					}
				}
				_gthis._update = _g;
			}
		});
		promhx_base_EventLoop.continueOnNextLoop();
	}
	,handleError: function(error) {
		this._rejected = true;
		this._handleError(error);
	}
	,pipe: function(f) {
		var ret = new promhx_Promise(null);
		var ret1 = ret;
		var f1 = f;
		var linked = false;
		var linkf = function(x) {
			if(!linked) {
				linked = true;
				var pipe_ret = f1(x);
				pipe_ret._update.push({ async : ret1, linkf : $bind(ret1,ret1.handleResolve)});
				promhx_base_AsyncBase.immediateLinkUpdate(pipe_ret,ret1,function(x) {
					return x;
				});
			}
		};
		this._update.push({ async : ret1, linkf : linkf});
		if(this._resolved && !this._pending) {
			try {
				linkf(this._val);
			} catch( _g ) {
				var e = haxe_Exception.caught(_g).unwrap();
				ret1.handleError(e);
			}
		}
		return ret;
	}
	,errorPipe: function(f) {
		var ret = new promhx_Promise();
		this.catchError(function(e) {
			var piped = f(e);
			piped.then($bind(ret,ret._resolve));
		});
		this.then($bind(ret,ret._resolve));
		return ret;
	}
});
var promhx_Stream = $hx_exports["promhx"]["Stream"] = function(d) {
	promhx_base_AsyncBase.call(this,d);
	this._end_promise = new promhx_Promise();
};
promhx_Stream.__name__ = true;
promhx_Stream.foreach = function(itb) {
	var s = new promhx_Stream(null);
	var i = $getIterator(itb);
	while(i.hasNext()) {
		var i1 = i.next();
		s.handleResolve(i1);
	}
	s.end();
	return s;
};
promhx_Stream.wheneverAll = function(itb) {
	var ret = new promhx_Stream(null);
	var all = itb;
	var next = ret;
	var cthen = function(arr,current,v) {
		if(arr.length == 0 || promhx_base_AsyncBase.allFulfilled(arr)) {
			var _g = [];
			var a = $getIterator(all);
			while(a.hasNext()) {
				var a1 = a.next();
				_g.push(a1 == current ? v : a1._val);
			}
			var vals = _g;
			next.handleResolve(vals);
		}
	};
	var a = $getIterator(all);
	while(a.hasNext()) {
		var a1 = a.next();
		var a2 = a1._update;
		var next1 = next;
		var _g = [cthen];
		var _g1 = [];
		var a21 = $getIterator(all);
		while(a21.hasNext()) {
			var a22 = a21.next();
			if(a22 != a1) {
				_g1.push(a22);
			}
		}
		a2.push({ async : next1, linkf : (function(current,arr,_g) {
			return function(v) {
				_g[0](arr[0],current[0],v);
			};
		})([a1],[_g1],_g)});
	}
	if(promhx_base_AsyncBase.allFulfilled(all)) {
		var next1 = next;
		var _g1 = [];
		var a = $getIterator(all);
		while(a.hasNext()) {
			var a1 = a.next();
			_g1.push(a1._val);
		}
		next1.handleResolve(_g1);
	}
	return ret;
};
promhx_Stream.concatAll = function(itb) {
	var ret = new promhx_Stream(null);
	var i = $getIterator(itb);
	while(i.hasNext()) {
		var i1 = i.next();
		ret.concat(i1);
	}
	return ret;
};
promhx_Stream.mergeAll = function(itb) {
	var ret = new promhx_Stream(null);
	var i = $getIterator(itb);
	while(i.hasNext()) {
		var i1 = i.next();
		ret.merge(i1);
	}
	return ret;
};
promhx_Stream.stream = function(_val) {
	var ret = new promhx_Stream(null);
	ret.handleResolve(_val);
	return ret;
};
promhx_Stream.__super__ = promhx_base_AsyncBase;
promhx_Stream.prototype = $extend(promhx_base_AsyncBase.prototype,{
	then: function(f) {
		var ret = new promhx_Stream(null);
		var next = ret;
		var f1 = f;
		this._update.push({ async : next, linkf : function(x) {
			next.handleResolve(f1(x));
		}});
		promhx_base_AsyncBase.immediateLinkUpdate(this,next,f1);
		this._end_promise._update.push({ async : ret._end_promise, linkf : function(x) {
			ret.end();
		}});
		return ret;
	}
	,detachStream: function(str) {
		var filtered = [];
		var removed = false;
		var _g = 0;
		var _g1 = this._update;
		while(_g < _g1.length) {
			var u = _g1[_g];
			++_g;
			if(u.async == str) {
				var _g2 = [];
				var _g3 = 0;
				var _g4 = this._end_promise._update;
				while(_g3 < _g4.length) {
					var v = _g4[_g3];
					++_g3;
					if(v.async != str._end_promise) {
						_g2.push(v);
					}
				}
				this._end_promise._update = _g2;
				removed = true;
			} else {
				filtered.push(u);
			}
		}
		this._update = filtered;
		return removed;
	}
	,first: function() {
		var s = new promhx_Promise(null);
		this.then(function(x) {
			if(!s._resolved) {
				s.handleResolve(x);
			}
		});
		return s;
	}
	,handleResolve: function(val) {
		if(!this._end && !this._pause) {
			this._resolve(val);
		}
	}
	,pause: function(set) {
		if(set == null) {
			set = !this._pause;
		}
		this._pause = set;
	}
	,pipe: function(f) {
		var ret = new promhx_Stream(null);
		var ret1 = ret;
		var f1 = f;
		var linked = false;
		var linkf = function(x) {
			if(!linked) {
				linked = true;
				var pipe_ret = f1(x);
				pipe_ret._update.push({ async : ret1, linkf : $bind(ret1,ret1.handleResolve)});
				promhx_base_AsyncBase.immediateLinkUpdate(pipe_ret,ret1,function(x) {
					return x;
				});
			}
		};
		this._update.push({ async : ret1, linkf : linkf});
		if(this._resolved && !this._pending) {
			try {
				linkf(this._val);
			} catch( _g ) {
				var e = haxe_Exception.caught(_g).unwrap();
				ret1.handleError(e);
			}
		}
		this._end_promise.then(function(x) {
			ret.end();
		});
		return ret;
	}
	,errorPipe: function(f) {
		var ret = new promhx_Stream(null);
		this.catchError(function(e) {
			var piped = f(e);
			piped.then($bind(ret,ret._resolve));
			piped._end_promise.then(($_=ret._end_promise,$bind($_,$_._resolve)));
		});
		this.then($bind(ret,ret._resolve));
		this._end_promise.then(function(x) {
			ret.end();
		});
		return ret;
	}
	,handleEnd: function() {
		if(this._pending) {
			promhx_base_EventLoop.queue.add($bind(this,this.handleEnd));
			promhx_base_EventLoop.continueOnNextLoop();
		} else if(this._end_promise._resolved) {
			return;
		} else {
			this._end = true;
			var o = this._resolved ? haxe_ds_Option.Some(this._val) : haxe_ds_Option.None;
			this._end_promise.handleResolve(o);
			this._update = [];
			this._error = [];
		}
	}
	,end: function() {
		promhx_base_EventLoop.queue.add($bind(this,this.handleEnd));
		promhx_base_EventLoop.continueOnNextLoop();
		return this;
	}
	,endThen: function(f) {
		return this._end_promise.then(f);
	}
	,filter: function(f) {
		var ret = new promhx_Stream(null);
		this._update.push({ async : ret, linkf : function(x) {
			if(f(x)) {
				ret.handleResolve(x);
			}
		}});
		promhx_base_AsyncBase.immediateLinkUpdate(this,ret,function(x) {
			return x;
		});
		return ret;
	}
	,concat: function(s) {
		var ret = new promhx_Stream(null);
		this._update.push({ async : ret, linkf : $bind(ret,ret.handleResolve)});
		promhx_base_AsyncBase.immediateLinkUpdate(this,ret,function(x) {
			return x;
		});
		this._end_promise.then(function(_) {
			s.pipe(function(x) {
				ret.handleResolve(x);
				return ret;
			});
			s._end_promise.then(function(_) {
				ret.end();
			});
		});
		return ret;
	}
	,merge: function(s) {
		var ret = new promhx_Stream(null);
		this._update.push({ async : ret, linkf : $bind(ret,ret.handleResolve)});
		s._update.push({ async : ret, linkf : $bind(ret,ret.handleResolve)});
		promhx_base_AsyncBase.immediateLinkUpdate(this,ret,function(x) {
			return x;
		});
		promhx_base_AsyncBase.immediateLinkUpdate(s,ret,function(x) {
			return x;
		});
		return ret;
	}
});
var promhx_PublicStream = $hx_exports["promhx"]["PublicStream"] = function(def) {
	promhx_Stream.call(this,def);
};
promhx_PublicStream.__name__ = true;
promhx_PublicStream.publicstream = function(val) {
	var ps = new promhx_PublicStream(null);
	ps.handleResolve(val);
	return ps;
};
promhx_PublicStream.__super__ = promhx_Stream;
promhx_PublicStream.prototype = $extend(promhx_Stream.prototype,{
	resolve: function(val) {
		this.handleResolve(val);
	}
	,throwError: function(e) {
		this.handleError(e);
	}
	,update: function(val) {
		this.handleResolve(val);
	}
});
var promhx_base_EventLoop = function() { };
promhx_base_EventLoop.__name__ = true;
promhx_base_EventLoop.f = function() {
	var fn = promhx_base_EventLoop.queue.pop();
	if(fn != null) {
		fn();
	}
	if(!promhx_base_EventLoop.queue.isEmpty()) {
		promhx_base_EventLoop.continueOnNextLoop();
	}
};
promhx_base_EventLoop.continueOnNextLoop = function() {
	if(promhx_base_EventLoop.nextLoop != null) {
		promhx_base_EventLoop.nextLoop(promhx_base_EventLoop.f);
	} else {
		setImmediate(promhx_base_EventLoop.f);
	}
};
var promhx_error_PromiseError = $hxEnums["promhx.error.PromiseError"] = { __ename__:true,__constructs__:null
	,AlreadyResolved: ($_=function(message) { return {_hx_index:0,message:message,__enum__:"promhx.error.PromiseError",toString:$estr}; },$_._hx_name="AlreadyResolved",$_.__params__ = ["message"],$_)
	,DownstreamNotFullfilled: ($_=function(message) { return {_hx_index:1,message:message,__enum__:"promhx.error.PromiseError",toString:$estr}; },$_._hx_name="DownstreamNotFullfilled",$_.__params__ = ["message"],$_)
};
promhx_error_PromiseError.__constructs__ = [promhx_error_PromiseError.AlreadyResolved,promhx_error_PromiseError.DownstreamNotFullfilled];
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
String.__name__ = true;
Array.__name__ = true;
js_Boot.__toStr = ({ }).toString;
var global = window;
promhx_base_EventLoop.queue = new haxe_ds_List();
Main.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
