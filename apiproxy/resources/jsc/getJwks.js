/* jshint esversion: 5, node: true */
/* global context, httpClient, properties */

var uri = context.getVariable(properties.var_containing_uri);
httpClient.get(uri, function(response, e){
  if (e) throw e;
  if (response.status != 200)
    throw 'Bad Status: ' + response.status;
  context.setVariable('jwks', response.content);
});
