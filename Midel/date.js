const date=(req,res,next)=>{
    let date = new Date();
    let h =date.getHours()
    let d= date.getDate
    if(date.getDay > 0 && date.getDay < 6 && date.getHours() > 9 && date.getHours < 17){
        next();
    }else{
        res.redirect('/offlinepage');
    }
};
    
    module.exports=date