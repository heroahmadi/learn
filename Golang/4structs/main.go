package main

import "fmt"

type contactInfo struct {
	email   string
	zipCode int
}

type person struct {
	firstName string
	lastName  string
	// contact   contactInfo

	// this means we create property named contactInfo of type contactInfo
	contactInfo
}

func (p person) print() {
	fmt.Printf("%+v\n", p)
}

func (p person) updateName(newFirstName string) {
	p.firstName = newFirstName
}

func (pointerToPerson *person) updateNameWithPointer(newFirstName string) {
	(*pointerToPerson).firstName = newFirstName
}

func main() {
	// structCreation()
	pointers()
}

func structCreation() {
	// creating struct without the property name
	alex := person{"Alex", "Anderson", contactInfo{"john@doe.com", 1900}}

	// creating struct with property name
	alex2 := person{
		firstName: "Alex",
		lastName:  "Anderson",
		contactInfo: contactInfo{
			email:   "john@doe.com",
			zipCode: 9000,
		}}

	fmt.Println(alex, alex2)
	alex.print()
	alex2.print()

	// default value of string in struct is a zero value (empty string, 0, or false), not nil
	var emptyStruct person
	fmt.Printf("%+v", emptyStruct)
}

// turn value to pointer -> use &
// turn pointer to value -> use *
func pointers() {
	var emptyStruct person
	fmt.Printf("%+v", emptyStruct)

	emptyStruct.updateName("New first name")
	emptyStruct.print()

	emptyStructPointer := &emptyStruct
	emptyStructPointer.updateNameWithPointer("New first name")
	emptyStruct.print()
}
