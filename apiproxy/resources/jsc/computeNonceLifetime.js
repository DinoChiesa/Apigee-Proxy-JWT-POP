/* jshint esversion: 5, node: true */
/* global context, httpClient, properties */

var iat = parseInt(context.getVariable('jwt.VerifyJWT-Nonce.decoded.claim.iat'));
var exp = parseInt(context.getVariable('jwt.VerifyJWT-Nonce.decoded.claim.exp'));
var lifetime = exp - iat;
context.setVariable('nonce_lifetime', lifetime);
