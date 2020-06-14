import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
// import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import { loadRequest } from '../../store/ducks/repositories/actions';

interface StateProps {
    repositories: Repository[]
}
interface DispatchProps {
    loadRepositories(): void,
}

type Props = StateProps & DispatchProps

class RepositoryList extends Component<Props> {    

    componentDidMount() {
        const { loadRepositories } = this.props;
        loadRepositories();
    }

    render() {
        const { repositories } = this.props;    
        
        console.log(repositories)

        return (
            <ul>
                {repositories.map(repository => <li>{repository.name}</li>)}
            </ul>
        )
    }

}

const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data,
});

// const mapDisparchToProps = (dispatch: Dispatch) => 
//     bindActionCreators(RepositoriesActions, dispatch)

const mapDisparchToProps = (dispatch: Dispatch) => {
    return  {
        loadRepositories: () => dispatch(loadRequest()),
    }
}

export default connect(mapStateToProps, mapDisparchToProps)(RepositoryList);