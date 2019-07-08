/*
Scoreboard class
*/

function Scoreboard() {
}


Scoreboard.prototype = {
    init: function (score, dist) {
        var doSave = confirm("Do you want to save your score?");
        if (doSave) this.save(score, dist);
    },

    save: function (score, dist) {
        var scoreboard = this.get();

        var name = prompt("Enter name: ");
        scoreboard.push({
            Name: name,
            Score: score,
            Distance: dist
        });

        scoreboard.sort(function (a, b) { return a.Score > b.Score ? -1 : 1 });
        var scoreboard = scoreboard.slice(0, 10);

        localStorage.SCOREBOARD = JSON.stringify(scoreboard);
    },

    show: function () {
        var scoreboard = this.get();
    },

    log: function () {
        console.table(this.get());
    },

    get: function () {
        var scoreboard = [];
        try { scoreboard = localStorage.SCOREBOARD ? JSON.parse(localStorage.SCOREBOARD) : []; }
        catch (ex) { localStorage.clear(); }

        return scoreboard;
    },
}