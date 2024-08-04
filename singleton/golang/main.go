package main

import (
	"fmt"
	"sync"
)

// it just like class
type mathSingleton struct{}

var instance *mathSingleton
var lock = &sync.Mutex{}

// method for math class
func (mathSingleton) sum(a int, b int) int {
	return (a*100 + b*100) / 100
}

func getInstance() *mathSingleton {
	if instance == nil {
		lock.Lock()
		defer lock.Unlock()

		instance = &mathSingleton{}
		fmt.Println("instance is created successfully")
	} else {
		fmt.Println("instance is already created")
	}

	return instance
}

func main() {
	var wg sync.WaitGroup

	for i := 0; i < 2; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			s := getInstance()
			fmt.Println(s.sum(10, 10))
		}()
	}

	wg.Wait()
}
