;
/* module-key = 'com.atlassian.jira.plugins.jira-editor-plugin:renderer', location = '/js/converter/html-renderer.js' */
define("jira/editor/html-renderer",["wrm/context-path","jquery","underscore"],function(b,d,c){var a=function(f,e){e=e||{};var g=c.extend({rendererType:"atlassian-wiki-renderer",unrenderedMarkup:f,forWysiwyg:true},e);return d.ajax({url:b()+"/rest/api/1.0/render",contentType:"application/json",type:"POST",data:JSON.stringify(g),dataType:"html"})};return{renderMarkup:a}});;