import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.components';
import './collection-overview.styles.scss';

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {
            collections.map(({ id, ...otherCollectioprops }) => (
                <CollectionPreview key={id} {...otherCollectioprops} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default  connect(mapStateToProps)(CollectionOverview);