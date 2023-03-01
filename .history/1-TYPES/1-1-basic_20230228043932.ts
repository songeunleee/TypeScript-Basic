{
   /** 
   *js타입 2가지
    *Primitive: number, string, boolean, bigint, symbol, null, undefined
    *Object: function, array....
   */  

    //  ts 기본타입

    //  1. number
    const num:number = 1;

    //  2. string
    const str:string = 'hello';

    //  3. boolean
    const boal:boolean = false;

    //  4. undefined => 값이 있는지 비었는지 결정되지 않음
    let name: undefined; // 💩 이렇게 작성하면 다른값을 저장할 수 없음, undefined로 이미 타입이 지정되어서
    let age:number | undefined;
    age = undefined;
    age = 1 ;
    function find(): number | undefined{ // 이 함수 처럼 무언가가 있고 없을때 undefined를 많이 사용
        return 1;
    }

    //  5.  null => 값이 비어있음
    let person: null; //💩 위와 같음
    let person2:string | null;

    //보통 undefined를 optional로 사용
    
    //  6. unknown 💩 가능하면 안씀
    let notSure: unknown =0;
    notSure = 'hi';
    notSure = true;

    //  7. any 💩 잘 안쓴다.
    let anything: any =0;
    anything = 'hello';

    //  8. void 아무런 것도 리턴하지 않으면...
    function print(): void {
        console.log('hello');
        return; //void는 이게 생략됨
    }
    let unusable: void = undefined; // 💩변수에는 선언안함, undefined밖에 할당할 수 없음

    //  9. never 절대 리턴되면 안돼
    function throwError(message: string): never{
        // message -> server (log)
        throw new Error(message);
        while (true) {}
    }

    //  10. object
    let obj: object; // 💩 추상적임 다 담을 수 있기때문에 쓰지않는것이 좋다
    function acceptSomeObject(obj: object){}
    acceptSomeObject({name: 'ellie'});
    acceptSomeObject({animal: 'dog'});
    
}