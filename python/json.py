import json
person = {
    "firstName": "John",
    "lastName": "Doe",
    "hobbies": ["sports", "swimming", "singing"],
    "age": 30,
    "children": [
        {
            "firstName": "NYB",
            "age": "DWBI"
        }
    ]
}

personJSON = json.dumps(person)
