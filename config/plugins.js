module.exports = ({ env }) => ({
    email: {
        provider: 'sendgrid',
        providerOptions: {
            apiKey: env('SENDGRID_APIKEY'),
        },
        settings: {
            defaultFrom: 'noreply@wynwoodstore.net',
            defaultReplyTo: 'noreply@wynwoodstore.net',
        },
    },
});
