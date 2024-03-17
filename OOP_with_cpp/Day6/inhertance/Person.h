#ifndef PERSON_H
#define PERSON_H

#include <cstring> // Instead of <string.h> for C++ code
#include <iostream>

using namespace std;

class Person {
    int id;
    char *name;
    int age;

public:
    Person() {
        id = 0;
        age = 0;
        name="Null";
    }

    Person(int _id, char *_name, int _age) {
        id = _id;
        name = _name;
        age = _age;
    }

    void print() {
        cout << id << name << age;
    }

    // Add a destructor to free the allocated memory for the name
    ~Person() {
        delete[] name;
    }
};

#endif // PERSON_H
