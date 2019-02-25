module.exports = function main(dis,time) {
    console.log("Debug Info");
    if(dis<0 || time<0)
    {   return "Invalid";}
    else
    {
        if(dis<=2)
            return Math.round(6+time*0.25);
        else if(dis <=8)
            return Math.round(6+(dis-2)*0.8+time*0.25);
        else
            return Math.round(6+(dis-2)*0.8+(dis-8)*0.4+time*0.25);
    }
};