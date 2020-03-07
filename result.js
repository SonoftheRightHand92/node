function calculate(req, res) {
    console.log("results page was called");

    var mail = req.query.mail;
    var weight = parseFloat(req.query.weight);
    var cost = 0;

    if (mail === "Letters (Stamped)") {
        if (weight < 1) {
            cost = 0.55;
        }

        else if (weight < 2) {
            cost = 0.70;
        }

        else if (weight < 3) {
            cost = 0.85;
        }

        else if (weight < 3.5) {
            cost = 1.00;
        }
    }

    else if (mail === "Letters (Metered)") {
        if (weight < 1) {
            cost = 0.50;
        }

        else if (weight < 2) {
            cost = 0.65;
        }

        else if (weight < 3) {
            cost = 0.80;
        }

        else if (weight < 3.5) {
            cost = 0.95;
        }
    }

    else if (mail === "Large Envelopes (Flats)") {
        if (weight < 1) {
            cost = 1.00;
        }

        else if (weight < 2) {
            cost = 1.20;
        }

        else if (weight < 3) {
            cost = 1.40;
        }

        else if (weight < 4) {
            cost = 1.60;
        }

        else if (weight < 5) {
            cost = 1.80;
        }

        else if (weight < 6) {
            cost = 2.00;
        }

        else if (weight < 7) {
            cost = 2.20;
        }

        else if (weight < 8) {
            cost = 2.40;
        }

        else if (weight < 9) {
            cost = 2.60;
        }

        else if (weight < 10) {
            cost = 2.80;
        }

        else if (weight < 11) {
            cost = 3.00;
        }

        else if (weight < 12) {
            cost = 3.20;
        }

        else if (weight < 13) {
            cost = 3.40;
        }
    }

    else if (mail === "First-Class Package Service—Retail") {
        if (weight < 1) {
            cost = 3.65;
        }

        else if (weight < 2) {
            cost = 3.85;
        }

        else if (weight < 3) {
            cost = 4.05;
        }

        else if (weight < 4) {
            cost = 4.25;
        }

        else if (weight < 5) {
            cost = 4.45;
        }

        else if (weight < 6) {
            cost = 4.65;
        }

        else if (weight < 7) {
            cost = 4.85;
        }

        else if (weight < 8) {
            cost = 5.05;
        }

        else if (weight < 9) {
            cost = 5.25;
        }

        else if (weight < 10) {
            cost = 5.45;
        }

        else if (weight < 11) {
            cost = 5.65;
        }

        else if (weight < 12) {
            cost = 5.85;
        }

        else if (weight < 13) {
            cost = 6.05;
        }

        else if (weight < 16) {
            cost = 8.85;
        }

        else if (weight < 32) {
            cost = 10.75;
        }
    }


    var output = {item: mail, cost: cost};

    res.render('result', output);
}

module.exports = {calculate: calculate};