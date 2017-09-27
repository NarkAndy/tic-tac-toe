class TicTacToe {
    constructor() {
		this.CurrentSymbol = 'x';
        this.Board = [[null,null,null],[null,null,null],[null,null,null]];
    }

    //return correct player symbol
	getCurrentPlayerSymbol() {
		return this.CurrentSymbol;
    }

    //update game state correctly
	nextTurn(rowIndex, columnIndex) {
		//console.log('PlayerSymbol: '+ this.CurrentSymbol);
		if (!this.Board[rowIndex][columnIndex]){
            if(this.CurrentSymbol === 'x'){
                this.Board[rowIndex][columnIndex] = 'x';
				this.CurrentSymbol = 'o';
            } else {
                this.Board[rowIndex][columnIndex] = 'o';
				this.CurrentSymbol = 'x';
            }
        }
    }

    //return true if there are three same Symbols
	_threeEqual(a,b,c) {
		return (a === b) && (a === c) && (a!=null);
	}

	//return winner of the game or null
	isFinished() {
		if (this.getWinner() || this.isDraw()) {
            return true;
        }else{
            return false;
        }
    }



	//return winner of the game or null
	getWinner() {
		for(let i=0;i<3;i++) {
			if (this._threeEqual(this.Board[i][0],this.Board[i][1],this.Board[i][2])) {
				//console.log('WinnerSymbol i0: '+ this.getFieldValue(i,0));
				//console.log(this.Board[i][0]+' | '+this.Board[i][1]+' | '+this.Board[i][2]);
				return this.Board[i][0];
			}
			else if (this._threeEqual(this.Board[0][i],this.Board[1][i],this.Board[2][i])) {
				//console.log('WinnerSymbol 0i: '+ this.getFieldValue(0,i));
				//console.log(this.Board[0][i]+' | '+this.Board[1][i]+' | '+this.Board[2][i]);
				return this.Board[0][i];
			}
		}

		if (this._threeEqual(this.Board[0][0], this.Board[1][1], this.Board [2][2]) || this._threeEqual(this.Board[2][0], this.Board[1][1], this.Board [0][2])) {
			//console.log('WinnerSymbol Diag: '+ this.getFieldValue(1,1));
			return this.Board[1][1];
		}
		//console.log('return null');
		return null;

    }

    //true if game field is full and false otherwise
	noMoreTurns() {
		for(let i=0; i<3;i++){
			for(let j=0;j<3;j++){
				if (this.Board[i][j] === null){
					return false;
				}
			}
		}
		return true;
    }

	//return false if game is not finished or there is a winner, and true if it is a draw
    isDraw() {
		if (this.getWinner() === null && this.noMoreTurns() === true){
			return true;
		}
		return false;

    }

    //return correct field valuez
	getFieldValue(rowIndex, colIndex) {
		return this.Board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
