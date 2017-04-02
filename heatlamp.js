module.exports = function(expirationLimits){
    return function (req, res, next) {
        const secondsExpiration = Math.floor(Math.random() * ((expirationLimits.max * 3600) - (expirationLimits.min * 3600))) + (expirationLimits.min * 3600);
        res.header('Cache-Control', 'max-age=' + secondsExpiration + ', must-revalidate');
        next();
    };
};
