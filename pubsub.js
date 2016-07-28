function EventBroker(){

}

EventBroker.prototype.subscribe=function(element, eventType, callback){
    this.subscribers=this.subscribers||[];
    this.subscribers.push({'eventType':eventType, 'element':element});
    element.addEventListener(eventType, callback, false);
};

EventBroker.prototype.publish=function(eventType, data){
    for (var i = 0; i < this.subscribers.length; i++) {
        if (this.subscribers[i].eventType===eventType) {
            var evt=new CustomEvent(eventType, {detail:data});
            this.subscribers[i].element.dispatchEvent(evt);
        }
    }
};

EventBroker.prototype.unSubscribe=function(eventType, element){
    for (var i = 0; i<this.subscribers.length; i++) {
        if (this.subscribers[i].eventType===eventType && this.subscribers[i].element === element) {
            this.subscribers.splice(i, 1);
        }
    }
};
