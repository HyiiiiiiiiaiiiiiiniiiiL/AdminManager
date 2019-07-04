import React from 'react'
import 'dplayer/dist/DPlayer.min.css';
import DPlayer from 'dplayer';

export default class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dp: {}
        }
    }
    componentDidMount() {
        const dp = new DPlayer({
            container: document.getElementById('dplayer'),
            video: {
                url: 'demo.mp4'
            },
        })
        this.setState({ dp })

    }
    render() {
        return (
            <div id="page-wrapper">
                <div id="dplayer"></div>
            </div>
        )
    }
}