{
let shift_to_update = function(male, component, drawable) { // THIS GETS YOU AN UPDATED ID FROM AN OLD ONE
    switch (component){
        case 8: //accs
            if (male)
                return drawable >= 189 ? drawable + 2 : drawable
            else
                return drawable >= 234 ? drawable + 2 : drawable
        case 1: //berd
            if (male)
                return drawable >= 196 ? drawable + 11 : drawable
            else
                return drawable >= 204 ? drawable + 2 : drawable
        case 10: //decl
            if (male)
                return drawable >= 130 ? drawable + 4 : drawable
            else
                return drawable >= 140 ? drawable + 4 : drawable
        case 6: //feet
            if (male)
                return drawable >= 102 ? drawable + 7 : drawable
            else
                return drawable >= 106 ? drawable + 7 : drawable
        case 2: //hair
            if (male)
                return drawable >= 78 ? drawable + 2 : drawable
            else
                return drawable >= 82 ? drawable + 2 : drawable
        case 5: //hand
            if (male)
                return drawable >= 98 ? drawable + 11 : drawable
            else
                return drawable >= 100 ? drawable + 11 : drawable
        case 11: //jbib
            if (male)
                return drawable >= 393 ? drawable + 20 : drawable
            else
                return drawable >= 415 ? drawable + 25 : drawable
        case 4: //lowr
            if (male)
                return drawable >= 144 ? drawable + 4 : drawable
            else
                return drawable >= 151 ? drawable + 5 : drawable
        case 7: //teef
            if (male)
                return drawable >= 57 ? drawable + 2 : drawable
            else
                return drawable >= 121 ? drawable + 2 : drawable
        case 3: //uppr
            if (male)
                return drawable >= 197 ? drawable + 1 : drawable
            else
                return drawable >= 242 ? drawable + 1 : drawable
        case 0: //hats
            if (male)
                return drawable >= 163 ? drawable + 17 : drawable
            else
                return drawable >= 164 ? drawable + 17 : drawable
        default: 
            return drawable
    }
}


let shift_from_update = function(male, component, drawable) { // THIS GETS YOU AN OLD ID FROM AN UPDATED ONE
    switch (component){
        case 8: //accs
            if (male)
                return drawable >= (189+2) ? drawable - 2 : drawable
            else
                return drawable >= (234+2) ? drawable - 2 : drawable
        case 1: //berd
            if (male)
                return drawable >= (196+11) ? drawable - 11 : drawable
            else
                return drawable >= (204+2) ? drawable - 2 : drawable
        case 10: //decl
            if (male)
                return drawable >= (130+4) ? drawable - 4 : drawable
            else
                return drawable >= (140+4) ? drawable - 4 : drawable
        case 6: //feet
            if (male)
                return drawable >= (102+7) ? drawable - 7 : drawable
            else
                return drawable >= (106+7) ? drawable - 7 : drawable
        case 2: //hair
            if (male)
                return drawable >= (78+2) ? drawable - 2 : drawable
            else
                return drawable >= (82+2) ? drawable - 2 : drawable
        case 5: //hand
            if (male)
                return drawable >= (98+11) ? drawable - 11 : drawable
            else
                return drawable >= (100+11) ? drawable - 11 : drawable
        case 11: //jbib
            if (male)
                return drawable >= (393+20) ? drawable - 20 : drawable
            else
                return drawable >= (415+25) ? drawable - 25 : drawable
        case 4: //lowr
            if (male)
                return drawable >= (144+4) ? drawable - 4 : drawable
            else
                return drawable >= (151+5) ? drawable - 5 : drawable
        case 7: //teef
            if (male)
                return drawable >= (57+2) ? drawable - 2 : drawable
            else
                return drawable >= (121+2) ? drawable - 2 : drawable
        case 3: //uppr
            if (male)
                return drawable >= (197+1) ? drawable - 1 : drawable
            else
                return drawable >= (242+1) ? drawable - 1 : drawable
        case 0: //hats
            if (male)
                return drawable >= (163+17) ? drawable - 17 : drawable
            else
                return drawable >= (164+17) ? drawable - 17 : drawable
        default: 
            return drawable
    }
}

var blacklisted_male_comp = [
    [11,55],
    [11,178],
    [11,186],
    [11,275],
    [11,276],
    [11,277],
    [11,278],
    [11,283],
    [11,286],
    [11,287],
    [11,289],
    [11,291],
    [11,314],
    [11,315],
    [11,333],
    [11,394],
    [11,395],
    [11,396],
    [11,397],
    [11,398],
    [11,399],
    [11,400],
    [11,401],
    [11,402],
    [11,403],
    [11,404],
    [11,405],
    [11,416],
    [11,417],
    [11,419],
    [11,422],
    [11,423],
    [11,424],
    [11,426],
    [11,427],
    [11,428],
    [11,478],
    [11,479],
    [11,489],
    [11,490],
    [11,492],
    [11,503],
    [11,504],
    [11,505],
    [11,507],
    [11,508],
    [11,521],
    [11,541],
    [11,542],
    [11,548],
    [11,549],
    [11,550],
    [11,551],
    [11,552],
    [11,553],
    [11,560],
    [11,561],
    [11,562],
    [11,563],
    [11,571],
    [11,573],
    [11,574],
    [10,192],
    [10,191],
    [10,190],
    [10,189],
    [10,183],
    [10,182],
    [10,170],
    [10,169],
    [10,168],
    [10,167],
    [10,166],
    [10,165],
    [10,140],
    [10,139],
    [10,138],
    [10,137],
    [10,134],
    [10,133],
    [10,132],
    [10,131],
    [10,130],
    [10,70],
    [8,56],
    [8,97],
    [8,123], // stupid FD thing tht does an animation
    [8,125],
    [8,126],
    [8,127],
    [8,128],
    [8,145],
    [8,164],
    [8,189],
    [8,190],
    [8,201],
    [8,204],
    [8,205],
    [8,208],
    [8,209],
    [8,210],
    [7,204],
    //[7,198], ulsa
    //[7,197], ulsa
    [7,158],
    [6,55],
    [6,58],
    [6,68],
    [6,87],
    [6,88],
    [6,89],
    [6,91],
    [4,77],
    [4,84],
    [4,85],
    [4,95],
    [4,106],
    [4,108],
    [4,109],
    [4,110],
    [4,112],
    [4,113],
    [4,114],
    [4,115],
    [4,120],
    [4,121],
    [4,127],
    [4,148],
    [4,149],
    [4,152],
    [4,166],
    [4,187], // LEO motorcycle pants
    [4,167], // LEO motorcycle pants
    [5,1],
    [5,2],
    [5,3],
    [5,4],
    [5,5],
    [5,6],
    [5,7],
    [5,8],
    [5,9],
    [5,10],
    [5,11],
    [5,12],
    [5,13],
    [5,14],
    [5,15],
    [5,16],
    [5,17],
    [5,18],
    [5,19],
    [5,20],
    [5,21],
    [5,22],
    [5,23],
    [5,24],
    [5,25],
    [5,26],
    [5,27],
    [5,28],
    [5,29],
    [5,30],
    [5,31],
    [5,32],
    [5,33],
    [5,34],
    [5,35],
    [5,36],
    [5,37],
    [5,38],
    [5,39],
    [5,40],
    [5,41],
    [5,42],
    [5,43],
    [5,44],
    [5,45],
    [5,46],
    [5,47],
    [5,48],
    [5,49],
    [5,50],
    [5,51],
    [5,52],
    [5,53],
    [5,54],
    [5,55],
    [5,56],
    [5,57],
    [5,58],
    [5,59],
    [5,60],
    [5,61],
    [5,62],
    [5,63],
    [5,64],
    [5,65],
    [5,66],
    [5,67],
    [5,68],
    [5,69],
    [5,70],
    [5,71],
    [5,72],
    [5,73],
    [5,74],
    [5,75],
    [5,76],
    [5,77],
    [5,78],
    [5,79],
    [5,80],
    [5,81],
    [5,82],
    [5,83],
    [5,84],
    [5,85],
    [5,86],
    [5,87],
    [5,88],
    [5,89],
    [5,90],
    [5,91],
    [5,92],
    [5,93],
    [5,94],
    [5,95],
    [5,96],
    [5,97],
    [5,98],
    [5,99],
    [5,100],
	[5,101],
	[5,102],
	[5,103],
	[5,104],
	[5,105],
	[5,106],
	[5,107],
	[5,108],
	[5,109],
	[5,110],
	[5,111],
	[5,112],
	[5,113],
	[5,114],
	[5,115],
	[5,116],
	[5,117],
	[5,118],
	[5,119],
	[5,120],
	[5,121],
	[5,122],
	[5,123],
	[5,124],
	[9,1],
	[9,2],
	[9,3],
	[9,4],
	[9,5],
	[9,6],
	[9,7],
	[9,8],
	[9,9],
	[9,10],
	[9,11],
	[9,12],
	[9,13],
	[9,14],
	[9,15],
	[9,16],
	[9,17],
	[9,18],
	[9,19],
	[9,20],
	[9,21],
	[9,22],
	[9,23],
	[9,24],
	[9,25],
	[9,26],
	[9,27],
	[9,28],
	[9,29],
	[9,30],
	[9,31],
	[9,32],
	[9,33],
	[9,34],
	[9,35],
	[9,36],
	[9,37],
	[9,38],
	[9,39],
	[9,40],
	[9,41],
	[9,42],
	[9,43],
	[9,44],
	[9,45],
	[9,46],
	[9,47],
	[9,48],
	[9,49],
	[9,50],
	[9,51],
	[9,52],
	[9,53],
	[9,54],
	[9,55],
	[9,57],
	[9,58],
	[9,59],
	[9,60],
	[9,61],
	[9,62],
	[9,63],
	[9,64],
	[9,65],
	[9,66],
	[9,67],
	[9,68],
	[9,69],
	[9,70],
	[9,71],
	[9,72],
	[9,73],
	[9,74],
	[9,78],
	[9,79],
	[9,80],
	[9,81],
	[9,82],
	[9,83],
	[9,84],
	[9,85],
	[9,88],
	[9,89],
	[9,90],
	[9,91],
	[9,93],
	[9,94],
	[9,95],
	[9,96],
	[9,97],
	[9,98],
];

var blacklisted_female_comp = [
    [11,665],
    [11,664],
    [11,663],
    [11,654],
    [11,653],
    [11,652],
    [11,651],
    [11,621],
    [11,620],
    [11,619],
    [11,618],
    [11,617],
    [11,610],
    [11,609],
    [11,595],
    [11,579],
    [11,578],
    [11,577],
    [11,576],
    [11,575],
    [11,559],
    [11,558],
    [11,557],
    [11,554],
    [11,553],
    [11,544],
    [11,498],
    [11,473],
    [11,472],
    [11,471],
    [11,466],
    [11,465],
    [11,464],
    [11,436],
    [11,434],
    [11,433],
    [11,428],
    [11,427],
    [11,426],
    [11,425],
    [11,424],
    [11,423],
    [11,422],
    [11,421],
    [11,420],
    [11,419],
    [11,418],
    [11,417],
    [11,348],
    [11,326],
    [11,325],
    [11,304],
    [11,302],
    [11,300],
    [11,299],
    [11,298],
    [11,296],
    [11,291],
    [11,290],
    [11,289],
    [11,288],
    [11,188],
    [11,180],
    [11,48],
    [10,263],
    [10,262],
    [10,184],
    [10,183],
    [10,182],
    [10,181],
    [10,180],
    [10,179],
    [10,178],
    [10,149],
    [10,148],
    [10,147],
    [10,146],
    [10,145],
    [10,144],
    [10,143],
    [10,142],
    [10,141],
    [10,140],
    [10,79], // cop texture
    [8,33],
    [8,105],
    [8,153], // that stupid FD thing that causes you todo an anim
    [8,155],
    [8,156],
    [8,157],
    [8,158],
    [8,186],
    [8,192],
    [8,200],
    [8,240],
    [8,300],
    [8,301],
    [8,305],
    [8,308],
    [8,309],
    [8,310],
    [8,313],
    [8,315],
    [7,133],
    //[7,147], removed due to ULSA not having /uniform
    //[7,148], same as above
    [7,153],
    [7, 95], // added due to IAA waist badge
    [4,113], // superhero shit
    [4,114], // superhero shit
    [4,115],
    [4,116],
    [4,117], // superhero shit
    [4,119], // superhero shit
    [4,120],
    [4,126], // FD pants
    [4,131], // unrealistic armored feet
    [4,132],
    [4,154],
    [4,155],
    [4,162],
    [4,176],
    [4, shift_from_update(false, 4, 152)], // ORLEANS/BIG FOOT COSTUME
    [4,178] // LEO motorcycle pants
    [9,1],
	[9,2],
	[9,3],
	[9,4],
	[9,5],
	[9,6],
	[9,7],
	[9,8],
	[9,9],
	[9,10],
	[9,11],
	[9,12],
	[9,13],
	[9,14],
	[9,15],
	[9,16],
	[9,17],
	[9,18],
	[9,19],
	[9,20],
	[9,21],
	[9,22],
	[9,23],
	[9,24],
	[9,25],
	[9,26],
	[9,27],
	[9,28],
	[9,29],
	[9,30],
	[9,31],
	[9,32],
	[9,33],
	[9,34],
	[9,35],
	[9,36],
	[9,37],
	[9,38],
	[9,39],
	[9,40],
	[9,41],
	[9,42],
	[9,43],
	[9,44],
	[9,45],
	[9,46],
	[9,47],
	[9,48],
	[9,49],
	[9,50],
	[9,51],
	[9,52],
	[9,53],
	[9,54],
	[9,55],
	[9,57],
	[9,58],
	[9,59],
	[9,60],
	[9,61],
	[9,62],
	[9,63],
	[9,64],
	[9,65],
	[9,66],
	[9,67],
	[9,68],
	[9,69],
	[9,70],
	[9,71],
	[9,72],
	[9,73],
	[9,77],
	[9,78],
	[9,79],
	[9,80],
	[9,81],
	[9,82],
	[9,85],
	[9,86],
	[9,87],
	[9,88],
	[9,89],
	[9,90],
	[9,92],
	[9,93],
	[9,94],
    [5,1],
    [5,2],
    [5,3],
    [5,4],
    [5,5],
    [5,6],
    [5,7],
    [5,8],
    [5,9],
    [5,10],
    [5,11],
    [5,12],
    [5,13],
    [5,14],
    [5,15],
    [5,16],
    [5,17],
    [5,18],
    [5,19],
    [5,20],
    [5,21],
    [5,22],
    [5,23],
    [5,24],
    [5,25],
    [5,26],
    [5,27],
    [5,28],
    [5,29],
    [5,30],
    [5,31],
    [5,32],
    [5,33],
    [5,34],
    [5,35],
    [5,36],
    [5,37],
    [5,38],
    [5,39],
    [5,40],
    [5,41],
    [5,42],
    [5,43],
    [5,44],
    [5,45],
    [5,46],
    [5,47],
    [5,48],
    [5,49],
    [5,50],
    [5,51],
    [5,52],
    [5,53],
    [5,54],
    [5,55],
    [5,56],
    [5,57],
    [5,58],
    [5,59],
    [5,60],
    [5,61],
    [5,62],
    [5,63],
    [5,64],
    [5,65],
    [5,66],
    [5,67],
    [5,68],
    [5,69],
    [5,70],
    [5,71],
    [5,72],
    [5,73],
    [5,74],
    [5,75],
    [5,76],
    [5,77],
    [5,78],
    [5,79],
    [5,80],
    [5,81],
    [5,82],
    [5,83],
    [5,84],
    [5,85],
    [5,86],
    [5,87],
    [5,88],
    [5,89],
    [5,90],
    [5,91],
    [5,92],
    [5,93],
    [5,94],
    [5,95],
    [5,96],
    [5,97],
    [5,98],
    [5,99],
    [5,100],
	[5,100],
	[5,101],
	[5,102],
	[5,103],
	[5,104],
	[5,105],
	[5,106],
	[5,107],
	[5,108],
	[5,109],
	[5,110],
	[5,111],
	[5,112],
	[5,113],
	[5,114],
	[5,115],
	[5,116],
	[5,117],
	[5,118],
	[5,119],
	[5,120],
	[5,121],
	[5,122],
	[5,123],
	[5,124],
	[5,125],
	[5,148],
    [2,1],
];

function findNextAvailableSlotFemale(component, drawable, max, direction) {
    for (var i = 0; i < blacklisted_female_comp.length; i++) {
        if (blacklisted_female_comp[i][0] === component) {
            if(direction == 0){ //forward
                for (var j = drawable; j < max; j++) {
                    if(!isVariantBlacklistedFemale(component, j)) return j;
                }
            }else{
                for (var j = drawable; j > 0; j--) {
                    if(!isVariantBlacklistedFemale(component, j)) return j;
                }
            }
        }
    }
    return -1;
}

function findNextAvailableSlotMale(component, drawable, max, direction) {
    for (var i = 0; i < blacklisted_male_comp.length; i++) {
        if (blacklisted_male_comp[i][0] === component) {
            if(direction == 0){ //forward
                for (var j = drawable; j < max; j++) {
                    if(!isVariantBlacklistedMale(component, j)) return j;
                }
            }else{
                for (var j = drawable; j > 0; j--) {
                    if(!isVariantBlacklistedMale(component, j)) return j;
                }
            }
        }
    }
    return 0;
}

function countMaxDrawableFemale(comp){
    if (blacklist_items === false)
        return false;

    var item = blacklisted_female_comp.filter(item => { return (item[0] === comp); });
    return item.length;
}

function countMaxDrawableMale(comp){
    if (blacklist_items === false)
        return false;

    var item = blacklisted_male_comp.filter(item => { return (item[0] === comp); });
    return item.length;
}

function isVariantBlacklistedFemale(comp, draw){
    if (blacklist_items === false)
        return false;

    var item = blacklisted_female_comp.find(item => { return (item[0] === comp && shift_to_update(false, item[0], item[1]) === draw); });
    var found = true;
    if(item === undefined || item === null) found = false;
    return found;
}

function isVariantBlacklistedMale(comp, draw){
    if (blacklist_items === false)
        return false;

    var item = blacklisted_male_comp.find(item => { return (item[0] === comp && shift_to_update(true, item[0], item[1]) === draw); });
    var found = true;
    if(item === undefined || item === null) found = false;
    return found;
}

}