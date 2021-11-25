import React from "react";
import { connect } from 'react-redux';

import LessonsPageComp from './LessonsPageComp';
import MembersPageComp from './MembersPageComp';
import ProjectsPageComp from './ProjectsPageComp';
import AboutUsPageComp from './AboutUsPageComp';
import CalendarPageComp from './CalendarPageComp';
import HomePageComp from './HomePageComp';
import SignUpComp from "./SignUpComp";

class PageComp extends React.Component {
    render() {
        switch (this.props.views.page) {
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
            case 7:
                return <SignUpComp/>
            default:
                return null
        }
    }
}

function mapStateToProps(state) {
    return {
        views: state.views
    };
}

export default connect(mapStateToProps, null) (PageComp);