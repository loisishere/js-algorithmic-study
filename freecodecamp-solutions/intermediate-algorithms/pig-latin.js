/**
 * If a word begins with a vowel you just add "way" to the end.
 * 
 * Input strings are guaranteed to be English words in all lowercase.
 */
function translatePigLatin(str) {
    var arr = str.split(/(^[^aoeiu]*)/).reverse();
    if (arr.length > 1) {
        return arr.join("") + "ay";
    } else { return arr.join("") + "way"; }
}