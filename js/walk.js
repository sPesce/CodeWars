/*
 Original Problem:
 You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

 Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
 */

var directions = ['n', 'e', 's', 'w'];


function isValidWalk(walk) {
    // Walk takes more than 10 minutes
    if (walk.length !== 10) {
        return false;
    }
    
    var xOff = 0;
    var yOff = 0;
    
    // Loop through all the steps
    for (var i = 0; i < walk.length; i++) {
        var step = walk[i];
        
        // Add offset depending in letter
        switch (step) {
            case 'n':
                yOff++;
                break;
            case 's':
                yOff--;
                break;
            case 'e':
                xOff++;
                break;
            case 'w':
                xOff--;
                break;
        }
    }
    
    // Return true in case the location is the original one
    return xOff === 0  && yOff === 0;
}
