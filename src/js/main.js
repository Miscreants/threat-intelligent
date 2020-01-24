$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

$.getJSON("data/data.json", function(json) {
    rng = getRandomInt(0, json.length - 1, json)
    $(".apt-name").text(json[rng].name);
    printNames(json, rng);
    printDesc(json, rng);
    printInfo(json, rng);
    printLink(json, rng);

});

function getRandomInt(min, max, json) {
    min = Math.ceil(min);
    max = Math.floor(max);
    int = Math.floor(Math.random() * (max - min + 1)) + min;
    return int;
}

function printMultiple(dict) {
    var i;
    newStr = "";

    if (dict.length == 1) {
        newStr += dict[0];
        return newStr
    }
    if (dict.length == 2) {
        newStr += dict[0];
        newStr += " and "
        newStr += dict[1]
        return newStr
    }
    for (i = 0; i < dict.length - 1; i++) {
        newStr += dict[i]
        newStr += ", "
    }
    newStr += "and "
    newStr += dict[i]
    return newStr
}

function printNames(json, int) {
    if (json[int].synonyms && json[int].synonyms.length > 0) {
        $(".apt-aka-text").text("Also known as ");
        text = printMultiple(json[int].synonyms) + "."
        $(".apt-aka").text(text);
    }
};

function printDesc(json, int) {
    if (json[int].description) {
        split = json[rng].description.split(".")
        if (split[1]) {
            text = split[0] + ". " + split[1] + "."
        } else {
            text = split[0];
        }
        $(".apt-description").text(text);
    } else {
        $(".apt-description").text(" ");
    }
};

function printInfo(json, int) {
    if (json[int].attribution) {
        $(".apt-name-2").text(json[rng].name);
        $(".apt-attribution-text").text(" is attributed to ");
        text = json[int].attribution + ".";
        $(".apt-attribution").text(text);
    };

    if (json[int].targets) {
        $(".apt-targets-text").text("It has been observed targeting ");
        text = printMultiple(json[int].targets) + ".";
        $(".apt-targets").text(text);
    }
    if (json[int].motivation) {
        $(".apt-motivation-text").text("This threat actor is motivated by ");
        text = json[int].motivation + ".";
        $(".apt-motivation").text(text);
    }
};

function printLink(json, int) {
    if (json[int].link) {
        $(".apt-link-text").text("Learn More >>");
        $(".apt-link").attr("href", json[int].link);
    }

};