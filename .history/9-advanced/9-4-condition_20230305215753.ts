type Check<T> = T extends string ? boolean : number;
type Type = Check<string>; // boolean

type TypeName<T> = T extends string
? 'string'
: T extends number? 'number':
