class GlobalEvent {
  constructor(args) {
    this.id = 1;
    this.events = {};
    this.idfrom = {};
  }
  trigger(name, param) {
    const eventList = this.events[name];
    if (eventList) {
      for (const e in eventList) {
        eventList[e].call(null, param);
      }
    }
  }
  haslistener(name) {
    if (this.events[name] && Object.keys(this.events[name]).length) {
      return true;
    }
    return false;
  }
  addlistener(name, func) {
    const id = this.id;
    if (!this.events[name]) this.events[name] = {};
    this.events[name][id] = func;
    this.idfrom[id] = name;
    this.id++;
    return id;
  }
  removelistener(id) {
    if (this.idfrom[id]) {
      delete this.events[this.idfrom[id]][id];
      delete this.idfrom[id]
    }
  }
}

const globalEvent = new GlobalEvent();
const G = {
  trigger(name, param) {
    globalEvent.trigger(name, param);
  },
  addlistener(name, func) {
    return globalEvent.addlistener(name, func);
  },
  haslistener(name) {
    return globalEvent.haslistener(name);
  },
  removelistener(id) {
    globalEvent.removelistener(id);
  }
};

module.exports = G;
