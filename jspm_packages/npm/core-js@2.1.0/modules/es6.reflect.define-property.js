/* */ 
var dP = require('./_object-dp'),
    $export = require('./_export'),
    anObject = require('./_an-object'),
    toPrimitive = require('./_to-primitive');
$export($export.S + $export.F * require('./_fails')(function() {
  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
}), 'Reflect', {defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }});
