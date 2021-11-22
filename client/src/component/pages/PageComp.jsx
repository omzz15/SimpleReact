import LessonsPageComp from './LessonsPageComp';
import MembersPageComp from './MembersPageComp';
import ProjectsPageComp from './ProjectsPageComp';
import AboutUsPageComp from './AboutUsPageComp';
import CalendarPageComp from './CalendarPageComp';
import HomePageComp from './HomePageComp';

import React from "react";

class PageComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageView: this.props.pageView
        }
    }

    render() {
        switch (this.state.pageView) {
            case 1:
                return <HomePageComp/>
            case 2:
                return <AboutUsPageComp/>
            case 3:
                return <MembersPageComp/>
            case 4:
                return <ProjectsPageComp />
            case 5:
                return <LessonsPageComp />
            case 6:
                return <CalendarPageComp />
            default:
                return null
        }
    }
}

export default PageComp