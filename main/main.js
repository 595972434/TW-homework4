module.exports = function main(dis,time) {
    console.log("Debug Info");
    if(dis<0 || time<0)
    {   return "Invalid";}
    else
    {
        if(dis<=2)
            return Math.round(6+time*0.25);
    }
};