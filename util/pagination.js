'use strict';

module.exports.getFromReq = function (query, defaultLimit)
{
    var offset = parseInt(query.offset, 10);
    if (true === isNaN(offset) || 0 > offset) {
        offset = 0;
    }

    var limit = parseInt(query.limit, 10);
    if (true === isNaN(limit) || !(limit > 0)) {
        limit = defaultLimit;
    }

    return {
        offset: offset,
        limit: limit
    };
}

module.exports.getMeta = function (totalLength, currentLength, pagination)
{
    return {
        offset: pagination.offset,
        limit: pagination.limit,
        total: totalLength,
        length: currentLength, 
        remaining: totalLength - pagination.offset - currentLength
    };
};