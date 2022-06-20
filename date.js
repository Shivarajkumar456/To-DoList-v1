module.exports.getDate = () => {
    let today = new Date();
    let cd = today.getDay();
    let options = {
    weekday : "long",
    day : "numeric",
    month : "long"
    };
    return today.toLocaleDateString("en-IN", options);
}

module.exports.getDay = () => {
    let today = new Date();
    let cd = today.getDay();
    let options = {
    weekday : "long"
    };
    return today.toLocaleDateString("en-IN", options);
}