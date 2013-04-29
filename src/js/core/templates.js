(function(){dust.register("dust.api.type",body_0);function body_0(chk,ctx){return chk.exists(ctx.get("$ref"),ctx,{"else":body_1,"block":body_19},null);}function body_1(chk,ctx){return chk.exists(ctx.get("enums"),ctx,{"else":body_2,"block":body_15},null);}function body_2(chk,ctx){return chk.exists(ctx.get("type"),ctx,{"else":body_3,"block":body_4},null);}function body_3(chk,ctx){return chk.write("<strong class=\"muted\">null</strong>");}function body_4(chk,ctx){return chk.exists(ctx.getPath(false,["type","push"]),ctx,{"else":body_5,"block":body_6},null);}function body_5(chk,ctx){return chk.write("<pre>").reference(ctx.get("type"),ctx,"h",["js"]).write("</pre>");}function body_6(chk,ctx){return chk.section(ctx.get("type"),ctx,{"block":body_7},null);}function body_7(chk,ctx){return chk.helper("select",ctx,{"block":body_8},{"key":body_13}).helper("sep",ctx,{"block":body_14},null);}function body_8(chk,ctx){return chk.helper("eq",ctx,{"block":body_9},{"value":"array"}).helper("default",ctx,{"block":body_10},null);}function body_9(chk,ctx){return chk.write("<code>[").partial("dust.api.type",ctx,null).write("]</code>");}function body_10(chk,ctx){return chk.write("<code>").exists(ctx.get("selectKey"),ctx,{"else":body_11,"block":body_12},null).write("</code>\t");}function body_11(chk,ctx){return chk.write("<strong class=\"muted\">null</strong>");}function body_12(chk,ctx){return chk.reference(ctx.getPath(true,["selectKey"]),ctx,"h",["js"]);}function body_13(chk,ctx){return chk.reference(ctx.getPath(true,["type"]),ctx,"h");}function body_14(chk,ctx){return chk.write(" / ");}function body_15(chk,ctx){return chk.write("Enumerable: <ul>").section(ctx.get("enums"),ctx,{"block":body_16},null).write("</ul>");}function body_16(chk,ctx){return chk.write("<li><code>").reference(ctx.getPath(true,[]),ctx,"h",["js"]).write("</code>").exists(ctx.get("default"),ctx,{"block":body_17},null).write("</li>");}function body_17(chk,ctx){return chk.helper("eq",ctx,{"block":body_18},{"key":ctx.get("default"),"value":ctx.getPath(true,[])});}function body_18(chk,ctx){return chk.write(" <span class=\"small muted\">(default)</span>");}function body_19(chk,ctx){return chk.write("<a href=\"#").reference(ctx.get("$ref"),ctx,"h",["a"]).write("\">").reference(ctx.get("$ref"),ctx,"h").write("</a>");}return body_0;})();
(function(){dust.register("dust.browser",body_0);function body_0(chk,ctx){return chk.write("<div class=\"tabbable\"><ul class=\"nav nav-tabs\" id=\"BrowserTabs\"><li><a href=\"#settings\" data-toggle=\"tab\"><i class=\"icon-cog\"></i> Settings</a></li><li><a href=\"#remote\" data-toggle=\"tab\"><i class=\"icon-desktop\"></i> Remote</a></li><li class=\"active\"><a href=\"#console\" data-toggle=\"tab\"><i class=\"icon-exchange\"></i> Console</a></li><li><a href=\"#api\" data-toggle=\"tab\"><i class=\"icon-book\"></i> API Browser</a></li></ul><div class=\"tab-content\"><div class=\"tab-pane\" id=\"settings\">").partial("dust.settings",ctx.rebase(ctx.get("settings")),null).write("</div><div class=\"tab-pane\" id=\"remote\">").partial("dust.remote",ctx,null).write("</div><div class=\"tab-pane active\" id=\"console\">").partial("dust.console",ctx.rebase(ctx.get("api")),null).write("</div><div class=\"tab-pane\" id=\"api\">").partial("dust.api",ctx.rebase(ctx.get("api")),null).write("</div></div></div>");}return body_0;})();
(function(){dust.register("dust.console.input.form.methodDetails",body_0);function body_0(chk,ctx){return chk.write("<dl class=\"dl-horizontal\"><dt>Description</dt><dd>").reference(ctx.get("description"),ctx,"h").write("</dd><dt>Parameters</dt><dd>").exists(ctx.get("params"),ctx,{"else":body_1,"block":body_2},null).write("</dd><dt>Returns</dt><dd>").exists(ctx.get("returns"),ctx,{"else":body_6,"block":body_7},null).write("</dd></dl>");}function body_1(chk,ctx){return chk.write("<span class=\"muted\">None</span>");}function body_2(chk,ctx){return chk.write("<dl>").section(ctx.get("params"),ctx,{"block":body_3},null).write("</dl>");}function body_3(chk,ctx){return chk.write("<dt>").reference(ctx.getPath(true,["name"]),ctx,"h").exists(ctx.get("required"),ctx,{"block":body_4},null).write("</dt><dd>").exists(ctx.getPath(true,["resolvedType"]),ctx,{"block":body_5},null).reference(ctx.getPath(true,["description"]),ctx,"h").write("</dd>");}function body_4(chk,ctx){return chk.write("*");}function body_5(chk,ctx){return chk.write("<span class=\"label\">").reference(ctx.getPath(true,["type"]),ctx,"h").write("</span> ");}function body_6(chk,ctx){return chk.write("<span class=\"muted\">None</span>");}function body_7(chk,ctx){return chk.exists(ctx.getPath(false,["returns","type"]),ctx,{"block":body_8},null).exists(ctx.getPath(false,["returns","$ref"]),ctx,{"block":body_9},null).reference(ctx.getPath(false,["returns","description"]),ctx,"h");}function body_8(chk,ctx){return chk.write("<span class=\"label\">").reference(ctx.getPath(false,["returns","type"]),ctx,"h").write("</span> ");}function body_9(chk,ctx){return chk.write("<span class=\"label label-info\">").reference(ctx.getPath(false,["returns","$ref"]),ctx,"h").write("</span> ");}return body_0;})();
(function(){dust.register("dust.api",body_0);function body_0(chk,ctx){return chk.exists(ctx.get("introspection"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.section(ctx.get("introspection"),ctx,{"else":body_2,"block":body_3},null);}function body_2(chk,ctx){return chk.write("<div class=\"alert alert-warning\"><i class=\"icon-exclamation-sign\"></i> No introspection data returned.</div>");}function body_3(chk,ctx){return chk.write("<dl class=\"dl-horizontal\"><dt>Description</dt><dd>").exists(ctx.get("id"),ctx,{"block":body_4},null).reference(ctx.get("description"),ctx,"h").exists(ctx.get("id"),ctx,{"block":body_5},null).write("</dd>").exists(ctx.get("version"),ctx,{"block":body_6},null).write("</dl><div class=\"accordion\" id=\"IntrospectionResults\"><div class=\"accordion-group\"><div class=\"accordion-heading\"><a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#IntrospectionResults\" href=\"#CollapseMethods\">Methods</a></div><div class=\"accordion-body collapse\" id=\"CollapseMethods\"><div class=\"accordion-inner\">").partial("dust.api.accordion",ctx,{"tree":ctx.get("methods"),"tree_id":"Methods"}).write("</div></div></div><div class=\"accordion-group\"><div class=\"accordion-heading\"><a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#IntrospectionResults\" href=\"#CollapseNotifications\">Notifications</a></div><div class=\"accordion-body collapse\" id=\"CollapseNotifications\"><div class=\"accordion-inner\">").partial("dust.api.accordion",ctx,{"tree":ctx.get("notifications"),"tree_id":"Notifications"}).write("</div></div></div><div class=\"accordion-group\"><div class=\"accordion-heading\"><a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#IntrospectionResults\" href=\"#CollapseTypes\">Types</a></div><div class=\"accordion-body collapse\" id=\"CollapseTypes\"><div class=\"accordion-inner\">").partial("dust.api.accordion",ctx,{"tree":ctx.get("types"),"tree_id":"Types"}).write("</div></div></div></div>");}function body_4(chk,ctx){return chk.write("<a href=\"").reference(ctx.get("id"),ctx,"h").write("\" target=\"_blank\">");}function body_5(chk,ctx){return chk.write("</a>");}function body_6(chk,ctx){return chk.write("<dt>Version</dt><dd>").reference(ctx.get("version"),ctx,"h").write("</dd>");}return body_0;})();
(function(){dust.register("dust.console",body_0);function body_0(chk,ctx){return chk.write("<div id=\"ConsoleInput\"></div><div id=\"ConsoleOutput\">").partial("dust.console.output",ctx,null).write("</div>");}return body_0;})();
(function(){dust.register("dust.remote",body_0);function body_0(chk,ctx){return chk.write("<form class=\"form\"><div class=\"control-group\"><label class=\"control-label\" for=\"virtualKeyboard\">Virtual Keyboard</label><div class=\"controls\"><input type=\"text\" id=\"virtualKeyboard\" placeholder=\"Click here to send keystrokes\" class=\"input-block-level\" /></div></div><div class=\"control-group\"><label class=\"control-label\" for=\"openUrl\">Open URL</label><div class=\"controls\"><input type=\"text\" id=\"openUrl\" placeholder=\"e.g. http://youtube.com/watch?v=xxxxxxxxxxx\" class=\"input-block-level\" /></div></div></form>");}return body_0;})();
(function(){dust.register("dust.home",body_0);function body_0(chk,ctx){return chk.write("<div class=\"hero-unit\"><h1>Welcome</h1><p class=\"lead\">To get started, type in the <strong>host/IP address</strong> and <strong>port</strong> for your XBMC media center into the form above, and press the <strong>Connect</strong> button above.</p><div class=\"alert alert-info\"><i class=\"icon-exclamation-sign\"></i> Please note, you will need <strong>JSONRPC</strong> (via WebSockets) enabled on your XBMC host to use this feature. The default port for this is <em>not</em> the same as the HTTP API!</div></div>");}return body_0;})();
(function(){dust.register("dust.settings",body_0);function body_0(chk,ctx){return chk.write("<form class=\"form-horizontal\" id=\"SettingsForm\"><div class=\"control-group\"><label class=\"control-label\" for=\"AutoConnect\">Auto-connect<br /><small>Connect to this host automatically on startup</small></label><div class=\"controls\"><input type=\"text\" name=\"AutoConnectHost\" id=\"AutoConnectHost\" value=\"").reference(ctx.get("AutoConnectHost"),ctx,"h").write("\" class=\"small\" placeholder=\"Host/IP\" /> <input type=\"text\" name=\"AutoConnectPort\" id=\"AutoConnectPort\" value=\"").reference(ctx.get("AutoConnectPort"),ctx,"h").write("\" class=\"input-small\" placeholder=\"9090\" /></div></div></form><pre>").reference(ctx.getPath(true,[]),ctx,"h",["js"]).write("</pre>");}return body_0;})();
(function(){dust.register("dust.xbmc.time",body_0);function body_0(chk,ctx){return chk.exists(ctx.get("hours"),ctx,{"block":body_1},null).exists(ctx.get("minutes"),ctx,{"block":body_3},null).reference(ctx.get("seconds"),ctx,"h").notexists(ctx.get("minutes"),ctx,{"block":body_5},null);}function body_1(chk,ctx){return chk.reference(ctx.get("hours"),ctx,"h").write(":").helper("lt",ctx,{"block":body_2},{"key":ctx.get("minutes"),"value":10});}function body_2(chk,ctx){return chk.write("0");}function body_3(chk,ctx){return chk.reference(ctx.get("minutes"),ctx,"h").write(":").helper("lt",ctx,{"block":body_4},{"key":ctx.get("seconds"),"value":10});}function body_4(chk,ctx){return chk.write("0");}function body_5(chk,ctx){return chk.notexists(ctx.get("hours"),ctx,{"block":body_6},null);}function body_6(chk,ctx){return chk.write("s");}return body_0;})();
(function(){dust.register("dust.xbmc.item",body_0);function body_0(chk,ctx){return chk.exists(ctx.get("episodedetails"),ctx,{"else":body_1,"block":body_5},null);}function body_1(chk,ctx){return chk.exists(ctx.get("moviedetails"),ctx,{"else":body_2,"block":body_3},null);}function body_2(chk,ctx){return chk.write("<div class=\"details\"><div class=\"medialabel\">").reference(ctx.get("label"),ctx,"h").write("</div></div>");}function body_3(chk,ctx){return chk.write("<div class=\"moviedetails\"><div class=\"movietitle\">").reference(ctx.get("label"),ctx,"h").write("</div>").section(ctx.get("moviedetails"),ctx,{"block":body_4},null).write("</div>");}function body_4(chk,ctx){return chk.write("<div class=\"movieyear\">").reference(ctx.get("year"),ctx,"h").write("</div>");}function body_5(chk,ctx){return chk.write("<div class=\"episodedetails\"><div class=\"showtitle\">").reference(ctx.getPath(false,["episodedetails","showtitle"]),ctx,"h").write("</div><div class=\"episodetitle\">").section(ctx.get("episodedetails"),ctx,{"block":body_6},null).reference(ctx.get("label"),ctx,"h").write("</div></div>");}function body_6(chk,ctx){return chk.write("<div class=\"episode label label-info\">").reference(ctx.get("season"),ctx,"h").write("x").reference(ctx.get("episode"),ctx,"h").write("</div> ");}return body_0;})();
(function(){dust.register("dust.console.input.form.methodSelector",body_0);function body_0(chk,ctx){return chk.write("<div class=\"control-group\"><label class=\"control-label\" for=\"MethodGroup\">Type</label><div class=\"controls\"><select id=\"MethodGroup\" name=\"MethodGroup\">").helper("each",ctx,{"block":body_1},{"input":ctx.get("api")}).write("</select>\t</div></div><div class=\"control-group\"><label class=\"control-label\" for=\"Method\">Method</label><div class=\"controls\"><select id=\"Method\" name=\"Method\">").helper("each",ctx,{"block":body_4},{"input":ctx.get("selectedMethodGroup")}).write("</select></div></div>").exists(ctx.get("selectedMethod"),ctx,{"block":body_7},null);}function body_1(chk,ctx){return chk.write("<option value=\"").reference(ctx.get("key"),ctx,"h").write("\"").exists(ctx.get("MethodGroup"),ctx,{"block":body_2},null).write(">").reference(ctx.get("key"),ctx,"h").write("</option>");}function body_2(chk,ctx){return chk.helper("eq",ctx,{"block":body_3},{"key":ctx.get("MethodGroup"),"value":ctx.get("key")});}function body_3(chk,ctx){return chk.write(" selected");}function body_4(chk,ctx){return chk.write("<option value=\"").reference(ctx.get("key"),ctx,"h").write("\"").exists(ctx.get("Method"),ctx,{"block":body_5},null).write(">").reference(ctx.get("key"),ctx,"h").write("</option>");}function body_5(chk,ctx){return chk.helper("eq",ctx,{"block":body_6},{"key":ctx.get("Method"),"value":ctx.get("key")});}function body_6(chk,ctx){return chk.write(" selected");}function body_7(chk,ctx){return chk.partial("dust.console.input.form.methodDetails",ctx.rebase(ctx.get("selectedMethod")),{"name":ctx.get("Method")});}return body_0;})();
(function(){dust.register("dust.api.accordion",body_0);function body_0(chk,ctx){return chk.write("<div class=\"accordion\" id=\"").reference(ctx.get("tree_id"),ctx,"h",["a"]).write("\">").helper("each",ctx,{"block":body_1},{"input":ctx.get("tree")}).write("</div>");}function body_1(chk,ctx){return chk.write("<div class=\"accordion-group\"><div class=\"accordion-heading\"><a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#").reference(ctx.get("tree_id"),ctx,"h",["a"]).write("\" href=\"#").reference(ctx.get("tree_id"),ctx,"h",["a"]).reference(ctx.get("key"),ctx,"h",["a"]).write("\">").reference(ctx.get("key"),ctx,"h").write("</a></div><div class=\"accordion-body collapse\" id=\"").reference(ctx.get("tree_id"),ctx,"h",["a"]).reference(ctx.get("key"),ctx,"h",["a"]).write("\"><div class=\"accordion-inner\">").exists(ctx.get("value"),ctx,{"block":body_2},null).write("</div></div></div>");}function body_2(chk,ctx){return chk.write("<dl class=\"dl-horizontal\">").section(ctx.get("value"),ctx,{"block":body_3},null).write("</dl>");}function body_3(chk,ctx){return chk.exists(ctx.getPath(true,["description"]),ctx,{"else":body_4,"block":body_5},null).exists(ctx.getPath(true,["params"]),ctx,{"block":body_6},null).exists(ctx.getPath(true,["$ref"]),ctx,{"else":body_11,"block":body_13},null);}function body_4(chk,ctx){return chk.write("<dt>JSON</dt><dd><pre>").reference(ctx.get("value"),ctx,"h",["js"]).write("</pre></dd>");}function body_5(chk,ctx){return chk.write("<dt>Description</dt><dd>").reference(ctx.getPath(true,["description"]),ctx,"h").write("</dd>");}function body_6(chk,ctx){return chk.write("<dt>Parameters</dt><dd><dl>").section(ctx.get("params"),ctx,{"block":body_7},null).write("</dl></dd>");}function body_7(chk,ctx){return chk.write("<dt>").notexists(ctx.get("required"),ctx,{"block":body_8},null).reference(ctx.get("name"),ctx,"h").notexists(ctx.get("required"),ctx,{"else":body_9,"block":body_10},null).write("</dt><dd>").partial("dust.api.type",ctx,null).write("</dd>");}function body_8(chk,ctx){return chk.write("<em>");}function body_9(chk,ctx){return chk.write("*");}function body_10(chk,ctx){return chk.write("</em>");}function body_11(chk,ctx){return chk.exists(ctx.getPath(true,["type"]),ctx,{"block":body_12},null);}function body_12(chk,ctx){return chk.write("<dt>Type</dt><dd>").partial("dust.api.type",ctx,null).write("</dd>");}function body_13(chk,ctx){return chk.write("<dt>Referenced Type</dt><dd>").partial("dust.api.type",ctx,null).write("</dd>");}return body_0;})();
(function(){dust.register("dust.console.input",body_0);function body_0(chk,ctx){return chk.write("<!-- Button to trigger modal --><a href=\"#apiFormModal\" role=\"button\" class=\"btn\" data-toggle=\"modal\">Send API Command <i class=\"icon-arrow-right\"></i></a><!-- Modal --><div id=\"apiFormModal\" class=\"modal hide fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"apiFormLabel\" aria-hidden=\"true\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button><h3 id=\"apiFormLabel\"><i class=\"icon-arrow-right\"></i> Send API Command</h3></div><div class=\"modal-body\">").partial("dust.console.input.form",ctx,{"api":ctx.get("api")}).write("</div><div class=\"modal-footer\"><button class=\"btn\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button><button class=\"btn btn-primary\">Send Command</button></div></div>");}return body_0;})();
(function(){dust.register("dust.error",body_0);function body_0(chk,ctx){return chk.write("<div class=\"alert alert-error\">").exists(ctx.get("title"),ctx,{"block":body_1},null).reference(ctx.get("message"),ctx,"h",["s"]).write("</div>");}function body_1(chk,ctx){return chk.write("<h4>").reference(ctx.get("title"),ctx,"h").write("</h4>");}return body_0;})();
(function(){dust.register("dust.nowplaying",body_0);function body_0(chk,ctx){return chk.exists(ctx.get("player"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.write("<div class=\"navbar-inner\"><ul class=\"nav\">").helper("gt",ctx,{"else":body_2,"block":body_3},{"key":ctx.getPath(false,["player","speed"]),"value":0}).write(" <li class=\"span1\"><a href=\"#\" id=\"btnStop\"><i class=\"icon-stop\" id=\"btnStop\"></i></a></li><li id=\"item\" class=\"span3\"><a href=\"#\" id=\"btnNowPlaying\">").partial("dust.xbmc.item",ctx.rebase(ctx.getPath(false,["player","item"])),null).write("</a></li><li id=\"progressBar\" class=\"span6\"><a href=\"#\"><div id=\"seeker\"></div><div class=\"pull-left small\" id=\"time\">").partial("dust.xbmc.time",ctx.rebase(ctx.getPath(false,["player","time"])),null).write("</div><div class=\"pull-right small\" id=\"totaltime\">").partial("dust.xbmc.time",ctx.rebase(ctx.getPath(false,["player","totaltime"])),null).write("</div></a></li><li class=\"span1\"><a href=\"#\" id=\"muteControl\">").exists(ctx.get("volume"),ctx,{"block":body_4},null).write("</a></li></ul></div>");}function body_2(chk,ctx){return chk.write("<li class=\"span1 active\"><a href=\"#\" id=\"btnPause\"><i class=\"icon-pause\"></i></a></li>");}function body_3(chk,ctx){return chk.write("<li class=\"span1\"><a href=\"#\" id=\"btnPlay\"><i class=\"icon-play\"></i></a></li>");}function body_4(chk,ctx){return chk.exists(ctx.getPath(false,["volume","muted"]),ctx,{"else":body_5,"block":body_8},null);}function body_5(chk,ctx){return chk.helper("gt",ctx,{"else":body_6,"block":body_7},{"key":ctx.getPath(false,["volume","volume"]),"value":50});}function body_6(chk,ctx){return chk.write("<i class=\"icon-volume-down\"></i>");}function body_7(chk,ctx){return chk.write("<i class=\"icon-volume-up\"></i>");}function body_8(chk,ctx){return chk.write("<i class=\"icon-volume-off\"></i>");}return body_0;})();
(function(){dust.register("dust.console.output",body_0);function body_0(chk,ctx){return chk.write("<table id=\"ConsoleOutputTable\" class=\"table\"><thead><tr><th></th><th>Method</th><th>Data</th></tr></thead><tbody id=\"ConsoleOutputBody\"><td class=\"empty-table-notice\" colspan=\"4\"><div class=\"alert alert-info center\"><em>Requests will appear here as they are sent/received.</em></div></td></tbody></table>");}return body_0;})();
(function(){dust.register("dust.console.output.row",body_0);function body_0(chk,ctx){return chk.write("<tr><td>").exists(ctx.get("action"),ctx,{"else":body_1,"block":body_2},null).write("</td><td>").exists(ctx.get("method"),ctx,{"block":body_8},null).write("</td><td>").exists(ctx.get("data"),ctx,{"else":body_9,"block":body_10},null).write("</td></tr>");}function body_1(chk,ctx){return chk.write("<i class=\"icon-question-sign\"></i>");}function body_2(chk,ctx){return chk.helper("select",ctx,{"block":body_3},{"key":ctx.get("action")});}function body_3(chk,ctx){return chk.helper("eq",ctx,{"block":body_4},{"value":"request"}).helper("eq",ctx,{"block":body_5},{"value":"response"}).helper("eq",ctx,{"block":body_6},{"value":"notification"}).helper("default",ctx,{"block":body_7},null);}function body_4(chk,ctx){return chk.write("<i class=\"icon-arrow-right\" title=\"Request to host\"></i>");}function body_5(chk,ctx){return chk.write("<i class=\"icon-arrow-left\" title=\"Response from host\"></i>");}function body_6(chk,ctx){return chk.write("<i class=\"icon-exclamation-sign\" title=\"Notification from host\"></i>");}function body_7(chk,ctx){return chk.write("<i class=\"icon-question-sign\" title=\"Unknown/other event\"></i>");}function body_8(chk,ctx){return chk.reference(ctx.get("method"),ctx,"h");}function body_9(chk,ctx){return chk.write("<em class=\"muted\">none</em>");}function body_10(chk,ctx){return chk.write("<pre>").reference(ctx.get("data"),ctx,"h",["js"]).write("</pre>");}return body_0;})();
(function(){dust.register("dust.console.input.form.parameters",body_0);function body_0(chk,ctx){return chk.exists(ctx.get("params"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.write("<h3>Parameters</h3>");}return body_0;})();
(function(){dust.register("dust.console.input.form",body_0);function body_0(chk,ctx){return chk.write("<form class=\"form-horizontal\"><fieldset id=\"MethodSelector\"><legend>Select API Method</legend>").partial("dust.console.input.form.methodSelector",ctx,null).write("</fieldset><fieldset id=\"Parameters\">").partial("dust.console.input.form.parameters",ctx,null).write("</fieldset></form>");}return body_0;})();