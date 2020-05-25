import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { selectCollectionIsFetching,selectionIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import CollectionOverviewContainer from '../../components/collection-overview/collections-overview.components'
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const WithSpinnerCollectionPage =  WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {fetchCollectionStartAsync} = this.props;
        fetchCollectionStartAsync();        
    }
    render(){
        const { match,isCollectionLoaded } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} render = {props => (<WithSpinnerCollectionPage isLoading={!isCollectionLoaded} {...props} />)} />
            </div>
        )
   }
} 
const mapToStateProps = createStructuredSelector({
    isCollectionLoaded: selectionIsCollectionLoaded
})
const mapToDispatch = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapToStateProps,mapToDispatch)(ShopPage);