module.exports = function(expirationLimits){
    const hoursExpiration = Math.floor(Math.random() * (expirationLimits.max - expirationLimits.min)) + expirationLimits.min;
    const secondsExpiration = hoursExpiration * 3600;
    return function (req, res, next) {
        res.header('Cache-Control', 'max-age=' + secondsExpiration + ', must-revalidate');
        next();
    };
};
