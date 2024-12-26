/* hexo-info-api API module */

'use strict';

module.exports = function(hexo) {
    const tags = hexo.locals.get('tags').toArray().map(tag => ({
        name: tag.name,
        _id: tag._id,
    }));
    return {
        path: 'api/getTags/',
        data: JSON.stringify({
            type: "getTags",
            data: {
                tags
            }
        })
    }
}
