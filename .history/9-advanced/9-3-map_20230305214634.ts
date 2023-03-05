{
  type Video = {
    title: string;
    author: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for..in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]; // for..in
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "d",
  };
  animal.name = "ellie";

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "ellie",
  };
  // video.author = 'sdf' 읽기 전용으로 맴타입으로 전환해서 불가능

  //   type VideoOptional = {
  //     title?: string;
  //     author?: string;
  //     descriprion?: string;
  //   }

  //    type VideoReadOnly = {
  //     readonly title: string;
  //     readonly author: string;
  //     readonly descriprion: string;
  //   }

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title:null
    author:null
  }
}
