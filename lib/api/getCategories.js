/* hexo-info-api API module */

'use strict';

module.exports = function(hexo) {
    const categories = hexo.locals.get('categories').toArray().map(categorie => ({
        name: categorie.name,
        _id: categorie._id,
    }));
    return {
        path: 'api/getCategories/',
        data: JSON.stringify({
            type: "getCategories",
            data: {
                categories
            }
        })
    }
}
