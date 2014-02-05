var coBody = require('co-body');

module.exports = bodyParser;

function bodyParser() {
    return function *(next) {
        if (this.method === 'POST') {
            this.body = yield coBody(this);
        }
        yield next; 
    }
}
