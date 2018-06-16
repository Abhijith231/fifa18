/* this is class for players */

class players {
    constructor(goalKeeper, defender, forward, midFielder, coach){
        this.goalKeeper = goalKeeper;
        this.defender = defender;
        this.forward = forward;
        this.midFielder = midFielder;
        this.coach = coach;
    }
}

/* player class end here */

/* this is class for teams */

class team {
    constructor(teamName, players, flag, fifaRank, capAdd){
        this.teamName = teamName;
        this.players = players;
        this.flag = flag;
        this.fifaRank = fifaRank;
        this.captain = this.players[capAdd];
        this.capAdd = capAdd;
        console.log(this.teamName + "loaded");
    }
}
/* team class end here */

/* this is class for match */

class match{
    constructor(team1, team2){
        this.team1 = team1;
        this.team2 = team2;

    }
}

/* match class end here */