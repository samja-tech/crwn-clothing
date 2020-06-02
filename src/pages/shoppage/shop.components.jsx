import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionStart } from '../../redux/shop/shop.actions';
import CollectionOverviewContainer from '../../components/collection-overview/collections-overview.components'
import CollectionContainer from '../collection/collection.component.container';

const ShopPage = ({ fetchCollectionStart, match }) => {

    useEffect(()=>{
        fetchCollectionStart();
    },[fetchCollectionStart]);
    
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
        </div>
    )
}

const mapToDispatch = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapToDispatch)(ShopPage);