'use client'
import { useRef } from 'react'
import {
  AircraftSvg,
  BookSvg,
  HoverItem1Svg,
  HoverItem2Svg,
  HoverItem3Svg,
  HoverItem4Svg,
  Item1_Svg,
  Item2_Svg,
  Item3_Svg,
  Item4_Svg,
  Item5_Svg,
  ListData,
  NextSvg,
  PrevSVg,
  TimeSvg,
} from './constant'
import './index.scss'

const AppPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handlePrev = () => {
    const scrollItemEl = document.getElementsByClassName('scroll-item')
    const wd = scrollItemEl[0].clientWidth + 48
    if (scrollRef.current && scrollRef.current.scrollLeft > 0) {
      scrollRef.current.scrollLeft -= wd
    }
  }
  const handleNext = () => {
    const scrollItemEl = document.getElementsByClassName('scroll-item')
    const wd = scrollItemEl[0].clientWidth + 48
    const max = [...scrollItemEl].length * wd
    if (scrollRef.current && scrollRef.current.scrollLeft < max) {
      scrollRef.current.scrollLeft += wd
    }
  }
  return (
    <div className="container">
      <div className="box" ref={scrollRef}>
        <div className="scroll-box">
          <span className="btn prev prev-show" onClick={handlePrev}>
            {PrevSVg}
          </span>
          <span className="btn next next-show" onClick={handleNext}>
            {NextSvg}
          </span>
          <div className="scroll-item item1">
            <div className="hover-item">{HoverItem1Svg}</div>
            <div className="source-item">
              {Item1_Svg}
              <div className="content-item">
                <div>
                  <span className="line line1"></span>
                  <h3 className="title">Introduction to programming</h3>
                  <div className="tag-box">
                    <span className="tag">Beginner</span>
                  </div>
                  <p className="text">
                    This course covers the most basic concepts in programming
                    using Solidity as an example.
                  </p>
                </div>
                <div className="footer">
                  <div className="item">
                    {TimeSvg} <span>36 Hour</span>
                  </div>
                  <div className="item">
                    {BookSvg} <span>5 Course</span>
                  </div>
                  <div className="item item-btn">
                    {AircraftSvg} <span>45% COMPLETED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-item item2">
            <div className="hover-item">{HoverItem2Svg}</div>
            <div className="source-item">
              {Item2_Svg}
              <div className="content-item">
                <div>
                  <h3 className="title">Moonshot 2023 Summer Hackathon</h3>
                  <div className="tag-box">
                    <span className="tag">All Tracks</span>
                    <span className="tag">Solidity</span>
                    <span className="tag">ZK</span>
                  </div>
                </div>
                <div className="footer-list">
                  {ListData.map((item) => {
                    return (
                      <div className="list-item" key={item.label}>
                        <span className="label">{item.label}</span>
                        <span className="value">{item.value}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-item item3">
            <div className="hover-item">{HoverItem3Svg}</div>
            <div className="source-item">
              {Item3_Svg}
              <div className="content-item">
                <div>
                  <span className="line line2"></span>
                  <h3 className="title">Web 3.0 Programming Basics</h3>
                  <div className="tag-box">
                    <span className="tag">Beginner</span>
                  </div>
                  <p className="text">
                    Basic concepts in programming of Solidity. Topics include:
                    variables, functions, flow control, error handling, data
                    structure.
                  </p>
                </div>
                <div className="footer">
                  <div className="item">
                    {TimeSvg} <span>36 Hour</span>
                  </div>
                  <div className="item">
                    {BookSvg} <span>5 Course</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-item item4">
            <div className="hover-item">{HoverItem4Svg}</div>
            <div className="source-item">
              {Item4_Svg}
              <div className="content-item">
                <span className="line line3"></span>
                <div className="footer footer-image-text">
                  <div className="item">
                    {TimeSvg} <span>36 Hour</span>
                  </div>
                  <span className="text">What is Bitcoin</span>
                </div>
              </div>
              <div className="item-image">{Item5_Svg}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppPage
