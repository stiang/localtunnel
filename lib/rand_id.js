
var chars = 'abcdefghiklmnopqrstuvwxyz0123456789';
module.exports = function rand_id() {
    var randomstring = '';
    for (var i=0; i<8; ++i) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars[rnum];
    }

    return randomstring;
}

