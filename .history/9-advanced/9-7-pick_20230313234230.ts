{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, "id" | "title">; //타입을 받아서 기존의 키중에서 몇몇만 사용할 때

  function getVideo1(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  function getVideoMetadata2(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
