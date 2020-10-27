'use strict';
// const nodemailer = require('nodemailer');

// const poolConfig = 'smtps://info@devsign.org:eAzbK)bX4C5s@mail.devsign.org';

// const transporter = nodemailer.createTransport(poolConfig);

module.exports = {
  send: async (subject, content, to) => {
    await strapi.plugins['email'].services.email.send({
      to: 'gabrielescorche@gmail.com', // email recipient
      from: 'gescorche@devsign.org', // email sender
      replyTo: 'gabrielescorche@gmail.com',
      subject: 'Email subject line', 
      text: 'Email body should come here'
    });
    // const options = {
    //   from: 'info@devsign.org',
    //   to: to ? to : 'info@devsign.org',
    //   subject,
    //   html: content,
    // };

    // return transporter.sendMail(options);
  },
};