// code follow https://refactoring.guru/design-patterns/observer

// Publisher
class EventManager {
  listeners = new Map();

  subscribe(listener) {
    this.listeners.set(listener, listener);
  }

  unsubcribe(listener) {
    this.listeners.delete(listener);
  }

  notify(data) {
    this.listeners.forEach((listener) => {
      listener.update(data);
    });
  }
}

class Editor {
  constructor() {
    this.events = new EventManager();
  }

  openFile(path) {
    this.events.notify(path);
  }
}

class EventListener {
  update(filename) {}
}

class LoggingListener extends EventListener {
  update(filename) {
    console.log("logging listener: ", filename);
  }
}

class EmailListener extends EventListener {
  update(filename) {
    console.log("email listener: ", filename);
  }
}

const editor = new Editor();
logger = new LoggingListener();
email = new EmailListener();

editor.events.subscribe(logger);
editor.events.subscribe(email);

editor.openFile("/path/subcribe.txt");

editor.events.unsubcribe(email);
editor.openFile("/path/unsubcribe.txt");
