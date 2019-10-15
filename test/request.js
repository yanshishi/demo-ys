/**
 * Created by yanshi on 2017/10/20.
 */
var a= {
    POST: 1,
    PUT: 1,
    // DELETE: 1,
    // GET: 1
}[] ? request.fields[option.field] : request.query[option.field];