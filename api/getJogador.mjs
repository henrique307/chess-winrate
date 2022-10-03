import ChessWebAPI from 'chess-web-api';
const chessAPI = new ChessWebAPI();

chessAPI.getPlayerStats('MagnusCarlsen')
    .then((res) => {
        console.log('player profile', res.body)
    }, (err) => {
        console.log(err)
    })