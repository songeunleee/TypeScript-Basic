{
  type Video = {
    title: string;
    author: string;
    descriprion: string;
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

  const video: ReadOnly<ReadOnly> = {
    title: "hi",
    author: "ellie",
  };

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
}
