this["JST"] = this["JST"] || {};

this["JST"]["loader"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="loader">\n<div class="pb-loading">\n<div class="pb-icon-wrapper bounce" style="font-size: 1.8em; ">\n<div class="pb-icon">\n</div>\n</div>\n<hr class="pb-loading-line">\n<span class="pb-loading-text">\nLoading...\n</span>\n</div>\n</div>';}return __p};

this["JST"]["mainLayout"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<a href="#otherRoute">#otherRoute</a><br />\n<a href="#otherRoute/123">#otherRoute/123</a><br />\n<a href="#otherRoute/123/parameter4">#otherRoute+id+param</a><br /><input type="text" class="datepicker"/>';}return __p};

this["JST"]["test"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += 'test';}return __p};