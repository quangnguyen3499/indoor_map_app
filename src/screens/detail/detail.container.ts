import {connect} from 'react-redux';
import DetailComponent from './detail.view';
import {doGetPlaceDetail} from '@shared-state';

export const DetailContainer = connect(
  (state: any) => {
    return {
      isLoading: state.placeDetail.isLoading,
      placeDetail: state.placeDetail.placeDetail,
    };
  },
  (dispatch: any) => {
    return {
      doGetPlaceDetail: (place_id: string) => {
        dispatch(doGetPlaceDetail(place_id));
      },
    };
  },
)(DetailComponent);
