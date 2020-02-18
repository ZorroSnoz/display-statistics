import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import StatsItem from './table-item/table-item';
import { getUsersThunk } from '../../redux/stats-reduser';
import Stats from './stats';


let StatsContainer = ({ getUsersThunk, statsData }) => {

    useEffect(() => {
        getUsersThunk(statsData.totalUsersNamber, statsData.currentPage);
    }, []);

    let statsItems = [];
    statsItems = statsData.usersData.map(item => (<StatsItem userData={item} />))

    return <Stats statsItems={statsItems} />
};

let mapStateToProps = (state) => {
    return {
        statsData: state.statsPage
    }
};

export default connect(mapStateToProps, { getUsersThunk })(StatsContainer);