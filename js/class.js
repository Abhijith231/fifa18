function intl(){
    console.log("Class loaded");
}

/* this is class for players */

class players {
    constructor(goalKeeper, defender, forward, midFielder, coach, capPos, capAdd){
        this.goalKeeper = goalKeeper;
        this.defender = defender;
        this.forward = forward;
        this.midFielder = midFielder;
        this.coach = coach;
        this.capPos = capPos;
        this.capAdd = capAdd;
        
        this.retCapAdd = function (capPos, capAdd){
            if (capPos == "gk"){
                this.Captain =  this.goalKeeper[capAdd];
            }
            else if (capPos == "for"){
                this.Captain = this.forward[capAdd];
            }
            else if (capPos == "def"){
                this.Captain = this.defender[capAdd];
            }
            else if (capPos == "mid"){
                this.Captain = this.midFielder[capAdd];
            }           
        }


    }
}


var argGK = ["Sergio Romero" , "Wilfredo Caballero" , "Franco Armani "]
var argMid = [ "Javier Mascherano" , "Eduardo Salvio" , "Lucas Biglia" , "Giovani Lo Celso" , "Ever Banega ", "Manuel Lanzini ", "Maximiliano Meza ","Angel di Maria" , "Cristian Pavon" ]
/* player class end here */

/* this is class for teams */

class team {
    constructor(teamName, players, flag, fifaRank,){
        this.teamName = teamName;
        this.players = players;
        this.flag = flag;
        this.fifaRank = fifaRank;
        console.log(this.teamName + "loaded");
    }
}
/* team class end here */

/*venue class starts here*/

class venue{
    constructor(venueName, place, capacity){
        this.venueName = venueName;
        this.place = place;
        this.capacity = capacity;
    }

}

function displayVenue(venue){
    console.log("clicked");
    document.getElementById(venue).style.display = "block";
}
/* venue class ends here */
/*
________________________________________________________________________________________
|                                                                                       |
|                                                                                       |
|                                                                                       |
|                                                                                       |
|                                                                                       |
|_______________________________________________________________________________________|

*/
/* this is class for match */

class match{
    constructor(team1, team2){
        this.team1 = team1;
        this.team2 = team2;

    }
}

/* match class end here */

/* group match class starts here*/

class groupMatch {

}
/*group match class ends here */

/*knock out class starts here */
class knockOutMatch{

}
/*knock out class ends here */

