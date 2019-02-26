import React from 'react';
import YouTube from 'react-youtube';

const PlayVideo = ({name, opts, onReady}) => {
  console.log(name)
  return (
    <div>
      <YouTube
        videoId="NovyGK3L9hY"
        opts={opts}
        onReady={onReady}
      />
    </div>
  );
};

export default PlayVideo;