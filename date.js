exports.getDate = function() { //module.exports is actually an object. This means it has properties and function associated with it.

    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);

}