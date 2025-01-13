function resoudreSudoku(grille) {
    for (let ligne = 0; ligne < 9; ligne++) {
        for (let col = 0; col < 9; col++) {
            if (grille[ligne][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (estValide(grille, ligne, col, num)) {
                        grille[ligne][col] = num;
                        if (resoudreSudoku(grille)) {
                            return true;
                        }
                        grille[ligne][col] = 0; // Backtrack
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function estValide(grille, ligne, col, num) {
    for (let i = 0; i < 9; i++) {
        if (grille[ligne][i] === num || grille[i][col] === num) return false;
    }
    let startRow = Math.floor(ligne / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (grille[i][j] === num) return false;
        }
    }
    return true;
}
  
module.exports = {
    resoudreSudoku,
    estValide
  };