const Stopwatch = function (){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running)
        throw new Error('Stopwatch has already started');

        running =  true;

        startTime = new Date();
    };

    this.stop = function() {
        if(!running)
        throw new Error('Stopwatch is not started. ')
        
        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/ 1000;
        duration += seconds;
    };

    this.reset = function(){
        startTime=null;
        endTime=null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {get: function(){
        return duration;}
    });
}
 const sw = new Stopwatch();

 /*
 let startTime, endTime, running, duration = 0;
const Stopwatch = function (){

        
}

Stopwatch.prototype.start = function(){
    if(running)
    throw new Error('Stopwatch has already started');

    running =  true;

    startTime = new Date();
};

Stopwatch.prototype.stop = function() {
    if(!running)
    throw new Error('Stopwatch is not started. ')
    
    running = false;
    endTime = new Date();
};

Stopwatch.prototype.duration = function(){
    const seconds = (endTime.getTime() - startTime.getTime())/ 1000;
    duration += seconds;
    return duration;
}

Stopwatch.prototype.reset = function(){
    startTime=null;
    endTime=null;
    running = false;
    duration = 0;
};

let useOne = new Stopwatch();
let useTwo = new Stopwatch();
// const sw = new Stopwatch();
 */