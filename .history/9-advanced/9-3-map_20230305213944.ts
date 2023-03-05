{
  type Video = {
    title: string;
    author: string;
    descriprion: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for..in
  };

  type VideoOptional = Optional<Video>;

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
