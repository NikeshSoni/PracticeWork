import {useRef , useState} from 'react';
import VideoWork from  './Assets/appleVideo.mp4'
import Button from 'react-bootstrap/Button';

const VideoPlay = () => {

    const [videoState ,setVideoState ] = useState(false);

    const videoPlay = useRef(null);
    
    const handlePlay = () => {
        
        // if (videoState) {
        //     videoPlay.current.pause();
        // } else {
        //     videoPlay.current.play() 
        // }

        {videoState ?  videoPlay.current.pause() :  videoPlay.current.play() }

        setVideoState(!videoState)
    }

  return (
    <div className='center-all-data'>
        <video src={VideoWork}
                onClick={handlePlay}
                ref={videoPlay}
                type="video/mp4"
                className='videoPlay mt-5' />

        <div className='d-flex gap-5 mt-3'>
            <Button onClick={handlePlay} variant="outline-success">
                {videoState ? 'Pasue' : 'Play'}
            </Button>
        </div>
    </div>
  )
}

export default VideoPlay