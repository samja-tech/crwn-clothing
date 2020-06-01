import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectionIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapToStateProps = createStructuredSelector ({
    isLoading : state => !selectionIsCollectionLoaded(state)
});

const CollectionContainer = compose (
    connect(mapToStateProps),
    withSpinner
)(CollectionPage);

export default CollectionContainer;