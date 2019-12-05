/* jshint esversion: 6, node: true */
/* global context */

var cnf = JSON.parse(context.getVariable('jwt.VerifyJWT-POP.decoded.claim.cnf'));
context.setVariable('pop_jku', cnf.jku);
context.setVariable('pop_kid', cnf.kid);
