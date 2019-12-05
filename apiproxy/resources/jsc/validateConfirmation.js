/* jshint esversion: 8, node: true */
/* global  context */

function isCnfValid(cnf) {
  // RFC 7800 says "at most one of jku, jwe, jwk"
  if (c.jku && !c.jwk && !c.jwe) {
    return !! c.kid; // valid if kid available
  }
  if (c.jwk && !c.jku && !c.jwe)
    return true;
  if (c.jwe && !c.jku && !c.jwk)
    return true;
  return false;
}

var bodyContent = context.getVariable('request.content');
var c = JSON.parse(bodyContent);

if (isCnfValid(c)) {
  context.setVariable('pop_cnf', bodyContent); // string form
}
else {
  throw "Invalid cnf value";
}
