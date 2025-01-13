function tspBrutForce(distances) {
    let villes = Object.keys(distances);
    let permutations = permuter(villes);
    let minDistance = Infinity;
    let meilleurePermutation = [];
    
    permutations.forEach(chemin => {
        let distanceTotale = 0;
        for (let i = 0; i < chemin.length - 1; i++) {
            distanceTotale += distances[chemin[i]][chemin[i + 1]];
        }
        distanceTotale += distances[chemin[chemin.length - 1]][chemin[0]]; // Retour à la ville de départ
        
        let distanceTotaleRedondeada = Math.round(distanceTotale * 10) / 10;
        
        if (distanceTotaleRedondeada < minDistance) {
            minDistance = distanceTotaleRedondeada;
            meilleurePermutation = chemin;
        }
    });
    return { minDistance, meilleurePermutation };
}


function permuter(arr) {
    if (arr.length === 0) return [[]];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let reste = arr.slice(0, i).concat(arr.slice(i + 1));
        let permut = permuter(reste);
        for (let j = 0; j < permut.length; j++) {
            result.push([arr[i]].concat(permut[j]));
        }
    }
    return result;
}


module.exports = {
    tspBrutForce,
    permuter
  };
  