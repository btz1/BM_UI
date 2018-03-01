angular.module('BlurAdmin', ['angular-oauth2'])
    .config(['OAuthProvider', function(OAuthProvider) {
        OAuthProvider.configure({
            baseUrl: 'http://localhost:8080/',
            clientId: 'shopistanClientApp',
            clientSecret: 'libiamoCalici',
            grantPath: '/oauth/token',
            revokePath: '/oauth/token/revoke',
            clientCredentials: 'header'
        });
    }]);