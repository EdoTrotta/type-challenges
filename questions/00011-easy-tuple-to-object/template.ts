// iterate over T[number] and return a new type
// where the key and value is the type from T[number]

type TupleToObject<T extends readonly PropertyKey[]> = { [K in T[number]]: K }
