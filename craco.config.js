const path = require('path');

module.exports = {
    style: {
        sass: {
            loaderOptions: {
                additionalData: `
          @import 'src/styles/_variables';
          @import 'src/styles/mixins/_mixins';
        `,
            },
        },
    },
};
