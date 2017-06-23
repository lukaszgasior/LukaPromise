const LukaPromise = require('./src/LukaPromise')

exports.resolved = function (value) { return LukaPromise().resolve(value) }

exports.rejected = function (reason) { return LukaPromise().reject(reason) }

exports.deferred = () => {
  var lukaPromise = new LukaPromise()
  return {
    deferred: lukaPromise,
    resolve: lukaPromise.resolve,
    reject: lukaPromise.reject
  }
}
