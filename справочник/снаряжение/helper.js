 function hb_farling() {
    let string = arguments[0];
    return string.split(",")[0]
}

handlebars.registerHelper('split', hb_farling);