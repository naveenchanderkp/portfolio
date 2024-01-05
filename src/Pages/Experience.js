import React from 'react'
import{
    VerticalTimeline,
    VerticalTimelineElement,
}from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'

function Experience() {
  return (
    <div className='experience'>
       < VerticalTimeline lineColor='#3e497a'>
       <VerticalTimelineElement className='vertical-timeline-element--education'
       date="2009-2011"
       iconStyle={{background:"#3e497a",color:"#fff"}}
       icon={<SchoolIcon/>}> 
        <h3 className='vertical-timeline-element-title'>
           St.Francis Xavier Hr.Sec.School
        </h3>
        <p>High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
       date="2011-2015"
       iconStyle={{background:"#3e497a",color:"#fff"}}
       icon={<SchoolIcon/>}> 
        <h3 className='vertical-timeline-element-title'>
            Excel college of Engineering and technology
        </h3>
        <p>UG Degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
       date="2017-2017"
       iconStyle={{background:"#3e497a",color:"#fff"}}
       icon={<SchoolIcon/>}> 
        <h3 className='vertical-timeline-element-title'>
            Zenrays Technology,Banglore
        </h3>
        <p>Front-End Training</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
       date="2018-2018"
       iconStyle={{background:"#e9d35b",color:"#fff"}}
       icon={<WorkIcon/>}> 
        <h3 className='vertical-timeline-element-title'>
            Datazymes Private Ltd,Banglore
        </h3>
        <p>Software Engineer</p>
        </VerticalTimelineElement>
       </ VerticalTimeline>
    </div>
  )
}

export default Experience