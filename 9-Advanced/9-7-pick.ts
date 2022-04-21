{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // 기존의 원하는 데이터에서 내가 원하는것만 쏙쏙 뽑아서 사용 하고 싶을때 Pick!
  type VideoMetadata = Pick<Video, 'id' | 'title'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: 'title',
    };
  }
}
