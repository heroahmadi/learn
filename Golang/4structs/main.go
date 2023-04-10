package main

import "fmt"

type person struct {
	firstName string
	lastName  string
}

func main() {
	structCreation()
}

func structCreation() {
	alex := person{"Alex", "Anderson"}
	alex2 := person{firstName: "Alex", lastName: "Anderson"}

	fmt.Println(alex, alex2)

	// default value of string in struct is a zero value (empty string, 0, or false), not nil
	var emptyStruct person
	fmt.Printf("%+v", emptyStruct)
}
