import React from 'react';
import HeaderComp from './HeaderComp';
import AboutUsPageComp from './pages/AboutUsPageComp';
import CalendarPageComp from './pages/CalendarPageComp';
import HomePageComp from './pages/HomePageComp';
import LessonsPageComp from './pages/LessonsPageComp';
import MembersPageComp from './pages/MembersPageComp';
import ProjectsPageComp from './pages/ProjectsPageComp';

class MainComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageView : 1
		};
	}

	render() {
		switch (this.state.pageView) {
			case 1:
				return([<HeaderComp/>,<HomePageComp/>]);
			case 2:
				return([<HeaderComp/>,<AboutUsPageComp/>]);;
			case 3:
				return([<HeaderComp/>,<MembersPageComp/>]);
			case 4:
				return([<HeaderComp/>,<ProjectsPageComp/>]);
			case 5:
				return([<HeaderComp/>,<LessonsPageComp/>]);
			case 6:
				return([<HeaderComp/>,<CalendarPageComp/>]);
			default:
				return null;
		}
	}
}

export default MainComp