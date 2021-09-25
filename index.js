const team = {
    _players: [
      {
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      age: 36
    },
    {
      firstName: 'Edinson',
      lastName: 'Cavani',
      age: 34
    },
    {
      firstName: 'Marcus',
      lastName: 'Rashford',
      age: 23
    }
    ],
    _games: [
      {
        opponent: 'Man City',
        teamPoints: 3,
        opponentPoints: 2
      },
      {
        opponent: 'Chelsea',
        teamPoints: 1,
        opponentPoints: 2
      },
      {
        opponent: 'Liverpool',
        teamPoints: 2,
        opponentPoints: 0
      }
    ],
    get games () {
      return this._games;
    },
    get players () {
      return this._players;
    },
    addPlayer (firstName, lastName, age) {
      let player = {
        firstName,
        lastName,
        age
      };
      this.players.push(player)
    },
    addGame (opponentName, teamPoints, opponentPoints) {
      let game = {
        opponentName,
        teamPoints,
        opponentPoints
      };
      this.games.push(game)
    }
  };
  
  // Tests
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Arsenal', 2, 1);
  team.addGame('Aston Villa', 3, 3);
  team.addGame('Tottenham', 3, 0);
  
  console.log(team.players);
  console.log(team.games);