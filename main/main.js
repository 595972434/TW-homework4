module.exports = function main(dis,time) {
    console.log("Debug Info");
    if(dis<0 || time<0) return "Invalid";
    else return Math.round(DisFee(dis)+TimeFee(time));
};

/**
 * @return {number}
 */
function DisFee(distance){
    if(distance<=2) return 6;
    else if(distance<=8) return 6+(distance-2)*0.8;
    else return 6+(distance-2)*0.8+(distance-8)*0.4;
}
/**
 * @return {number}
 */
function TimeFee(tim){
     return tim*0.25;
}