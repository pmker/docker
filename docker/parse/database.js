module.exports =
{
    buildConnectionUrl: (env, appId) =>
    {
        let url = 'mongodb://';

        // Add username & password
        if(typeof env.DB_USERNAME !== 'undefined' && typeof env.DB_PASSWORD !== 'undefined') {
            url += env.DB_USERNAME + ':' + env.DB_PASSWORD + '@';
        }

        // Add the host and database
        url += env.DB_HOST + '/parse_' + appId + '?authSource=admin';

        if(typeof env.PARSE_SERVER_DATABASE_URI !== 'undefined'){
            url=env.PARSE_SERVER_DATABASE_URI+"/"+appId;
        }
        console.log(url)
        return url;
    }
};
