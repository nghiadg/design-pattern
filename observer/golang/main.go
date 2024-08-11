package main

import "fmt"

type eventListener interface {
	update(filepath string)
}

// Event Manager
type eventManager struct {
	listeners map[string]eventListener
}

func (event *eventManager) subcribe(key string, listener eventListener) {
	event.listeners[key] = listener
}

func (event *eventManager) unsubcribe(key string) {
	delete(event.listeners, key)
}

func (event *eventManager) notify(filepath string) {
	for _, listener := range event.listeners {
		listener.update(filepath)
	}
}

type loggingListener struct {
}

func (loggingListener) update(filepath string) {
	fmt.Println("Logging listener: ", filepath)
}

type emailListener struct {
}

func (emailListener) update(filepath string) {
	fmt.Println("Email listener: ", filepath)
}

type editor struct {
	events eventManager
}

func (e *editor) openFile(path string) {
	e.events.notify(path)
}

func main() {
	eventManager := eventManager{make(map[string]eventListener)}
	editor := editor{eventManager}

	loggingListener := loggingListener{}
	emailListener := emailListener{}

	editor.events.subcribe("logger", loggingListener)
	editor.events.subcribe("email", emailListener)

	editor.openFile("/path/subcribe.txt")

	editor.events.unsubcribe("email")
	editor.openFile("/path/unsubscribe.txt")
}
