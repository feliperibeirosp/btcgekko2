var strat = {};

strat.init = function() {
    this.addTulipIndicator('ema10','ema', {
        optInTimePeriod: 10
    });
    this.addTulipIndicator('ema21','ema', {
        optInTimePeriod: 21
    });
}

strat.check = function(candle){
const ema10 = this.tulipIndicators.ema10.result.result;
const ema21 = this.tulipIndicators.ema21.result.result;

console.log({ema10, ema21});
}

module.exports = strat;