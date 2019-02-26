import React from 'react';
import YouTube from 'react-youtube';
import './PlayExercise.css'

class PlayExercise extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {timer: 0};
  }

  componentWillUpdate (nextProps) {
    if (this.props.exercise !== nextProps.exercise) {
      this.play(nextProps.exercise)
    }
  }

  componentDidMount(){
    this.play(this.props.exercise)
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  play(exercise){
    const self = this;

    this.refs.ping && this.refs.ping.play();
    this.setState({count: exercise.duration});
    clearInterval(this.state.timer);

    const timer = setInterval(function () {
      if (self.state.count > 0){
        self.setState({count: self.state.count -1})
      }
    }, 1000);

    this.setState({timer: timer})
  }

  render() {
    const exercise = this.props.exercise;
    return (

      <div>
        <div id="ping">
          <video
            width="50"
            type="video/mp4"
            ref="ping"
            src="https://firebasestorage.googleapis.com/v0/b/timeapp-cecba.appspot.com/o/videoplayback.mp4?alt=media&token=63709be9-586d-48b2-aba8-cb13e7820024"></video>
        </div>

        {exercise.name}
        <br />
        <img src={exercise.img}/>
        <br />
        {exercise.duration}
        <br />
        {this.state.count}
      </div>
    );
  }
}


export default PlayExercise;

