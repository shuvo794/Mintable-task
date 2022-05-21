import { Component } from "react";
import Card from './Card/Card'
import './Jibon-Slider.css'

export default class JibonSlider extends Component {
    render() {
        return (<div className="jibon-slider__container">
            <div className="title">Top <span>Collection</span></div>
            <Card title="demo" verify="verify" description="description" />
        </div>)
    }
}