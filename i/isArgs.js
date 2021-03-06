/* Check if value is classified as an arguments object.
 *
 * |Name  |Type   |Desc                                |
 * |------|-------|------------------------------------|
 * |value |*      |Value to check                      |
 * |return|boolean|True if value is an arguments object|
 *
 * ```javascript
 * (function () {
 *     isArgs(arguments); // -> true
 * })();
 * ```
 */

_('objToStr');

function exports(val)
{
    return objToStr(val) === '[object Arguments]';
}