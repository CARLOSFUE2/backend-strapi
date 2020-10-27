'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async update({
        request: {body: {response, email}},
        params: {id}
    }) {
        const responded = Boolean(response);

        if (responded) {
            await strapi.plugins.email.services.email.send({
                to: email,
                subject: 'INFO WYNWOODSTORE',
                text: response
            });
        }

        const entity = await strapi.services.contact.update({id}, { responded, response });        
        return sanitizeEntity(entity, { model: strapi.models.contact });
    },
    async create({request: {body: {
        message,
        email,
        firstname,
        lastname
    }}}) {
        
        const entity = await strapi.services.contact.create({ message, email, firstname, lastname });        

        return sanitizeEntity(entity, { model: strapi.models.contact });
    },

    
};
